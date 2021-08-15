import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Images } from './images';

import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  URL='https://ecommerce-apis.herokuapp.com/fileupload/upload-image'
  constructor( private _http:HttpClient) { }

  upload(image :Images){
   return this._http.post<any>(this.URL, image)
            .pipe(catchError(this.errorHandler
            ))
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error)
  }
}
