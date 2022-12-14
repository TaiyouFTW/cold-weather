// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: 'https://api.open-meteo.com/v1/forecast'
};

// https://api.open-meteo.com/v1/forecast?latitude=-23.69&longitude=-46.56&current_weather=true&timezone=America%2FSao_Paulo
/*
https://api.open-meteo.com/v1/forecast?
timezone=America%2FSao_Paulo
&latitude=41.15
&longitude=-8.61
&hourly=temperature_2m
&current_weather=true
&start_date=2022-11-28
&end_date=2022-11-28
*/
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
