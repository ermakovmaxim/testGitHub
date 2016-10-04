/**
 * Created by viral on 7/9/16.
 */
import {Component, ElementRef, Input, Output, EventEmitter, OnInit, ViewChild}      from    '@angular/core';
import {Component,Provider, Input} from "@angular/core";
import {INPUT_MD_FORM} from "../style.constants";
import {SearchEngineService} from "./searchengine.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector : 'search-result',
    template : `   
              <div class="row">
               <div>
                   <a class="btn btn-primary" hidden ="true" data-toggle="collapse" id="doyoumeanButton" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                 Did you mean
                    </a> 
                         <div class="collapse" id="collapseExample" *ngFor="let doyouMeanText of doyouMeanTextArray">
                                  <div class="card card-block">
                                    <do-you-mean-text [doyouMeanText]="doyouMeanText.newSearchString"></do-you-mean-text>
                                  </div>
                         </div>
                    </div>
                </div>
          <div class="text-md-left"><h6 class="text-muted">{{statusMsg}}</h6></div>
               
  <div class="row">
  
     <div *ngFor="let chartdata of responseResult" >
        <app-chart [chartData]="chartdata" ></app-chart>

</div>
</div>
         
`,
})

export class SearchResult implements OnInit{
    responseResult : any[];
    searchString:string;
    languageValue:string;
    statusMsg:string;
    doyouMeanTextArray:any[];
    constructor(private searchEngineService : SearchEngineService,private router : Router,activatedRoute: ActivatedRoute) {
        //This service call used for taking data search data and send to UI
        this.responseResult=[];
        this.doyouMeanTextArray=[];
        this.searchEngineService.sendSearchData(activatedRoute.snapshot.params['searchString'],activatedRoute.snapshot.params['en']).subscribe(
            response=>{
                let repsonseData=JSON.parse(response.json().response.data.message);
                this.statusMsg=repsonseData.status;
                if(repsonseData.graphData.length==0){
                    toastr.error("Your search -"+activatedRoute.snapshot.params['searchString']+"- did not match any documents.");
                }else {
                    this.responseResult = repsonseData.graphData;
                    //  document.getElementById("progressBar").style.display = "none";
                }
                if(repsonseData.doUMean.length>=1){
                    document.getElementById("doyoumeanButton").hidden=false;
                    this.doyouMeanTextArray=repsonseData.doUMean;
                }else{
                    this.doyouMeanTextArray=[];
                }
                //set search text
                document.getElementById("searchBoxId").value=activatedRoute.params.value.searchString;
            },
            error=>{
                console.log('error');
            },
            ()=>{
                console.log("completd");
            });
    }

}

