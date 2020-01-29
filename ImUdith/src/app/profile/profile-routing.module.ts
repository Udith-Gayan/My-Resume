import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ArticleFormComponent } from './../pages/article-form/article-form.component';


const routes: Routes = [
  {path: 'admin/admin', component: ArticleFormComponent },
  { path: '**' ,  redirectTo: '/'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]

})
export class ProfileRoutingModule { }
