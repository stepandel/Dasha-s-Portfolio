import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { GalaryComponent } from './components/galary/galary.component';

const routes: Routes = [
  {path:'contact', component: ContactComponent},
  {path:'about', component: AboutComponent},
  {path:'landscapes', component: GalaryComponent},
  {path:'sea-art', component: GalaryComponent},
  {path:'projects', component: GalaryComponent},
  {path:'photos', component: GalaryComponent}
]

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
