///<reference path="../../../node_modules/@angular/core/src/metadata.d.ts"/>
/**
 * Created by viral on 7/9/16.
 */
import {Component, ElementRef, Input, Output, EventEmitter, OnInit, ViewChild}      from    '@angular/core';
import {Component, Provider, forwardRef, Provider, forwardRef, Input} from "@angular/core";
import {INPUT_MD_FORM} from "../style.constants";
import {Router, ActivatedRoute} from "@angular/router";
import {SearchEngineService} from "./searchengine.service";

@Component({
    selector : 'do-you-mean-text',
    template : `   
          
    <div class="col-lg-12">
            <div >
                <p><a (click)="callHrefService()" style="color: #0000AA" ><u> {{doyouMeanText}} </u></a>
                </p>
            </div>
   </div>

`,
})

export class DoYouMeanText implements OnInit{
    @Input() doyouMeanText: string;
    constructor(private searchEngineService : SearchEngineService,private router : Router,activatedRoute: ActivatedRoute){
        
    }
    public  callHrefService(){
        document.getElementById("searchBoxId").value=this.doyouMeanText;
        this.router.navigate(['/mainpage/searchengine',{searchString: this.doyouMeanText, en: 'en'}]);
    }

}

