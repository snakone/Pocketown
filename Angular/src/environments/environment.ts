// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {  // Firebase Config
    apiKey: "AIzaSyBfpq9lK_d7RdJ2c5P_aUNsxDm0EA7BACc",
    authDomain: "pocketown-e4a9d.firebaseapp.com",
    databaseURL: "https://pocketown-e4a9d.firebaseio.com",
    projectId: "pocketown-e4a9d",
    storageBucket: "pocketown-e4a9d.appspot.com",
    messagingSenderId: "545941504070"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
