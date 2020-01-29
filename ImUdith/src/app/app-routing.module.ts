import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleFormComponent } from './pages/article-form/article-form.component';


const routes: Routes = [
  {path: 'admin/admin', component: ArticleFormComponent },
  { path: '**' ,  redirectTo: '/'}
];   // ArticleFormComponent

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
