import { NgModule} from '@angular/core';
import { NzTreeModule } from 'ng-tree-antd';
import { SharedModule } from '@shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';
// import { AuthorUserService } from './user/authorUser.service';
// import {AuthorUserComponent} from './user/userList.component';
import {AuthorRoleComponent} from './role/role.component';
import {AuthorRoleService} from './role/authorRole.service';
import {AuthorOrganizationService} from './organization/authorOrganization.service';
import {AuthorOrganizationComponent} from './organization/organization.component';
// import {AuthorPermissionComponent} from './permission/permission.component';
// import {AuthorPermissionService} from './permission/authorPermission.service';



@NgModule({
    imports: [ SharedModule, SystemRoutingModule, NzTreeModule ],
    providers: [
        // AuthorUserService,
            AuthorRoleService,
            // AuthorPermissionService,
            AuthorOrganizationService],
    declarations: [
        // AuthorUserComponent,
        AuthorRoleComponent,
        // AuthorPermissionComponent,
        AuthorOrganizationComponent
    ]
})
export class SystemModule { }
