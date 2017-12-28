import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  public user: any;

  constructor() { }

  setUser(user:any){
  }

  getUser():any{
    return '';
  }

  noAuthUser(){

  }

  public setTokenVk(token: string){
    localStorage.setItem('token-vk', token);
  }

  public getTokenVk():string{
    return localStorage.getItem('token-vk');
  }


}
