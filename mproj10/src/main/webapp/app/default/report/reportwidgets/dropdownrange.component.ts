import {Component, OnInit, Input} from '@angular/core';
import { SelectFieldInputConfiguration} from "../../../../components/selectinput/selectfield.select";

@Component({
    selector: 'report-dropdownrange-component',
    template: `
  
  {{widgetConfig.fromFieldLabel}} : 
  <select-field  [serviceurl]="widgetConfig.serviceUrl" 
            [methodType]="'get'"
            [column]="'6'" 
            [label]="From" 
            [widgetConfig]="fromConfig" 
            (selectedData)="getFromValue($event)" 
            [ddata] ="fromData"
            [(ngModel)]="queryCriteriaModel[widgetConfig.fromName]"
            >

  </select-field>
  <select-field  [serviceurl]="widgetConfig.serviceUrl" 
            [methodType]="'get'"
            [column]="'6'" 
            [label]="To" 
            [widgetConfig]="toConfig" 
            (selectedData)="getToValue($event)" 
            [ddata] ="toData"
            [(ngModel)]="queryCriteriaModel[widgetConfig.toName]"
   >
  </select-field>
   `,
    directives:[],
    styles:[]
})
export class RangeDropDownComponent implements OnInit {

    @Input() queryCriteriaModel:any;

    fromData:any=[];
    toData:any=[];

    fromConfig:any;
    toConfig:any;

    widgetConfig :any = {
    "xtype": "dropdownrange",
    "fromName": "cityName",
    "toName": "cityName1",
    "datatype": "INT",
    "fromFieldLabel": "cityName",
    "toFieldLabel": "cityName",
    "displayField": "primaryDisplay",
    "valueField": "primaryKey",
    "widgetId": 7,
    "serviceId": "1D6CBFD8-0890-40E5-87D8-EDF7F7147FFB",
    "serviceOpId": "C52FC1FA-812C-4578-B076-D013FC213E5F",
    "defaultValue": "",
    "toDefaultValue": "",
    "parentWidget": 0,
    "serviceUrl": "secure/City/findAll",
    "index": ""
    };


    constructor() {

        this.fromData =[];
        this.toData =[];

        this.fromConfig = new SelectFieldInputConfiguration(this.widgetConfig.displayField,this.widgetConfig.valueField,false,false,true,'Please select '+this.widgetConfig.fromName);
        this.toConfig = new SelectFieldInputConfiguration(this.widgetConfig.displayField,this.widgetConfig.valueField,false,false,true,'Please select '+this.widgetConfig.toName);

    }

    ngOnInit() {
        this.queryCriteriaModelJson  = this.queryCriteriaModel.toJson();
    }
    getFromValue(value){

    }
    getToValue(value){

    }


}