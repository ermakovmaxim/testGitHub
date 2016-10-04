/**
 * Created by pratik on 16/9/16.
 */
import {Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter} from '@angular/core';
import {BASIC_WIDGETSTYLE_CLASS} from "../style.constants";
import {GroupFieldService} from "../services/group.service";

@Component({
    selector: 'radio-group-input',
    template : `
    
     <div [class]="widgetStyleClassName">
           <span  *ngFor="let row of rows let rowIndex = index">
                    <input [attr.name]="groupName" type="radio" class="with-gap {{groupClassId}}" id="{{rowIndex}}{{row[widgetConfig.valueField]}}{{row[widgetConfig.displayField]}}" [attr.value] ="row[widgetConfig.valueField]" (change)="setSelectedValue(row)">
                    <label [attr.for]="rowIndex+row[widgetConfig.valueField]+row[widgetConfig.displayField]">{{row[widgetConfig.displayField]}}</label>            
           </span>
     </div>
     
`
})
export class RadioGroupInputComponent implements OnInit,OnChanges{

    @Input()    column       : string;

    @Input()    widgetConfig : RadioGroupInputConfiguration;

    @Input()    groupName    : string;

    @Input()    methodType   : string;

    @Input()    serviceurl   : string;

    @Input()    localData    : any;

    @Input()    preSelected  : any;

    @Output()   selectedData : any = new EventEmitter<>();

    rows                     : any[];

    response                 : any;

    widgetStyleClassName     : string;

    groupClassId             : string;

    setDefault               : boolean;

    constructor(private groupDataService : GroupFieldService) {
        this.groupClassId = Math.floor(Math.random()*90000) + 10000;
    }

    ngOnInit() {
        this.widgetStyleClassName = BASIC_WIDGETSTYLE_CLASS+this.column;
    }

    ngOnChanges(change : SimpleChanges){
        let data = change['localData'].currentValue;

        if(data != null){
            this.setData(change['localData'].currentValue);
        }

        debugger;

        let pre = change['preSelected'].currentValue;
        if(pre != null){
            this.setDefault = true;
        }

    }

    ngAfterViewInit(){
        if(this.serviceurl !=null)
            this.loadData();

        if(this.setDefault)
            this.setDefaultSelected();
    }

    loadData(){
        this.groupDataService.getData(this,"setData",this.serviceurl,this.methodType);
    }


    setSelectedValue(row : any){
        let valueFieldKey = this.widgetConfig.valueField;
        let result = {[valueFieldKey] : row[this.widgetConfig.valueField]};
        this.selectedData.emit(result);
    }

    setData(data){
        this.response = data;
        this.rows = data.response.data;
    }

    setDefaultSelected(){
        let radios = document.getElementsByClassName('with-gap ' + this.groupClassId);
            for (let i = 0; i < radios.length; i++) {
                if (radios[i].value == this.preSelected){
                    radios[i].setAttribute('checked','checked');
                }
            }

    }


}


export class RadioGroupInputConfiguration{
    displayField : string;
    valueField : string;
    hidden : boolean;
    disabled : boolean;
    required : boolean;
    errorMessage : string;
    validState : boolean;

    constructor(displayField:string, valueField:string, hidden:boolean, disabled:boolean, required:boolean, errorMessage:string) {
        this.displayField = displayField;
        this.valueField = valueField;
        this.hidden = hidden;
        this.disabled = disabled;
        this.required = required;
        this.errorMessage = errorMessage;
    }
}


/**
 * Usage
 * <radio-group-input [column]="'12'" [widgetConfig]="radioGroupConfig" [groupName]="'transport'" (selectedData)="transportMode = $event" [serviceurl]="'secure/Country/findAll'" [methodType]="'get'" [localData]="countryData"></radio-group-input>
 * <radio-group-input [groupName]="gender" (selectedData)="userData.genderId = $event" [column]="'6'" [widgetConfig]="radioGroupConfig" [localData]="radioObject"  ></radio-group-input>
 */
