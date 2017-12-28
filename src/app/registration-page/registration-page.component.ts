import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {VkAuthService} from '../Core/auth/vk/vk-auth.service';
import {VkAuthReqService} from '../Core/auth/vk/vk-auth-req.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
  public authForm: FormGroup;

  constructor(private router: Router,
              private vkAuthService: VkAuthService,
              private vk: VkAuthReqService) {
    this.authForm = new FormGroup({
      login: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit() {
  }

  connectToSocNetVk() {
    //нужна проверка возможно токен есть и активен
    this.vkAuthService.startAuthVk();
  }

  connectToSocNetLogPss(){
    console.log(this.authForm.value.login,this.authForm.value.password);

  }

}
