import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { USERS_DATA } from "./mocks/users-list";
import { IUser} from "../interfaces/iuser.interface";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private localStorageKey = 'users';

  constructor() {
    // Initialize local storage with mock data if it's not already set
    if (!localStorage.getItem(this.localStorageKey)) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(USERS_DATA));
    }
  }

  getUsers(): Observable<IUser[]> {
    const users = JSON.parse(localStorage.getItem(this.localStorageKey)!);
    return of(users);
  }

  saveUsers(users: IUser[]): Observable<any> {
    localStorage.setItem(this.localStorageKey, JSON.stringify(users));
    return of(null);
  }

  createUser(newUser: IUser): Observable<any> {
    const users = JSON.parse(localStorage.getItem(this.localStorageKey)!);
    users.push(newUser);
    return this.saveUsers(users);
  }

  getUser(username: string): Observable<IUser | undefined> {
    const users = JSON.parse(localStorage.getItem(this.localStorageKey)!);
    const user = users.find((user: IUser) => user.username === username);
    return of(user);
  }

  deleteUser(username: string): Observable<any> {
    let users = JSON.parse(localStorage.getItem(this.localStorageKey)!);
    users = users.filter((user: IUser) => user.username !== username);
    return this.saveUsers(users);
  }
}
