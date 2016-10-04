import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'report-chart-fullscreen-component',
    template: `

    <div class="modal fade" id="chartFullScreenModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <!--Content-->
        <div class="modal-content" >
            <!--Header-->
            <div class="modal-header">
                {{chartId}}
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div  class="card" style="height: auto;width: auto;" id="chartContainer{{chartId}}" class="wow"></div>
        </div>
    </div>
    </div>
`,
    stylesUrl:['app/../components/report/report.css']
})
export class ReportChartFullScreenComponent implements OnInit {
    @Input() reportComponent:Object;
    @Input() chartTitle:string ;

    chartJson :any;
    chartId:any;
    constructor() {
    }

    ngOnInit() {
        this.chartId = Math.random();
        new WOW().init();
    }
    ngAfterViewInit(){

    }
    getChartTitle(){

        return (this.chartJson && this.chartJson.chartTitle) ?this.chartJson.chartTitle:"Chart Title";
    }
    openChartInFullscreen(chartJson:any){

        this.chartJson = chartJson;
        this.chartJson["renderAt"] = "chartContainer"+this.chartId;

        chartJson.width = "1000";
        chartJson.height = "800";

        let reportChart = new FusionCharts( this.chartJson);
        reportChart.render();
        $(chartFullScreenModal).modal('show');
    }
}