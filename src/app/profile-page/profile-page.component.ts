import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProfilePageService} from './profile-page.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  firstName: string = '-';
  lastName: string = '-';
  sex: string = '-';
  city: string = '-';
  email: string = '-';
  foto: string = 'https://vk.com/images/camera_200.png';

  dataUuploaded = false;//todo исправить. (combainReq сервис)


  constructor(private router: Router,
              private profilePageService: ProfilePageService) {
  }

  ngOnInit() {
    this.profilePageService.profile.subscribe(infoUser => {
      this.firstName = infoUser.firstName;
      this.lastName = infoUser.lastName;
      this.sex = infoUser.sex==1? 'Жен':'Муж';
      this.city = infoUser.city;
      this.foto = infoUser.urlAvatar;
      this.dataUuploaded = true;
    });
    if ( localStorage.getItem('token-vk') && !this.dataUuploaded)
      this.profilePageService.getUserInfoVk({token: localStorage.getItem('token-vk')}).$observable
        .subscribe(infoUser => this.profilePageService.setProfile(infoUser));
  }

  editProfil() {
    this.router.navigate(['/editProfile']);
  }

}
