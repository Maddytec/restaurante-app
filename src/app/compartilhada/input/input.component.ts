import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {
  
  @Input() errorMessage: string;
  @Input() label: string;
  input: any;
  @ContentChild(NgModel) model: NgModel;


  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.input = this.model;
    if(this.input === undefined){
      throw new Error('Diretiva ngModel obrigatória!');
    }
  }

  hasSuccess():boolean{
    return this.input.valid && this.input.dirty;
  }

  hasError():boolean{
    return this.input.invalid && this.input.dirty;
  }
}
