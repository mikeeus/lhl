# User Authentication

In this lecture we covered the importance of security, using HTTPS to secure communications and looked at how OAuth works and briefly discussed SSO.

For the demo we saw how to use a service like Auth0 to abstract out the OAuth flow to another library and get the accessToken in the response.

You can see OAuth implemented with passport.js from [Fabio's awesome lecture notes](https://github.com/fzero/lhl-lectures/tree/master/w4d5-user-auth);

For a more detailed discussion on encoding, encryption you can reference [Juan's lecture notes here](https://web.compass.lighthouselabs.ca/activities/358/lectures/2029).

## Links

Security
- Hacker job opportunities: https://thehustle.co/dark-overlord-hacker-cybercrime-software-engineer-hiring/
- List of data breaches: https://en.wikipedia.org/wiki/List_of_data_breaches
- Have you been pwned?: https://haveibeenpwned.com/

Public Key Cryptography
- https://en.wikipedia.org/wiki/Public-key_cryptography
- https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange

Certificate Authorities
- https://letsencrypt.org/how-it-works/

OAuth
- https://oauth.net/2/

SSO
- https://auth0.com/blog/what-is-and-how-does-single-sign-on-work/

## Demo

The demo application is built with Angular and uses Auth0 for OAuth authentication.

You can run the email/password registration page without configuration.

To use the OAuth route first sign up on [Auth0](https://auth0.com/) and create an Auth0 application and a [Github Oauth application](https://auth0.com/docs/connections/social/github).

Once you're setup replace AUTH0_CLIENT_ID and AUTH0_DOMAIN in [auth.service.ts](./src/app/services/auth.service.ts);

Then run

```
yarn install
yarn run start
```