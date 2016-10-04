
import { NgModule }       from '@angular/core';
import {RouterModule} from "@angular/router";
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import {HttpModule} from "@angular/http";
import {AddUserComponent} from "./adduser.component";
import {ViewUserComponent} from "../viewuser/viewuser.component";
import {AddUserService} from "./adduser.service";
import {WidgetModule} from "../../../components/widget.shared.module";


@NgModule({
    imports: [BrowserModule,RouterModule, FormsModule,HttpModule,WidgetModule,
        RouterModule.forChild([
            { path: '', component: AddUserComponent }
        ])
    ],
    providers: [AddUserService],
    declarations: [AddUserComponent,ViewUserComponent]
})

export class AddUserModule{


}