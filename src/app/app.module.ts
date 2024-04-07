import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UserListComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [
    provideAnimationsAsync(), MatTableModule, MatButtonModule, MatCardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
