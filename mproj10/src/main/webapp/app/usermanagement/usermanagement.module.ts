
import { NgModule }       from '@angular/core';
import {RouterModule} from "@angular/router";

import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import {HttpModule} from "@angular/http";
import {UserManagementComponent} from "./usermanagement.component";
import {AddUserModule} from "./adduser/adduser.module";



@NgModule({
    imports: [BrowserModule,RouterModule, FormsModule,HttpModule,AddUserModule,
        RouterModule.forChild([
            { path: '', component: UserManagementComponent }
        ])
    ],
    providers: [],
    declarations: [UserManagementComponent]
})

export class UserManagementModule{


}