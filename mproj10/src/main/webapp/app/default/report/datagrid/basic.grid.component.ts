import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'basic-grid-component',
    template: `<div>
  
        <table class="table table-hover">
               <thead>
                    <tr >
                        <th *ngFor="let item of gridColumns">{{item.header}}</th>
                    </tr>
               </thead>
               <tbody>
              <tr *ngFor="let record of gridData">
                             <!-- <td *ngFor="let col of gridColumns" class="table-cell" >{{renderGridData({{record[col.dataIndex]}})}}</td>-->
                              <td *ngFor="let col of gridColumns" class="{{renderGridData(record)}}" >{{record[col.dataIndex]}}</td>
               </tr>
                   </tbody>
        </table>
        
    </div>`,
    styleUrls:['app/../components/report/report.css'],
    directives:[],
})

export class BasicGridComponent implements OnInit {
    @Input() gridColumns :any = [];
    //@Input() reportConfig :any;
    @Input() gridData:any = [];
    @Input() rowHighLight : any[];
    @Input() reportId : string;
    //@Input() reportComponent:Object;
    constructor() {
    }

    ngOnInit() {
    }

    renderGridData(record){

                let rowArray = this.rowHighLight;
                for (var i = 0; i < rowArray.length; i++) {

                    let attrValue = record[rowArray[i].name];

                    //If row highlight is applied on date field
                    if (rowArray[i].dateFlag != undefined && rowArray[i].dateFlag == true) {
                        if (record.data.dateLongValue[rowArray[i].name] >= new Date(rowArray[i].from).getTime()
                            && record.data.dateLongValue[rowArray[i].name] <= new Date(rowArray[i].to).getTime()) {
                            return rowArray[i].styleCss;
                        }
                    }
                    //If row highlight is applied on string and integer fields
                    else {
                        if (rowArray[i].parameterType == "range") {
                            if (rowArray[i].to != "") {
                                if (attrValue >= parseInt(rowArray[i].from) && attrValue <= parseInt(rowArray[i].to))
                                    return rowArray[i].styleCss;
                            } else {
                                if (attrValue >= parseInt(rowArray[i].from))
                                    return rowArray[i].styleCss;
                            }
                        } else if (rowArray[i].parameterType == "like") {
                            var resArr = attrValue.match(new RegExp(rowArray[i].like, "gi"));
                            if (resArr != null && resArr.length > 0) {
                                return rowArray[i].styleCss;
                            }
                        }
                        else {
                            if (attrValue.toString().toUpperCase() == rowArray[i].equalTo)
                                return rowArray[i].styleCss;
                        }
                    }


        }
}
    
}