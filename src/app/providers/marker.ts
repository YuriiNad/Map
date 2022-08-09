import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Marker {
  id: number,
  latitude: number,
  longitude: number,
  name: string,
}

interface InitCoordinates {
  lat: number,
  lon: number,
}

@Injectable()
export class MarkerService {
  selectedMarker = new BehaviorSubject<string>('');
  private readonly currentMarkers: Marker[] = [
    {
      id: 1,
      latitude: 50.760918,
      longitude: 4.110170,
      name: "VAZ"
    },
    {
      id: 2,
      latitude: 47.492647,
      longitude: 19.051399,
      name: "GAZel"
    },
    {
      id: 3,
      latitude: 41.902689,
      longitude: 12.496176,
      name: "Lexus"
    },
    {
      id: 4,
      latitude: 43.779787,
      longitude: 11.265817,
      name: "Volkswagen"
    },
    {
      id: 5,
      latitude: 52.373057,
      longitude: 4.892557,
      name: "Lada"
    },
    {
      id: 6,
      latitude: -22.903150,
      longitude: -43.189903,
      name: "Kia"
    },
    {
      id: 7,
      latitude: 38.716174,
      longitude: -9.141589,
      name: "Bentley"
    },
    {
      id: 8,
      latitude: 50.080293,
      longitude: 14.428983,
      name: "Porsche"
    },
    {
      id: 9,
      latitude: 48.856663,
      longitude: 2.351556,
      name: "BMW"
    },
    {
      id: 10,
      latitude: 45.438095,
      longitude: 12.319029,
      name: "Honda"
    }
  ];
  private _initCoordinates: InitCoordinates = {
    lat: 49.842957,
    lon: 24.031111,
  };
  readonly SELECTED_MARKER_ICON = './assets/icons/selected-marker.png';
  readonly MARKER_ICON = './assets/icons/marker.png';
  filteredMarkers: Marker[] = this.currentMarkers;

  get markers(): Marker[] {
    return this.filteredMarkers;
  }

  get initCoordinates(): InitCoordinates {
    return this._initCoordinates;
  }
  
  filterMarkers(value: string): void {
    this.filteredMarkers = this.currentMarkers.filter((el: Marker) => el.name?.toLowerCase().includes(value?.toLowerCase()));
  }

}
