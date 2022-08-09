import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'm4p-item',
  templateUrl: './item.html',
})
export class ObjectComponent {
  @Output() onSelect = new EventEmitter();
  @Input() name!: string;
  @Input() isSelected!: boolean;

  select(): void {
    this.onSelect.emit(this.name);
  }
}
