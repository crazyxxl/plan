import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import {isNullOrUndefined} from 'util';
import {AuthorOrganizationService} from "./authorOrganization.service";

@Component({
    selector: 'app-system-organization-list',
    templateUrl: './organization.component.html'
})
export class AuthorOrganizationComponent implements OnInit {

    pi = 1;
    ps = 10;
    total = 10;
    list = [];
    loading = false;
    args: any = {};
    _indeterminate = false;
    _allChecked = false;

    events: any[] = [];

    load(pi?: number) {
        if (typeof pi !== 'undefined') {
            this.pi = pi || 1;
        }
        this.loading = true;
        this._allChecked = false;
        this._indeterminate = false;
        this._authorOrganization.getOrganizations(this.pi, this.ps, isNullOrUndefined(this.args.name) ? '' : this.args.name, '', '').subscribe(data => {
            this.loading = false;
            this.list = data.data.list;
            this.total = data.data.total;
        });
    }

    clear() {
        this.args = {};
        this.load(1);
    }

    _checkAll() {
        this.list.forEach(item => item.checked = this._allChecked);
        this.refChecked();
    }
    refChecked() {
        const checkedCount = this.list.filter(w => w.checked).length;
        this._allChecked = checkedCount === this.list.length;
        this._indeterminate = this._allChecked ? false : checkedCount > 0;
    }

    constructor(private _authorOrganization: AuthorOrganizationService, private http: _HttpClient, private message: NzMessageService) {
    }

    ngOnInit() {
        this.load();
        this.http.get('/chart/visit').subscribe((res: any) => this.events = res);
    }

    detail(id: number) {
        this._authorOrganization.getOrganization(id).subscribe(result => {
            this.showMsg('查看详情');
        });
    }

    delete(id: number) {
        this._authorOrganization.deleteOrganization(id).subscribe(result => {
            this.load(this.pi);
            this.showMsg('删除成功');
        });
    }

    showMsg(msg: string) {
        this.message.info(msg);
    }
}
