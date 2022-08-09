import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { MapContainerComponent } from './components/map-container/map-container';
import { AsideMenuComponent } from './components/aside-menu-container/components/aside-menu/aside-menu';
import { AsideMenuContainerComponent } from './components/aside-menu-container/aside-menu-container';
import { ObjectComponent } from './components/aside-menu-container/components/item/item';
import { FieldComponent } from './components/aside-menu-container/components/field/field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { LoaderComponent } from './components/common/loader/loader';
import { NotSupportedComponent } from './components/common/not-supported/not-supported';

const components = [
  FieldComponent,
  MapComponent,
  MapContainerComponent,
  AsideMenuComponent,
  AsideMenuContainerComponent,
  ObjectComponent,
  LoaderComponent,
  NotSupportedComponent,

]

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule
  ],
  exports: [
    FieldComponent
  ]
})
export class MapModule { }
