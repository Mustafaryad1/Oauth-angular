import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TwitterCallbackComponent } from './twitter-callback/twitter-callback.component';


import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {GoogleLoginProvider} from 'angularx-social-login'
import { AppleSigninModule } from 'ngx-apple-signin'

@NgModule({
  declarations: [
    AppComponent,
    TwitterCallbackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SocialLoginModule,
    AppleSigninModule

  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '1038829803982-ppafcb658l4h786fgb29e57sf0960u70.apps.googleusercontent.com'
          )
        }
      ]
    } as SocialAuthServiceConfig,
  }    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
