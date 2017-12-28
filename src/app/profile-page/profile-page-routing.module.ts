import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {ProfilePageComponent} from './profile-page.component';

const routes: Routes = [
  {path: 'profile', component: ProfilePageComponent},
  {path: 'editProfile', component: EditProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilePageRoutingModule { }
