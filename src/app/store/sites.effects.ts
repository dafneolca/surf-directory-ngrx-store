// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { Actions, ofType, Effect } from '@ngrx/effects';
// import { switchMap, catchError, map, tap } from 'rxjs/operators';
// import { of } from 'rxjs';
// import { HttpClient } from '@angular/common/http';

// import * as SitesActions from './sites.actions';

// // export interface AuthResponseData {
// //   kind: string;
// //   idToken: string;
// //   email: string;
// //   refreshToken: string;
// //   expiresIn: string;
// //   localId: string;
// //   registered?: boolean;
// // }

// @Injectable()
// export class SitesEffects {
//   @Effect()
//   authLogin = this.actions$.pipe(
//     ofType(SitesActions.ADD_SITE),
//     switchMap((siteData: SitesActions.AddSite) => {
//       return this.http.post(siteData).pipe(
//         map((resData) => {
//           return new AuthActions.Login({
//             email: resData.email,
//             userId: resData.localId,
//             token: resData.idToken,
//             expirationDate: expirationDate,
//           });
//         }),
//         catchError((errorRes) => {
//           let errorMessage = 'An unknown error occurred!';
//           if (!errorRes.error || !errorRes.error.error) {
//             return of(new AuthActions.LoginFail(errorMessage));
//           }
//           switch (errorRes.error.error.message) {
//             case 'EMAIL_EXISTS':
//               errorMessage = 'This email exists already';
//               break;
//             case 'EMAIL_NOT_FOUND':
//               errorMessage = 'This email does not exist.';
//               break;
//             case 'INVALID_PASSWORD':
//               errorMessage = 'This password is not correct.';
//               break;
//           }
//           return of(new AuthActions.LoginFail(errorMessage));
//         })
//       );
//     })
//   );

//   @Effect({ dispatch: false })
//   authSuccess = this.actions$.pipe(
//     ofType(AuthActions.LOGIN),
//     tap(() => {
//       this.router.navigate(['/']);
//     })
//   );

//   constructor(
//     private actions$: Actions,
//     private http: HttpClient,
//     private router: Router
//   ) {}
// }
