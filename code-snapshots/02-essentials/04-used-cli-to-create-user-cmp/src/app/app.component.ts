import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import {UserComponent} from "./user/user.component";
import {DUMMY_USERS} from "./dummy-users";
import {TasksComponent} from "./tasks/tasks.component";

interface User { id: string; name: string; avatar: string; }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
    TasksComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser: User | undefined;

  onSelectUser(id : string){
    this.selectedUser = DUMMY_USERS.find(user => user.id == id);
  }
}
