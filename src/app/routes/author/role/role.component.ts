import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import {AuthorRoleService} from './authorRole.service';
import {isNullOrUndefined} from "util";

@Component({
    selector: 'app-system-role-list',
    templateUrl: './role.component.html'
})
export class AuthorRoleComponent implements OnInit {

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
        this._authorRole.getRoles(this.pi, this.ps, isNullOrUndefined(this.args.name) ? '' : this.args.name, '', '').subscribe(data => {
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

    constructor(private _authorRole: AuthorRoleService, private http: _HttpClient, private message: NzMessageService) {
    }

    ngOnInit() {
        this.load();
        this.http.get('/chart/visit').subscribe((res: any) => this.events = res);
    }

    detailUser(id: number) {
        this._authorRole.getRole(id).subscribe(result => {
            this.showMsg('查看详情');
        });
    }

    deleteUser(id: number) {
        this._authorRole.deleteRole(id).subscribe(result => {
            this.load(this.pi);
            this.showMsg('删除成功');
        });
    }

    showMsg(msg: string) {
        this.message.info(msg);
    }
}
