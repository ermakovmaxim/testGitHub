/**
 * Created by viral on 7/9/16.
 */
import { NgModule }       from '@angular/core';
import {RouterModule} from "@angular/router";
import {SearchResult} from "./searchresult";
import {AppChart} from "./appchart";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {SearchEngineService} from "./searchengine.service";
import {CommonModule} from "@angular/common";
import {DoYouMeanText} from "./do-you-mean-text";

@NgModule({
    imports: [CommonModule,BrowserModule,RouterModule, FormsModule,HttpModule,
        RouterModule.forChild([
            { path: '', redirectTo: 'searchengine', pathMatch: 'full'},
            { path: '', component: SearchResult }
        ])
    ],
    providers: [SearchEngineService],
    declarations: [SearchResult,AppChart,DoYouMeanText]
})

export class SearchEngieModule{

}