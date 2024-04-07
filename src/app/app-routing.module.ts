import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from "./pages/user-list/user-list.component";
import {CreateUserComponent} from "./pages/create-user/create-user.component";

const routes: Routes = [
  { path: '', redirectTo: '/users-list', pathMatch: 'full' },
  { path: 'users-list', component: UserListComponent },
  { path: 'new-user', component: CreateUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
