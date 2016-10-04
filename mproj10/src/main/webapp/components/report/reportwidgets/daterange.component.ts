import {Component, OnInit, Input} from '@angular/core';
import {DateInputConfiguration} from "../../../../components/dateinput/date.input";

@Component({
    selector: 'report-daterange-component',
    template: `<div>
       
        <date-input
            [column]="'6'" 
            [label]="From" 
            [widgetConfig]="fromConfig" 
            (selectedvalue)="getFromValue($event)" 
            
        > </date-input>
         <date-input
            [column]="'6'" 
            [label]="To" 
            [widgetConfig]="toConfig" 
            (selectedvalue)="getToValue($event)" 
            
        > </date-input>
</div>`
})
export class ReportDateRangeComponent implements OnInit {

    @Input() queryCriteriaModel:any;
    fromConfig:any;
    toConfig:any;
    constructor() {

        this.fromConfig = new DateInputConfiguration(false,false,true,false,"Please select From date",false);
        this.toConfig = new DateInputConfiguration(false,false,true,false,"Please select To date",false);

    }

    ngOnInit() {

    }

    getFromValue(value){

        console.log("From Date"+value);
    }
    getToValue(value){

        console.log("From Date"+value);
    }


}