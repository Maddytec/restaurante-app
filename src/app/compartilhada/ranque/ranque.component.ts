import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-ranque',
  templateUrl: './ranque.component.html'
})
export class RanqueComponent implements OnInit {

@Output() rated = new EventEmitter<number>();

rates: number[] = [1,2,3,4,5];

rate: number = 0;

rateTemporario: number;

  constructor() { }

  ngOnInit() {
  }

  setRanque(ranque: number){
    this.rate =  ranque;
    this.rateTemporario = undefined;
    this.rated.emit(this.rate);
  }

  setRateTemporario(rate: number){
    if(this.rateTemporario === undefined ){
     this.rateTemporario = this.rate;
    }
    this.rate = rate;
  }

  limparRate(){
    if(this.rateTemporario !== undefined){
      this.rate = this.rateTemporario;
      this.rateTemporario = undefined;
    }
  }
}
