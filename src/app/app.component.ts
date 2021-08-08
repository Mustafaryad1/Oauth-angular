import { Component } from '@angular/core';
import { TwittereService } from './twitterservice.service';
import { AuthService } from 'ng2-ui-auth';
import { Router } from '@angular/router';

import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  state = "ok";
  apple_redirect= "https://example-app.com/redirect";
  scope = "name email";
  client_id= "com.ryad";
  isSignedin: boolean | undefined;
  user: SocialUser | undefined;
  x:string= 'hello';
  constructor(private api: TwittereService, private socialAuthService: SocialAuthService,  private router: Router, private http:HttpClient ) { }
  title = 'app';
  ngOnInit() {
    this.api.getHomeData().subscribe(response=>{
      console.log(response)
      this.socialAuthService.authState.subscribe((user) => {
        this.user = user;
        this.isSignedin = (user != null);
        console.log(this.user);
      });
    });
  }

  googleSignin(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x=>{
      let access_token = x.response.access_token;
      console.log(access_token)
      this.http.get('http://127.0.0.1:5000/project/api/v1/users/google-login',{
        params: {access_token},
      }).subscribe(res=>{
        console.log(res)
      })
    })
  }
  twitterSignin(){
    this.http.get<any>('http://127.0.0.1:5000/project/api/v1/users/twitter').subscribe(
      res=>{
        window.location.href = res.url;
      }
    )
  }




}

