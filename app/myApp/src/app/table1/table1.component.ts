import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component implements OnInit {

  products: any[] =[];

  product:any;

  productDialog:boolean=false;

  cols: any[] = [];

  constructor() {}

  ngOnInit() {

    this.products = [{
      "id": 1,
      "first_name": "Denver",
      "last_name": "Bratch",
      "email": "dbratch0@nih.gov",
      "gender": "Male",
      "ip_address": "9.108.135.37"
    }, {
      "id": 2,
      "first_name": "Raimondo",
      "last_name": "Keeble",
      "email": "rkeeble1@bigcartel.com",
      "gender": "Male",
      "ip_address": "132.239.255.65"
    }, {
      "id": 3,
      "first_name": "Sydelle",
      "last_name": "Harby",
      "email": "sharby2@bigcartel.com",
      "gender": "Female",
      "ip_address": "174.131.178.217"
    }, {
      "id": 4,
      "first_name": "Mile",
      "last_name": "Sneath",
      "email": "msneath3@guardian.co.uk",
      "gender": "Male",
      "ip_address": "90.112.117.169"
    }, {
      "id": 5,
      "first_name": "Jamima",
      "last_name": "Jovicic",
      "email": "jjovicic4@examiner.com",
      "gender": "Female",
      "ip_address": "246.255.83.82"
    },
    {
      "id": 6,
      "first_name": 'shubham',
      "last_name": 'kondewar',
      "email": 'shubham@toplist.cz',
      "gender": 'Male',
      "ip_address": '192.168.1.1',
    },
    {
      "id": 7,
      "first_name": 'Ganesh',
      "last_name": 'Landge',
      "email": 'ganesh@google.ca',
      "gender": 'male',
      "ip_address": '192.168.1.57',
    }
  ]

    this.products.forEach(function (resp, index) {
      resp.dataKeyEdit = index + 1;
    });

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'first_name', header: 'First Name' },
      { field: 'last_name', header: 'Last Name' },
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
