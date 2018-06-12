import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CrudUserService {
  
  private _rootUrl: string = 'https://infinite-lake-31773.herokuapp.com/notes/';

  constructor(private http: HttpClient) { }
  createUser(title: string, body:string): Observable<any> {
    return this.http.post(this._rootUrl, {title:title,body:body});
  }

  getUsers(): Observable<any>{
    return this.http.get(this._rootUrl)
    
  }
        
      
  }

  // updateUser(title: string, body:string): Observable<any> {
  //   return this.http.put<IUser>(`${this._rootUrl}/${user.id}`, user);
  // }

  // deleteUser(id: string): Observable<any> {
  //   return this.http.delete<IUser>(`${this._rootUrl}/${id}`);
  // }


