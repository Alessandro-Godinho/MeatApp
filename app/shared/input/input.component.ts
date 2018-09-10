import { Component, OnInit,  ContentChild,  AfterContentInit, Input } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

@Input() label: string;
@Input() mensagemErro: string;

input: any;

@ContentChild(NgModel) model: NgModel;
@ContentChild(FormControlName) control: FormControlName;

  constructor() { }

  ngOnInit() {

  }
  ngAfterContentInit() {
    this.input = this.model || this.control;
    if(this.input === undefined){
      throw new Error('Esse componente precisa ser usado com a diretiva ngModel ou FormControlName');
    }
  }
 Sucesso(): boolean{
   return !this.input.invalid && (this.input.touched || this.input.dirty);
 }
 Erro(): boolean{
  return this.input.invalid && (this.input.touched || this.input.dirty);
}
}
