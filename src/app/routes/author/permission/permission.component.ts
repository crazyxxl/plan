// import {Component, OnInit, ViewChild} from '@angular/core';
// import { NzMessageService } from 'ng-zorro-antd';
// import { _HttpClient } from '@delon/theme';
// import {isNullOrUndefined} from 'util';
// import {AuthorPermissionService} from './authorPermission.service';
// import {map} from 'rxjs/operators';
// import {NzTreeComponent} from 'ng-tree-antd';
// import {PageModel} from '@core/model/pageModel';
// import {AuthorPermissionModel} from './model/authorPermission.model';
//
// @Component({
//     selector: 'app-system-permission-list',
//     templateUrl: './permission.component.html'
// })
// export class AuthorPermissionComponent implements OnInit {
//     q = '';
//     pi = 1;
//     ps = 10;
//     total = 10;
//     list = [];
//     nodes = [];
//     loading = false;
//     showTree = false;
//     args: any = {};
//     _indeterminate = false;
//     _allChecked = false;
//
//     events: any[] = [];
//
//     load(pi?: number) {
//         if (typeof pi !== 'undefined') {
//             this.pi = pi || 1;
//         }
//         this.loading = true;
//         this._allChecked = false;
//         this._indeterminate = false;
//         this._authorPermission.queryList(this.pi, this.ps, this.args)
//             .then((data: PageModel<AuthorPermissionModel>) => {
//                 console.log(data);
//                 data.list.forEach(item => {
//                     item.typeName = item.type === 1 ? '目录' : item.type === 2 ? '菜单' : '按钮';
//                 });
//             this.loading = false;
//             this.list = data.list;
//             this.total = data.total;
//         });
//     }
//
//     clear() {
//         this.args = {};
//         this.load(1);
//     }
//
//     _checkAll() {
//         this.list.forEach(item => item.checked = this._allChecked);
//         this.refChecked();
//     }
//     refChecked() {
//         const checkedCount = this.list.filter(w => w.checked).length;
//         this._allChecked = checkedCount === this.list.length;
//         this._indeterminate = this._allChecked ? false : checkedCount > 0;
//     }
//
//     constructor(private _authorPermission: AuthorPermissionService, private http: _HttpClient, private message: NzMessageService) {
//     }
//
//     ngOnInit() {
//         this.load();
//         this._authorPermission.getPermissionTree().subscribe(result => {
//             this.nodes = result.data;
//         });
//         this.http.get('/chart/visit').subscribe((res: any) => this.events = res);
//     }
//
//     showMsg(msg: string) {
//         this.message.info(msg);
//     }
//
//     @ViewChild(NzTreeComponent) tree: NzTreeComponent;
//     filterNodes() {
//         this.tree.treeModel.filterNodes(this.q);
//         if (!this.q) {
//             this.tree.treeModel.collapseAll();
//         }
//     }
//
//     onEvent(ev: any) {
//         console.log('basic', 'onEvent', ev);
//     }
// }
