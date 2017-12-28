import {Resource, ResourceParams} from 'ngx-resource';
import {Injectable} from '@angular/core';
import {environment} from '../environment/environment';
import {Http} from '@angular/http';

@Injectable() @ResourceParams({url: environment.host})
export class AGResource extends Resource{
  protected http: Http;

  constructor(http: Http){
    super(http);
  }
}
