/**
 * Created by prasad on 26/8/16.
 */
/**
 * Created by prasad on 18/8/16.
 */
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {MainPageComponent} from "./mainpage.component";

import { mainPageRouting} from "./mainpage.route";
import {MenuTreeComponent} from "./sidemenu/menuTree.component";
import {MenuService} from "./sidemenu/menuTree.service";
import {SearchEngine} from "./searchengine/searchengine";
import {SearchEngineService} from "./searchengine/searchengine.service";

@NgModule({
    imports: [BrowserModule,RouterModule, FormsModule,HttpModule,mainPageRouting],
    declarations: [MainPageComponent,MenuTreeComponent,SearchEngine],
    exports : [MainPageComponent],
    providers : [MenuService,SearchEngineService]

})

export class MainPageModule{


}