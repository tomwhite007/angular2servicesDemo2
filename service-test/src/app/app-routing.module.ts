import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1Component } from './page1/page1.component'; // add import
import { Page2Component } from './page2/page2.component'; // add import

const routes: Routes = [  
  { path: 'page1', component: Page1Component }, // replace routes
  { path: 'page2', component: Page2Component }   // replace routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
