import {Injectable} from '@angular/core';
import {BaseService} from "@core/net/BaseRequest";
import {catchError} from "rxjs/operators";
import {_HttpClient} from "@delon/theme";

@Injectable()
export class RegisterService extends BaseService{
    constructor( private http: _HttpClient) {
        super();
    }

    register(account: string, password: string , type: string) {
        return this.http.post("/register",{account: account, password: password, email: type})
            .pipe(catchError(this.handleError));
    }
}
