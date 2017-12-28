import { Injectable } from '@angular/core';
import {AGResource} from '../Core/ag-resource';
import {ResourceAction, ResourceMethod, ResourceParams} from 'ngx-resource';
import {FriendInfo} from './sidebar/friendInfo';

@Injectable()
@ResourceParams({pathPrefix: '/methods'})
export class MainPageService extends AGResource{
  //stor
  friends: FriendInfo[];
  //


  @ResourceAction({
    path: '/getFriendsVk/{!token}'
  })getFiendsVk: ResourceMethod<{token:string},FriendInfo[]>;
}
