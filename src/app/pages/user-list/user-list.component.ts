import {Component, OnInit} from '@angular/core';
import { IUser } from "../../interfaces/iuser.interface";
import { UserService } from "../../service/users.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['username', 'first_name', 'last_name', 'email', 'user_type'];
  users: IUser[] = [];
  showForm: boolean = false

  constructor(private userService: UserService) { }

  ngOnInit(): void {
   this.getUsers()
  }

  public getUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  public toggleUserForm(): void {
    this.showForm = !this.showForm
  }

  public onUserCreated(): void {
    this.toggleUserForm();
    this.getUsers();
  }

}
