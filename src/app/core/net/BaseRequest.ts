import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import {ResponseModel} from '@core/model/ResponseModel';
import {NHttpClient} from '@core/net/http.client';

/**
 * BaseService contains public crud
 */
export class BaseService {
  // module: string;
  // http: NHttpClient;

  // constructor(module: string, http: NHttpClient) {
  //   this.module = module;
  //   this.http = http;
  // }

  /**
   * get all the record
   * @returns {Promise<any>}
   */
  // queryAll() {
  //   return new Promise((resolve, reject) => {
  //     this.http.get(`${this.module}`).pipe(catchError(this.handleError)).subscribe((response: ResponseModel) => {
  //         resolve(response.data);
  //     });
  //   });
  // }
  //
  // /**
  //  * get record by id
  //  * @param {string} id
  //  * @returns {Promise<any>}
  //  */
  // queryById(id: string) {
  //   return new Promise((resolve, reject) => {
  //     this.http.get(`${this.module}/${id}`).pipe(catchError(this.handleError)).subscribe((response: ResponseModel) => {
  //         resolve(response.data);
  //     });
  //   });
  // }
  //
  // /**
  //  * create an record
  //  * @param {Object} params
  //  * @returns {Promise<any>}
  //  */
  // create(params: Object) {
  //   return new Promise((resolve, reject) => {
  //     this.http.post(`${this.module}`, params).pipe(catchError(this.handleError))
  //         .subscribe((response: ResponseModel) => {
  //         resolve(response.data);
  //     });
  //   });
  // }
  //
  // /**
  //  * update an record
  //  * @param {string} id
  //  * @param params
  //  * @returns {Promise<any>}
  //  */
  // update(id: string, params: any) {
  //   return new Promise((resolve, reject) => {
  //     this.http.put(`${this.module}/${id}`, params).pipe(catchError(this.handleError))
  //         .subscribe((response: ResponseModel) => {
  //         resolve(response.data);
  //     });
  //   });
  // }
  //
  // /**
  //  * get paging record
  //  * @param {number} pageIndex
  //  * @param {number} pageSize
  //  * @returns {Promise<any>}
  //  */
  // queryList(pageIndex: number, pageSize: number, searchParams?: {}) {
  //   return new Promise((resolve, reject) => {
  //     this.http.get(`${this.module}?pageIndex=${pageIndex}&pageSize=${pageSize}`, searchParams).pipe(catchError(this.handleError))
  //         .subscribe((response: ResponseModel) => {
  //         resolve(response.data);
  //     });
  //   });
  // }
  //
  // /**
  //  * remove an record
  //  * @param {string} id
  //  * @returns {Promise<any>}
  //  */
  // remove(id: string) {
  //   return new Promise((resolve, reject) => {
  //     this.http.delete(`${this.module}/` + id).pipe(catchError(this.handleError)).subscribe((response: ResponseModel) => {
  //         resolve(response.data);
  //     });
  //   });
  // }
  handleError(error: any) {
      debugger
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }
}
