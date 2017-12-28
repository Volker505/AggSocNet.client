import {NgModule} from '@angular/core';
import {ProfilePageComponent} from './profile-page.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {ProfilePageRoutingModule} from './profile-page-routing.module';
import {ShareModule} from '../share/share.module';
import {ProfilePageService} from './profile-page.service';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    ProfilePageRoutingModule,
    ShareModule,
    MatInputModule,
    FormsModule
  ],
  providers:[
    //ProfilePageService
  ],
  declarations: [
    ProfilePageComponent,
    EditProfileComponent
  ],
  exports: [
    ProfilePageComponent,
    EditProfileComponent
  ]
})
export class ProfilePageModule {

}
