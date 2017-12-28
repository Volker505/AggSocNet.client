import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { ChatComponent } from './chat/chat.component';
import {
  MatButtonModule,
  MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule,
  MatTabsModule
} from '@angular/material';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MessageComponent } from './chat/message/message.component';
import {MainPageService} from './main-page.service';

@NgModule({
  imports: [
    CommonModule,
    MainPageRoutingModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [ChatComponent,
    SidebarComponent,
    MessageComponent
  ],
  providers:[
    MainPageService
  ],
  exports:[
    ChatComponent,
    SidebarComponent,
    MessageComponent
  ]
})
export class MainPageModule { }
