import { KomentarzeComponent } from './komentarze/komentarze.component';

import { Kluby } from './kluby';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ZagraniczneComponent } from './zagraniczne/zagraniczne.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'kluby', component: ZagraniczneComponent },
  { path:'komentarze',component: KomentarzeComponent},

];
@NgModule ({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
