import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {MainPageRoutingModule} from "./main-page/main-page-routing.module";
import {ChatComponent} from "./main-page/chat/chat.component";
import {SidebarComponent} from "./main-page/sidebar/sidebar.component";
import { ProfilePageComponent } from './profile-page/profile-page.component';
import {ShareModule} from "./share/share.module";
import {MatListModule} from '@angular/material';
import {HttpModule} from '@angular/http';
import {AuthModule} from './Core/auth/auth.module';
import {MainPageModule} from './main-page/main-page.module';
import { EditProfileComponent } from './profile-page/edit-profile/edit-profile.component';
import {ProfilePageModule} from './profile-page/profile-page.module';
import {ProfilePageRoutingModule} from './profile-page/profile-page-routing.module';
import {ProfilePageService} from './profile-page/profile-page.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationPageComponent,
    ToolBarComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    MainPageRoutingModule,
    MainPageModule,
    ShareModule,
    MatListModule,
    HttpModule,
    AuthModule,
    ProfilePageModule,
  ],
  providers: [ProfilePageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
