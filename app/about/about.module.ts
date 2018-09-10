import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';



export const Rotas: Routes = [
  {path: '', component: AboutComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(Rotas)
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
