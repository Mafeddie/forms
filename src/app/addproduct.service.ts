import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Product } from './product';

import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddproductService {

  URL='https://ecommerce-apis.herokuapp.com/products/product-create'


  constructor(private _http:HttpClient ) { }

  addProduct(prod :Product){
    let header= new HttpHeaders({
      
      'Authorization' : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI5MTQ1NzUzLCJqdGkiOiJjN2I5YTEwNzg5ZDE0MGM1YTgyN2E4NTA4ZjlhNTk5ZiIsInVzZXJfaWQiOjkwLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSJ9.DdvaKyaSjy-no5f6CDsRv_wqcfAICibXiYyJxzW14JQ"
    }
    );



    return this._http.post<any>(this.URL, prod )
             .pipe(catchError(this.errorHandler
             ))
   }
 
   errorHandler(error:HttpErrorResponse){
     return throwError(error)
   }

}
