import {Component, OnInit, Input} from '@angular/core';
import {HTTP_PROVIDERS} from "@angular/http";
import {ReportDataPointService} from "./datapoint.service";

@Component({
    selector: 'report-datapoint-component',
    template:
      `  <div class="col-lg-12">
           
<span  *ngFor="let dp of dataPointData; let j = index;">
         <div><b>{{dp.label}}</b></div>
        <span class="datapoint-panel" *ngFor="let val of dp.value;let i = index">
            <span>
            <button type="button" class="btn {{dataPointStyle[i]}}"> <b>{{val.statistic}}</b><br>{{val.description}} </button>
            </span>
        </span>
    </span>
    </div>
    `,
    providers:[HTTP_PROVIDERS,ReportDataPointService]
})
export class ReportDataPointComponent implements OnInit {
   // @Input() reportComponent:Object;
    @Input() dataPointData : any[];
    @Input() reportId : string;

    dataPointStyle :any = ["btn-success","btn-orange","btn-deep-purple","btn-yellow","btn-amber","btn-orange","btn-danger"];

    constructor(private reportDataPointService:ReportDataPointService) {
    }

    ngOnInit() {

    }
    ngAfterViewInit(){

    }
    loadcomponent(){
        this.reportDataPointService.getDataPoints(this,this.reportId);
    }

}