import {Component, OnInit} from '@angular/core';
import {VkAuthService} from '../Core/auth/vk/vk-auth.service';
import {VkAuthReqService} from '../Core/auth/vk/vk-auth-req.service';
import {MainPageService} from './main-page.service';
import {switchMap} from 'rxjs/operators';
import {flatMap} from 'tslint/lib/utils';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  tokenVk: string;

  constructor(private vkAuthService: VkAuthService,
              private vkAuthReqService: VkAuthReqService,
              private mainPageService: MainPageService) {}

  ngOnInit() {
    //todo проверка если есть токен
    if (!localStorage.getItem('token-vk')) {
      //todo переделать под switchmap
      this.vkAuthReqService.getTokenAuth({code: this.vkAuthService.getCodeAuth()}).$observable
        .subscribe((data)=>{
          this.tokenVk = data.token;
          console.log(data.token);
          localStorage.setItem('token-vk',data.token);
        });
    } else {
      this.tokenVk = localStorage.getItem('token-vk');
    }
  }

}


// .pipe(
//   // flatMap((data)=>console.log(data),)
//   switchMap(data => )
// )
// this.vkAuthReqService.getTokenAuth({code: this.vkAuthService.getCodeAuth()}).$observable
//   .pipe(
//     switchMap((dataAuth) => {
//       console.log('maxxxx', dataAuth);
//       //if (!dataAuth.token) return;
//       //localStorage.setItem('token-vk', dataAuth.token);
//       return this.mainPageService.getInfoUserVk({token: dataAuth.token}).$observable;
//     })
//   ).subscribe(data => console.log(data))
// .switchMap(dataAuth => {
//   console.log('maxxxx');
//   if (!dataAuth.token) return;
//   //localStorage.setItem('token-vk', dataAuth.token);
//   return this.mainPageService.getInfoUserVk({token: dataAuth.token}).$observable;
// })
// .subscribe(dataInfo => {
//   console.log(dataInfo);
//   // localStorage.setItem('token-vk', data.token);
//   // console.log(data);
// })
