import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthService,
  SocialAuthServiceConfig,
  SocialLoginModule, SocialUser
} from '@abacritt/angularx-social-login';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SocialLoginModule, GoogleSigninButtonModule, NgIf],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            //provider: new GoogleLoginProvider('200563515634-gn3ii07vhf0bjud646u1gfb2llkbedrk.apps.googleusercontent.com')
            provider: new GoogleLoginProvider('419314220035-btro75dmj2anf5gfa33l6kr97palnbfm.apps.googleusercontent.com')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
    SocialAuthService
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  protected user!: SocialUser
  protected loggedIn: boolean = false
  @Output() loggedInEmitter: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(private authService: SocialAuthService) {
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      this.loggedInEmitter.emit(true);
    });
  }

}
