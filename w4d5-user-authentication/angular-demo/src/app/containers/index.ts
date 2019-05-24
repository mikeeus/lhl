import { CallbackComponent } from './callback/callback.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OauthComponent } from './oauth/oauth.component';
import { SsoComponent } from './sso/sso.component';

export const containers = [
  CallbackComponent,
  HomeComponent,
  LoginComponent,
  RegisterComponent,
  OauthComponent,
  SsoComponent,
];

export * from './callback/callback.component';
export * from './home/home.component';
export * from './login/login.component';
export * from './register/register.component';
export * from './oauth/oauth.component';
export * from './sso/sso.component';
