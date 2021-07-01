import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { AdminWelcomeComponent } from './pages/admin-welcome/admin-welcome.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: AdminWelcomeComponent,
  }
];


@NgModule({
  declarations: [AdminWelcomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AdminModule { }
