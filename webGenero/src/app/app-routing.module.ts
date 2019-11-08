import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { HeaderComponent} from './header/header.component';
import { ActividadesComponent} from './actividades/actividades.component'
import { from } from 'rxjs';
import { SliderComponent } from './slider/slider.component';


const routes: Routes = [
  { path:'inicio', component:SliderComponent},
  { path: '' , component: SliderComponent },
  { path:'conocenos', component: ConocenosComponent },
  { path: 'actividades', component: ActividadesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
