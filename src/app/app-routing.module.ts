import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthGaurdGuard } from './_services/auth-gaurd.guard'

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent}
  /*{ path: '', component: HomeComponent,canActivate:[AuthGaurdGuard] },
  { path: 'home', component: HomeComponent,canActivate:[AuthGaurdGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdGuard] }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
