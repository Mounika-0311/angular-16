import { enableProdMode, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule,  } from '@angular/platform-browser';

import {bootstrapApplication,provideClientHydration} from '@angular/platform-browser';


if (environment.production) {
  enableProdMode();
}
// bootsraping application for Server-side rendering and hydration
bootstrapApplication(AppComponent, {
  providers: [provideClientHydration()]
});

bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(BrowserModule, AppRoutingModule)]
})
  .catch(err => console.error(err));
