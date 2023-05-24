import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  [x: string]: any;

  constructor(
    private _http: HttpClient
  ) { }
  public getAllUsers(): any {
    return this._http.get('http://localhost:3000/users/getall').pipe(map(
      (res: any) => res))
  }
  public postCreateUsers(data:any): any {
    return this._http.post<any>('http://localhost:3000/users/create',data).pipe(map(
      (res: any) => res))
  }
  public deluser(data:any):any{
    return this._http.post<any>('http://localhost:3000/users/delete',data).pipe(map(
      (res:any)=> res))
  }
  public upuser(data:any):any{
    return this._http.put<any>('http://localhost:3000/users/update', data).pipe(map(
      (res:any)=>res))
  }
  
}
