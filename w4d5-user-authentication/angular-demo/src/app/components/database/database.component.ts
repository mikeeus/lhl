import { Component, Input, OnInit } from '@angular/core';

import { User } from 'src/app/user.model';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {
  @Input() users: User[];

  constructor() { }

  ngOnInit() {
  }

}
