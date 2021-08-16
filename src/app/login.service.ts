import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { User } from './user';

import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  URL='https://ecommerce-apis.herokuapp.com/auth/login/'
  constructor( private _http:HttpClient) { }

  login(user :User){
   return this._http.post<any>(this.URL, user)
            .pipe(catchError(this.errorHandler
            ))
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error)
  }
}
