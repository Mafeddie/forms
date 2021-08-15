import { Component } from '@angular/core';

import { LoginService } from './login.service';
import { User } from './user';

import {Category} from './category';
import {AddcategoryService} from './addcategory.service';

import {Product}from './product';
import {AddproductService} from './addproduct.service';
import { ImageUploadService } from './image-upload.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export let token = '';

export class AppComponent {
  title = 'forms';
  errorMsg = '';
  userModel = new User('edward@proton.com', 'passwordndogo');
  catModel  = new  Category('Software');
  prodModel = new Product('category', 'title','description', 200,6 , []);

  token = '';

   selectedFile :  any = this.selectedFile?.item(0);
   
  constructor(private _loginService:LoginService ,
     private _addCat : AddcategoryService,
     private _addProd : AddproductService,
     private _upload : ImageUploadService,
     private _http : HttpClient ){}

  onSubmit(){
    // console.log(this.userModel);
    this._loginService.login(this.userModel)
    .subscribe(
      response => {
        console.log('Login Successful', response.access );
        this.token = response.access;
      },
     error => this.errorMsg = error.statusText
     )    
  }

  oncatSubmit(){
    // console.log(this.userModel);
    this._addCat.addCategory(this.catModel)
    .subscribe(
      response => {
        console.log('Category added Successfully' );
        
      },
     error => this.errorMsg = error.statusText
     )
      
    
  }

  onprodSubmit(){
    // console.log(this.userModel);
    this._addProd.addProduct(this.prodModel)
    .subscribe(
      response => {
        console.log('Product added Successfully' );
        
      },
     error => this.errorMsg = error.statusText
     )
      
    
  }
  onFileSelected(event){
    console.log(event);
    this.selectedFile = event.target.files[0];




  }
  onUpload(){
    
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this._http.post('https://ecommerce-apis.herokuapp.com/fileupload/upload-image', fd )
        .subscribe(
          res => {
            console.log(res)
          }
        )
  }




}
