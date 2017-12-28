import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {MainPageService} from '../main-page.service';
import {ProfilePageService} from '../../profile-page/profile-page.service';
import {FriendInfo} from './friendInfo';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnChanges {
  @Input() token: string;
  //friends: FriendInfo[];



  constructor(private mainPageService: MainPageService,
              private profilPageService: ProfilePageService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    //todo исправить 2 observable
    if (!this.mainPageService.friends)
      this.mainPageService.getFiendsVk({token: this.token}).$observable
        .subscribe(data => {
          this.mainPageService.friends = data['items'];
        });

    this.profilPageService.getUserInfoVk({token: this.token}).$observable
      .subscribe(userInfo => this.profilPageService.setProfile(userInfo));

  }
}
