import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallbackComponent, HomeComponent, LoginComponent, OauthComponent, RegisterComponent, SsoComponent } from './containers';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'oauth',
    component: OauthComponent,
  },
  {
    path: 'sso',
    component: SsoComponent,
  },
  {
    path: 'callback',
    component: CallbackComponent,
  },
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
