import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {TwitterCallbackComponent}  from './twitter-callback/twitter-callback.component'
const routes: Routes = [

  {

    path: 'auth/twitter',
    component: TwitterCallbackComponent
  },
  {
    path:'home',
    component:AppComponent
  },
  {
    path:'**',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
