export class Product {
    constructor(
      public  category:string,
      public title : string,
      public   description : string,
      public  price : number,
      public   quantity : number,
      public  images : []
    ){}
}
