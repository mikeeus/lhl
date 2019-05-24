import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from 'src/app/user.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  @Output() submit = new EventEmitter<User>();
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: 'Mikias',
      email: ['mikias@email.com', Validators.email],
      password: ['password'],
      password_confirmation: ['password'],
    }, { validators: [this.checkPasswords]});
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    const user = new User(this.registerForm.value);
    this.submit.emit(user);
  }

  private checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const pass = group.controls.password.value;
    const confirmPass = group.controls.password_confirmation.value;

    return pass === confirmPass ? null : { notSame: true };
  }
}
