import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-twitter-callback',
  templateUrl: './twitter-callback.component.html',
  styles: [
  ]
})
export class TwitterCallbackComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      let oauth_token = params['oauth_token'];
      let oauth_verifier = params['oauth_verifier'];
      console.log(oauth_token); // Print the parameter to the console.
      console.log(oauth_verifier); // Print the parameter to the console.
      this.http.get("http://127.0.0.1:5000/project/api/v1/users/callback/twitter",{params:{
        oauth_token,
        oauth_verifier
      }}).subscribe(res=>{
        console.log(res)
      })
  });
  }

}
