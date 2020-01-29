import { SnotifyPosition } from 'ng-snotify';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl : `${window.location.protocol}//${window.location.hostname}/portfolio/`,
  // baseUrl : `http://localhost:4200/`,

  snotifyConfig : {
    showProgressBar: true,
    position: SnotifyPosition.rightTop,
  },

  firebaseConfig: {
    apiKey: 'AIzaSyDDRdte0BwxK7YSzBEGK0OSbYKWbI3nfsQ',
    authDomain: 'my-resume-portfolio-6d557.firebaseapp.com',
    databaseURL: 'https://my-resume-portfolio-6d557.firebaseio.com',
    projectId: 'my-resume-portfolio-6d557',
    storageBucket: 'my-resume-portfolio-6d557.appspot.com',
    messagingSenderId: '902019528866',
    appId: '1:902019528866:web:ccee369850afce73bf7ffb',
    measurementId: 'G-01Q9JE172J'
}


};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
