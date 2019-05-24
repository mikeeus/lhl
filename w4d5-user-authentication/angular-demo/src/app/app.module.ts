import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { components } from './components';
import { containers } from './containers';
import { services } from './services';

@NgModule({
  declarations: [
    AppComponent,
    ...components,
    ...containers,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  providers: [
    ...services,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
