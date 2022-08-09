import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

type HTMLInputType = 'number' | 'text';

@Component({
  selector: 'm4p-field',
  templateUrl: './field.html',
})
export class FieldComponent<T = unknown> {
  @Input() placeholder = 'Search';
  @Input() type: HTMLInputType = 'text';


  protected _control: FormControl<T> = new FormControl();

  get control(): FormControl<T> {
    return this._control;
  }

  @Input()
  set control(value: FormControl<T>) {
    if (value) {
      this._control = value;
    }
  }

  get errors(): boolean {
    return !!this.control.errors
  }
}
