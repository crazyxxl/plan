// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { catchError } from 'rxjs/operators';
// import {AuthorPermissionModel} from './model/authorPermission.model';
// import {NHttpClient} from '@core/net/http.client';
// import {BaseService} from '@core/net/BaseRequest';
//
// @Injectable()
// export class AuthorPermissionService extends BaseService {
//
//     constructor(http: NHttpClient) {
//         super('/api/authorPermission', http);
//     }
//
//     randomUserUrl = '/api/authorPermission';
//
//     getPermissions(pageIndex = 1, pageSize = 10, search: string, sort: string, order: string) {
//         return this.http
//             .get(this.randomUserUrl, { pageSize: pageSize, pageIndex: pageIndex, search: search, sort: sort, order: order})
//             .pipe(catchError(this.handleError));
//     }
//
//     getPermissionTree() {
//         return this.http
//             .get(this.randomUserUrl + '/tree')
//             .pipe(catchError(this.handleError));
//     }
//
//     getPermission(id: number) {
//         return this.http
//             .get(this.randomUserUrl + '/' + id)
//             .pipe(catchError(this.handleError));
//     }
//
//     deletePermission(id: number) {
//         return this.http.delete(this.randomUserUrl + '/' + id)
//             .pipe(catchError(this.handleError));
//     }
//
//     savePermission(authorPermissionModel: AuthorPermissionModel) {
//         return this.http.post(this.randomUserUrl + '/' + JSON.stringify(authorPermissionModel))
//             .pipe(catchError(this.handleError));
//     }
//
//     handleError(error: any) {
//         const errMsg = (error.message) ? error.message :
//             error.status ? `${error.status} - ${error.statusText}` : 'Server error';
//         return Observable.throw(errMsg);
//     }
//
//
//
// }
