import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { _HttpClient } from '@delon/theme';
import {AuthorOrganizationModel} from './model/authorOrganization.model';

@Injectable()
export class AuthorOrganizationService {
    randomUserUrl = '/api/authorOrganization';

    getOrganizations(pageIndex = 1, pageSize = 10, search: string, sort: string, order: string) {
        return this.http
            .get(this.randomUserUrl, { pageSize: pageSize, pageIndex: pageIndex, search: search, sort: sort, order: order})
            .pipe(catchError(this.handleError));
    }

    getOrganization(id: number) {
        return this.http
            .get(this.randomUserUrl + '/' + id)
            .pipe(catchError(this.handleError));
    }

    deleteOrganization(id: number) {
        return this.http.delete(this.randomUserUrl + '/' + id)
            .pipe(catchError(this.handleError));
    }

    saveOrganization(authorOrganizationModel: AuthorOrganizationModel) {
        return this.http.post(this.randomUserUrl + '/' + JSON.stringify(authorOrganizationModel))
            .pipe(catchError(this.handleError));
    }

    handleError(error: any) {
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }

    constructor(private http: _HttpClient) {
    }


}
