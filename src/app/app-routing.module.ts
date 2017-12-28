import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationPageComponent} from "./registration-page/registration-page.component";
import {ProfilePageComponent} from "./profile-page/profile-page.component";

const routes: Routes = [
  {path: '', component: RegistrationPageComponent, pathMatch:'full'},
  //{path: 'profile', loadChildren: 'app/profile-page/profile-page.module#ProfilePageModule'},
  //{path: 'profile/edit', loadChildren: 'app/profile-page/edit-profile/profile-page.module#ProfilePageModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
