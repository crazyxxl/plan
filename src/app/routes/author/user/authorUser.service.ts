// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { catchError } from 'rxjs/operators';
// import {BaseService} from '@core/net/BaseRequest';
// import {NHttpClient} from '@core/net/http.client';
//
// @Injectable()
// export class AuthorUserService extends BaseService {
//     randomUserUrl = '/api/authorUser';
//
//
//     handleError(error: any) {
//         const errMsg = (error.message) ? error.message :
//             error.status ? `${error.status} - ${error.statusText}` : 'Server error';
//         return Observable.throw(errMsg);
//     }
//
//     constructor(http: NHttpClient) {
//         super('/api/authorUser', http);
//     }
//
//
// }
