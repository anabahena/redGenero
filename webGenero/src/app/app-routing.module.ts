import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConocenosComponent } from './conocenos/conocenos.component';
import {AppComponent} from './app.component';
import { HeaderComponent} from './header/header.component';
import { SliderComponent } from './slider/slider.component'



const routes: Routes = [
  { path:'inicio', component:HeaderComponent},
  { path: '' , component: HeaderComponent },
  { path:'conocenos', component:ConocenosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
