/**
 * Created by viral on 7/9/16.
 */
import {Component, ElementRef, Input, Output, EventEmitter, OnInit, ViewChild}      from    '@angular/core';
import {Component, Provider, forwardRef, Provider, forwardRef, Input} from "@angular/core";
import {INPUT_MD_FORM} from "../style.constants";
import {SearchEngineService} from "./searchengine.service";
import {Router} from "@angular/router";

@Component({
    selector : 'app-chart',
    template : `   
          
    <div class="col-lg-6">
        <div  class="card" id="chartContainer{{chartId}}" class="wow fadeInUp"></div>              
    </div>

`,
})

export class AppChart implements OnInit{
    @Input() chartData: any;
    chartId : any;

    ngOnInit(){
        this.chartId = Math.random();
        new WOW().init();
    }

    ngAfterViewInit(){
        if(this.chartData!=null && this.chartData.chartJson!=null){
            let dataSource={
                chart:this.chartData.chartJson.dataSource.chart,
                data:this.chartData.chartJson.dataSource.data,
                categories:this.chartData.chartJson.dataSource.categories,
                dataset:this.chartData.chartJson.dataSource.dataset
            };
            let dataJson={
                "type": this.chartData.chartJson.type,
                "renderAt": "chartContainer"+this.chartId,
                "width": "330",
                "height": this.chartData.chartJson.height,
                "dataFormat": "json",
                "dataSource": dataSource
            }
            let revenueChart = new FusionCharts(dataJson);
            revenueChart.render();
        }

    }

}

