import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor( private _http : HttpClient) { }
  
}
