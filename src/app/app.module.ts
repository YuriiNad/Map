import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarkerService } from './providers/marker';
import { ScreenService } from './providers/screen';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCawDz-TKGdLqMk-N7zZKrZRJxpfZKU32k',
      language: 'EN'
    }),
    
  ],
  providers: [
    MarkerService,
    ScreenService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
