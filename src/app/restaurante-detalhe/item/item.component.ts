import { Item } from './item-model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {

@Input() item: Item;
@Output() add = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent(){
    this.add.emit(this.item);
  }

}
