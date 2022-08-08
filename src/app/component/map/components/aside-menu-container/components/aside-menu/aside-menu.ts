import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MarkerService } from 'src/app/providers/marker';

@Component({
  selector: 'm4p-aside-menu',
  templateUrl: './aside-menu.html',
})
export class AsideMenuComponent implements OnInit {
  selectedObject!: string;
  search!: FormControl<string>
  currentItem!: string;

  constructor(
    public marker: MarkerService,
  ) {}

  ngOnInit(): void {
    this.search = new FormControl<string>('', { nonNullable: true });
  }

  select(value: string): void {
    this.selectedObject = value;
  }

  searchItem(): void {    
    this.currentItem = this.search.value;
  }
}
