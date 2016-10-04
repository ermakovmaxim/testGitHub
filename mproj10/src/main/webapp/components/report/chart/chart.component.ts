import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ReportChartService} from "./chart.service";
import {HTTP_PROVIDERS} from "@angular/http";
import {ReportIndividualChartComponent} from "./individualchart.component";

@Component({
    selector: 'report-chart-component',
    template : `  
    
 <div class="modal fade" id="chartFullScreenModalWindow" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <!--Content-->
        <div class="modal-content" >
            <!--Header-->
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div  class="card" style="height: auto;width: auto;" id="chartFullScreenContainer" class="wow"></div>
        </div>
    </div>
    </div>
    
<div *ngFor="let ch of chartData" >
      
        <div [ngSwitch]="ch.group">
         <div *ngSwitchCase="true">
         <b>{{ch.chartTitle}}</b>
         <div *ngFor="let grpCh of ch.groupCharts;let idx=index;" >
         
                   <report-individual-chart-component  [chartJson]="grpCh" (fullScreenEmitter)="openChartInFullscreen($event)"></report-individual-chart-component>
         </div>
         </div>
        <div *ngSwitchDefault>
          <report-individual-chart-component  [chartJson]="ch" (fullScreenEmitter)="openChartInFullscreen($event)"></report-individual-chart-component>
        </div>
        </div>
       
    </div>
    
    
    `,
    directives:[ReportIndividualChartComponent],
    providers:[HTTP_PROVIDERS,ReportChartService]
})
export class ReportChartComponent implements OnInit {

    @Input() reportId : string;
    chartData : any[];
    chartId: any;
  //  @Input() reportComponent:Object;
    constructor(private reportChartService:ReportChartService) {
    }

    ngOnInit() {

    }
    ngAfterViewInit(){
        this.chartId = Math.random();
        new WOW().init();
    }
    loadcomponent(){
        this.reportChartService.getCharts(this,this.reportId);
    }

    openChartInFullscreen(chartJson:any){


        chartJson["renderAt"] = "chartFullScreenContainer";

        chartJson.width = "1000";
        chartJson.height = "800";

        let reportChart = new FusionCharts( chartJson);
        reportChart.render();
        $(chartFullScreenModalWindow).modal('show');
    }

}