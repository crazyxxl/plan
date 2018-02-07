import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {AuthorUserComponent} from './user/userList.component';
import {AuthorRoleComponent} from './role/role.component';
import {AuthorOrganizationComponent} from './organization/organization.component';
// import {AuthorPermissionComponent} from './permission/permission.component';



const routes: Routes = [
    { path: 'organization', component: AuthorOrganizationComponent },
    // { path: 'permission', component: AuthorPermissionComponent },
    // { path: 'user', component: AuthorUserComponent },
    { path: 'role', component: AuthorRoleComponent }

];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SystemRoutingModule { }
