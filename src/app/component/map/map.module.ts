import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { MapContainerComponent } from './components/map-container/map-container';
import { AsideMenuComponent } from './components/aside-menu-container/components/aside-menu/aside-menu';
import { AsideMenuContainerComponent } from './components/aside-menu-container/aside-menu-container';
import { ObjectComponent } from './components/aside-menu-container/components/object/object';
import { FieldComponent } from './components/aside-menu-container/components/field/field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/pipes/filter.pipe';

@NgModule({
  declarations: [
    FieldComponent,
    MapComponent,
    MapContainerComponent,
    AsideMenuComponent,
    AsideMenuContainerComponent,
    ObjectComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    FieldComponent
  ]
})
export class MapModule { }
