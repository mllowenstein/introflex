// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// `.env.ts` is generated by the `npm run env` command
// `npm run env` exposes environment variables as JSON for any usage you might
// want, like displaying the version or getting extra config from your CI bot, etc.
// This is useful for granularity you might need beyond just the environment.
// Note that as usual, any environment variables you expose through it will end up in your
// bundle, and you should not use it for any sensitive information like passwords or keys.

import { env } from './.env';

const firebase: any = {
  apiKey: "AIzaSyCJ3vJT4y84temJ9ol3N_1HnBUP8-87eA",
  authDomain: "remotefolio.firebaseapp.com",
  databaseURL: "https://remotefolio-default-rtdb.firebaseio.com",
  projectId: "remotefolio",
  storageBucket: "remotefolio.appspot.com",
  messagingSenderId: "557212993715",
  appId: "1:557212993715:web:be99fcfe920d63572b88c6",
  measurementId: "G-14NYDKQTHY",
};

export const environment = {
  apiUrl: 'https://localhost:5000',
  firebase,
  production: true,
  class: 'prod',
  version: env['npm_package_version'] + '-live',
  serverUrl: '/api',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US', 'en-CA'],
  cmcApiKey: 'e0af3155-335f-4d9e-b9f8-aabcfee4be48',
  rapidApiKey: '8b5d27b84bmshb42f0711727251fp15e988jsn5dbc073eac96',
};
