import { Injectable } from '@angular/core';
import {AGResource} from '../../ag-resource';
import {ResourceAction, ResourceParams, ResourceMethod} from 'ngx-resource';
import {RequestMethod} from '@angular/http';

interface IQueryInput{
  token?: string;
  code?: string;
}

@Injectable()
@ResourceParams({pathPrefix: '/auth'})
export class VkAuthReqService extends AGResource{
  @ResourceAction({
    method: RequestMethod.Post,
    path: '/vk'
  })
  getTokenAuth:ResourceMethod<IQueryInput,{token: string}>;

}
