import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  users = [
    new User({ email: 'mikias@email.com', password: 'password', name: 'Mikias Abera' }),
    new User({ email: 'tim@email.com', password: 'password', name: 'Tim Johns' }),
    new User({ email: 'juan@email.com', password: 'password', name: 'Juan Gonzalez'}),
  ];

  processes = [];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(user: User) {
    this.users.push(user);

    this.processes = [
      this.newPostRequest('/api/register', user),
      this.newCreateProcess(user),
      this.newCreateResponse(user),
    ]
  }

  private newPostRequest(path: string, body: Partial<User>) {
    const formData = Object.keys(body).map(key => `${key}=${body[key]}`).join('&').replace(' ', '+');

    return {
      type: 'HTTP REQUEST',
      raw: `
      POST ${path} HTTP/1.1
      Host: 127.0.0.1:3000
      Accept: application/json, */*
      ...

      ${formData}
      `,
    };
  }

  private newCreateResponse(created: User) {
    return {
      type: 'HTTP RESPONSE',
      raw: `
      HTTP/1.1 200 OK
      Connection: close
      Content-Type: application/json
      ...

      ${JSON.stringify(created)}
      `,
    };
  }

  private newCreateProcess(user: User) {
    return {
      type: 'SERVER',
      raw: `
      user = User.find(req.body.email)
      if (!user) {
        hashedPassword = '${User.hash('password')}'
        user = User.create(name: '${user.name}', email: '${user.email}', passwordDigest: ${User.hash('password')})
      }

      res.cookies('user_id', user.id)
      res.json(user)
      `,
    };
  }

}
