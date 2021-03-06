import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {MainComponent} from "./main/main.component";
import {ListComponent} from "./list/list.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'list', component: ListComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
