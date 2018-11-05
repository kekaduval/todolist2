import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// If I want to lazy load a page, I need to use the loadChildren property 
// and give it a string with a path to the module for that page 
// { path: 'myLazyPage', loadChildren: './my-lazy-page/my-lazy-page.module/MyLazyPageModule' }

// If I want to eagerly load the page, I would use the component property and
// give it a string with a path to the component for the page
// { path: 'myEagerPage', component: './my-eager-page/my-eager-page.component' }
// I would also need to import the module for that page in app.module.ts or, 
// if the page doesn't have a module, declare it in app.module.ts
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'taskDetail', loadChildren: './task-detail/task-detail.module#TaskDetailPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
