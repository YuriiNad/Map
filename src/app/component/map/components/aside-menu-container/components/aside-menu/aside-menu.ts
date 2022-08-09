import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MarkerService } from 'src/app/providers/marker';
import { ScreenService } from 'src/app/providers/screen';

@Component({
  selector: 'm4p-aside-menu',
  templateUrl: './aside-menu.html',
})
export class AsideMenuComponent implements OnInit {
  selectedItem!: string;
  search!: FormControl<string | null>
  currentItem!: string;

  constructor(
    public marker: MarkerService,
    public screen: ScreenService,
  ) {}

  get isEmpty(): boolean {
    return !this.marker.markers.length
  }

  ngOnInit(): void {
    this.search = new FormControl<string>('', Validators.pattern('[A-Za-z0-9]+'));
  }

  select(value: string): void {
    this.selectedItem = value;    
    this.marker.selectedMarker.next(value);
  }

  searchItem(): void {  
    this.marker.filterMarkers(this.search.value as string);
  }
}
