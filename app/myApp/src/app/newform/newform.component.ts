import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MainPageComponent } from '../main-page/main-page.component';

@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css']
})
export class NewformComponent implements OnInit {
  @Input('product') product : any;

  @Input('cols') cols : any;

  @Output() newItemEvent = new EventEmitter<any>();

  constructor() {}
  
  ngOnInit(): void {  
    // throw new Error('Method not implemented.');

    console.log("inside form");
  }

  onSubmit(){
    this.newItemEvent.emit(this.product);
  }

  trackByMethod(index:number, el:any): number {
    return el.field;
}

}
