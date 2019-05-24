import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {
  result = {
    "accessToken": "QIqpPCNwQaqUI9dSyd7Vefa4zHI6ddzv",
    "idToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlFUVTJSa1ZCT0RsR00wWTJRMEk1TnpJNE9UTTFOa1E0TlRjeU4wTkNSRFkwTWpSQ1EwWkZRUSJ9.eyJuaWNrbmFtZSI6Im1pa2VldXMiLCJuYW1lIjoiTWlraWFzIEFiZXJhIiwicGljdHVyZSI6Imh0dHBzOi8vYXZhdGFyczEuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMTY5NTQ0MTI_dj00IiwidXBkYXRlZF9hdCI6IjIwMTktMDUtMjRUMDI6NTE6MzQuODc0WiIsImVtYWlsIjoiaXRzbWlraWFzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL21pa2VldXMuYXV0aDAuY29tLyIsInN1YiI6ImdpdGh1YnwxNjk1NDQxMiIsImF1ZCI6IjhvVkdPV0VaWnN0OHNPekhBeUJLY0F1MnBQMU1GN2EwIiwiaWF0IjoxNTU4NjY2Mjk0LCJleHAiOjE1NTg3MDIyOTQsImF0X2hhc2giOiJJWlN2TEJxVkJYX0gtTnE5R1d3X3ZnIiwibm9uY2UiOiJoYzg2Q1VvMjR3QjN1RENEblhuZlBsQ3NSMzZEWFJ1aiJ9.h5y4Wb5hNfaDkjasCWYDHlIk-0UtpDW_Mn3Gu7rLtuuhGfDTM1kYIQReXCmrq51Npklw2uDTMVHsMvTlRQW4642P81kZHuP0ynwP0WzF5-Vj6_AMpfVDuckCcC4ppbXooRbpiz8lgabV7EArd6d-RWmcdsH8_Wht01Oo5ZWbZkDcWpugBnaR6ejOfuMj-JVI3C8wdY2vus-33NZTLnJqHgXBGLMV7oRTI4oalEsvHpZcw82KtVeu-kCQ7_wW0pwpG90jUsLLPzbB5TBsGNXAt-qsVau4233LNLuv5DbqAuESqmVimcR-sU_fhLDKTcEj1UqcPA5jrVx4Okb_Xic-hQ",
    "idTokenPayload": {
      "nickname": "mikeeus",
      "name": "Mikias Abera",
      "picture": "https://avatars1.githubusercontent.com/u/16954412?v=4",
      "updated_at": "2019-05-24T02:51:34.874Z",
      "email": "itsmikias@gmail.com",
      "email_verified": true,
      "iss": "https://mikeeus.auth0.com/",
      "sub": "github|16954412",
      "aud": "8oVGOWEZZst8sOzHAyBKcAu2pP1MF7a0",
      "iat": 1558666294,
      "exp": 1558702294,
      "at_hash": "IZSvLBqVBX_H-Nq9GWw_vg",
      "nonce": "hc86CUo24wB3uDCDnXnfPlCsR36DXRuj"
    },
    "appState": null,
    "refreshToken": null,
    "state": "djRc8ZENdcnSx-rdRefMr4bO_Y2bMzGz",
    "expiresIn": 7200,
    "tokenType": "Bearer",
    "scope": null
  }

  constructor(public auth: AuthService) {
    // auth.handleAuthentication();
  }

  ngOnInit() {
    // if (this.auth.isAuthenticated()) {
    //   this.auth.renewTokens();
    // }
  }

}
