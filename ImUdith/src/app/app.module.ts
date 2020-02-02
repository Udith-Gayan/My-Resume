import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileModule } from './profile/profile.module';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { ArticleFormComponent } from './pages/article-form/article-form.component';
import {FormsModule} from '@angular/forms';
import { ProfileRoutingModule } from './profile/profile-routing.module';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  }
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  declarations: [
    AppComponent,
    ArticleFormComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, config),
    ProfileModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
   // AngularFireDatabaseModule,
    FormsModule,
    ProfileRoutingModule
  ],
  providers: [AngularFirestore, RouterModule, AngularFireDatabaseModule],    //providers: [AngularFirestore,  RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
