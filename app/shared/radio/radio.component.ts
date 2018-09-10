import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { RadioOptions } from './radio-option.model';
import { NG_VALUE_ACCESSOR ,ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=> RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {
@Input() opcao: RadioOptions[]
valor: any;
mudar: any;
  constructor() { }

  ngOnInit() {
  }
setarValor(value: any){
  this.valor = value;
  this.mudar(this.valor)
}
writeValue(obj: any): void{
 this.valor = obj;
}
registerOnChange(fn: any): void {
      this.mudar = fn;
    }
    registerOnTouched(fn: any): void{
      this.valor = fn;
    }
}
