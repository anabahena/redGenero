import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ConocenosComponent} from './conocenos/conocenos.component'
  import { from } from 'rxjs';
import { ContainerComponentsComponent } from './container-components/container-components.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { VideosComponent } from './videos/videos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    ConocenosComponent,
    ContainerComponentsComponent,
    ActividadesComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
