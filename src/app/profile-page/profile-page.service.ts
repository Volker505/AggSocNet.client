import { Injectable } from '@angular/core';
import {AGResource} from '../Core/ag-resource';
import {ResourceAction, ResourceMethod, ResourceParams} from 'ngx-resource';
import {Subject} from 'rxjs/Subject';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {Observable} from 'rxjs/Observable';
import {ProfileData} from './profile-data';

@Injectable()
@ResourceParams({pathPrefix: '/methods'})
export class ProfilePageService extends AGResource{

  private _profile: Subject<ProfileData> = new ReplaySubject<ProfileData>(1);
  public profile: Observable<ProfileData> = this._profile.asObservable();

  setProfile(profil: ProfileData){
    this._profile.next(profil);
  }

  @ResourceAction({
    path: '/infoUser/{!token}'
  })getUserInfoVk: ResourceMethod<{token:string},ProfileData>;

}
