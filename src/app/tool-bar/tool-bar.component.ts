import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProfilePageService} from '../profile-page/profile-page.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {
  userStatus: boolean = false;
  toolBarMenu: string = '-';

  constructor(private router: Router,
              private profilePageService: ProfilePageService) {
  }

  ngOnInit() {
    this.profilePageService.profile
      .subscribe(infoUser => {
        this.toolBarMenu = `${infoUser.firstName} ${infoUser.lastName}`;
        this.userStatus = false;
      });

    if (localStorage.getItem('token-vk')) {
      this.userStatus = false;
      this.profilePageService.getUserInfoVk({token: localStorage.getItem('token-vk')}).$observable
        .subscribe(infoUser => this.profilePageService.setProfile(infoUser));
    } else {
      this.userStatus = true;
    }
  }

  openChats() {
    this.router.navigate(['/chats']);
  }

  entrance() {
    this.router.navigate(['/']);
  }

  openProfile() {
    console.log('profil');
    this.router.navigate(['/profile']);
  }

  openExit() {
    localStorage.removeItem('token-vk');
    this.userStatus = true;
    this.router.navigate(['/']);
  }

  aboutUs() {

  }
}
