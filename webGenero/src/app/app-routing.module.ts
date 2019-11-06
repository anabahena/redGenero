import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { HeaderComponent} from './header/header.component';
import { ActividadesComponent} from './actividades/actividades.component'
import { from } from 'rxjs';


const routes: Routes = [
  { path:'inicio', component:HeaderComponent},
  { path: '' , component: HeaderComponent },
  { path:'conocenos', component: ConocenosComponent },
  { path: 'actividades', component: ActividadesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
