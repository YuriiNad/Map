import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MarkerService } from 'src/app/providers/marker';

@Component({
  selector: 'm4p-map-container',
  templateUrl: './map-container.html',
  styleUrls: ['./map-container.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapContainerComponent implements OnInit {
  readonly zoom: number = 4;
  selectedMarker!: string;
  isLoading: boolean = true;

  constructor(
    public marker: MarkerService
  ) {}

  ngOnInit(): void {
    this.listenSelectedMarker();
  }

  private listenSelectedMarker(): void {
    this.marker.selectedMarker.subscribe((name: string) => {
      this.selectedMarker = name;
    })
  }
}
