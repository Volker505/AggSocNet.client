import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {data} from './staticData';
import {Observable} from 'rxjs/Observable';
import { Router} from '@angular/router';

@Injectable()
export class VkAuthService {

  constructor(private router: Router) {
  }

  public startAuthVk(){
    window.location.href = `https://oauth.vk.com/authorize?client_id=${data.id}&display=page&redirect_uri=${data.url}&scope=friends,photos,offline&response_type=code&v=5.69`;
  }

  getCodeAuth(): string{
    return this.router.url.split('=')[1];
    // return this.http.get(`https://oauth.vk.com/access_token?client_id=${data.id}&client_secret=${data.secret}&code=${this.router.url.split('=')[1]}`);
  }

}
