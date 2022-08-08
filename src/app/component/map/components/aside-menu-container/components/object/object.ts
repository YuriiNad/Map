import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'm4p-object',
  templateUrl: './object.html',
})
export class ObjectComponent {
  @Output() onSelect = new EventEmitter();
  @Input() title!: string;
  @Input() isSelected!: boolean;

  select(): void {
    this.onSelect.emit(this.title);
  }
}
