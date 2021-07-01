import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleFormComponent } from './pages/article-form/article-form.component';


const routes: Routes = [
  {path: 'admin/admin', component: ArticleFormComponent },  // ArticleFormComponent
  {path: '/adminpage',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: '**' ,  redirectTo: '/'}   // Wildcard route to same page
];   

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
