import { Component, OnInit } from '@angular/core';
import { ScreenService } from 'src/app/providers/screen';

@Component({
  selector: 'm4p-map',
  templateUrl: './map.component.html',
})
export class MapComponent {
  constructor(
    public screen: ScreenService
  ){}
}
