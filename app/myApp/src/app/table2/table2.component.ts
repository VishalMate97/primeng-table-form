import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component implements OnInit {

  products: any[] =[];

  product:any;

  productDialog:boolean=false;

  cols: any[] = [];

  constructor() {}

  ngOnInit() {

    this.products = [
      {
        id: '1',
        code: '216290',
        name: 'Dell Trusty',
        email: 'dtrusty0@ask.com',
        gender: 'Male',
        ip_address: '127.61.192.3',
      },
      {
        id: '2',
        code: '75413 CEDEX 08',
        name: 'Kasper Balmann',
        email: 'kbalmann1@liveinternet.ru',
        gender: 'Male',
        ip_address: '173.17.77.8',
      },
      {
        id: 3,
        code: '21072 CEDEX',
        name: 'Lynnelle Pool',
        email: 'lpool2@mit.edu',
        gender: 'Genderfluid',
        ip_address: '230.79.6.190',
      },
      {
        id: 4,
        code: 'RXJS 4567',
        name: 'Enrique Burree',
        email: 'eburree3@toplist.cz',
        gender: 'Male',
        ip_address: '114.51.176.161',
      },
      {
        id: 5,
        code: '853-0704',
        name: 'Joann Kelbie',
        email: 'jkelbie4@google.ca',
        gender: 'Female',
        ip_address: '213.115.230.152',
      },
      {
        id: 6,
        code: '953-0704',
        name: 'shubham kondewar',
        email: 'shubham@toplist.cz',
        gender: 'Male',
        ip_address: '192.168.1.1',
      },
      {
        id: 7,
        code: '153-0704',
        name: 'Ganesh Landge',
        email: 'ganesh@google.ca',
        gender: 'male',
        ip_address: '192.168.1.57',
      }
    ];

    this.products.forEach(function (resp, index) {
      resp.dataKeyEdit = index + 1;
    });

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'email', header: 'Email' },
      { field: 'gender', header: 'Gender' },
      { field: 'ip_address', header: 'Ip Address' },
    ];
  }

  

  editProduct(product: any) {
    this.product = { ...product };
    this.productDialog = true;
  }

  newItem(product: any) {
    console.log(this.products);
    console.log(product);

    this.products[this.findIndexById(product.dataKeyEdit)] = this.product;

    console.log(this.products);
    this.products = [...this.products];
    this.productDialog = false;
  }

  findIndexById(dataKeyEdit: number): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].dataKeyEdit === dataKeyEdit) {
        index = i;
        break;
      }
    }

    return index;
  }

}
