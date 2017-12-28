import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VkAuthService} from './vk/vk-auth.service';
import {VkAuthReqService} from './vk/vk-auth-req.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[
    VkAuthService,
    VkAuthReqService
  ]
})
export class AuthModule { }
