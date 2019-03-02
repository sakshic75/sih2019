import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LayoutComponent} from "./layout/layout.component";
import {RegisterComponent } from './register/register.component';
const routes: Routes = [
  { path: 'layout', component: LayoutComponent,



},
{path:"dashboard",component:DashboardComponent},
{path:"login", component:LoginComponent},
{path:"register", component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
