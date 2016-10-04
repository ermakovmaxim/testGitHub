"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var BasicGridComponent = (function () {
    //@Input() reportComponent:Object;
    function BasicGridComponent() {
        this.gridColumns = [];
        //@Input() reportConfig :any;
        this.gridData = [];
    }
    BasicGridComponent.prototype.ngOnInit = function () {
    };
    BasicGridComponent.prototype.renderGridData = function (record) {
        var rowArray = this.rowHighLight;
        for (var i = 0; i < rowArray.length; i++) {
            var attrValue = record[rowArray[i].name];
            //If row highlight is applied on date field
            if (rowArray[i].dateFlag != undefined && rowArray[i].dateFlag == true) {
                if (record.data.dateLongValue[rowArray[i].name] >= new Date(rowArray[i].from).getTime()
                    && record.data.dateLongValue[rowArray[i].name] <= new Date(rowArray[i].to).getTime()) {
                    return rowArray[i].styleCss;
                }
            }
            else {
                if (rowArray[i].parameterType == "range") {
                    if (rowArray[i].to != "") {
                        if (attrValue >= parseInt(rowArray[i].from) && attrValue <= parseInt(rowArray[i].to))
                            return rowArray[i].styleCss;
                    }
                    else {
                        if (attrValue >= parseInt(rowArray[i].from))
                            return rowArray[i].styleCss;
                    }
                }
                else if (rowArray[i].parameterType == "like") {
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
    };
    __decorate([
        core_1.Input()
    ], BasicGridComponent.prototype, "gridColumns");
    __decorate([
        core_1.Input()
    ], BasicGridComponent.prototype, "gridData");
    __decorate([
        core_1.Input()
    ], BasicGridComponent.prototype, "rowHighLight");
    __decorate([
        core_1.Input()
    ], BasicGridComponent.prototype, "reportId");
    BasicGridComponent = __decorate([
        core_1.Component({
            selector: 'basic-grid-component',
            template: "<div>\n  \n        <table class=\"table table-hover\">\n               <thead>\n                    <tr >\n                        <th *ngFor=\"let item of gridColumns\">{{item.header}}</th>\n                    </tr>\n               </thead>\n               <tbody>\n              <tr *ngFor=\"let record of gridData\">\n                             <!-- <td *ngFor=\"let col of gridColumns\" class=\"table-cell\" >{{renderGridData({{record[col.dataIndex]}})}}</td>-->\n                              <td *ngFor=\"let col of gridColumns\" class=\"{{renderGridData(record)}}\" >{{record[col.dataIndex]}}</td>\n               </tr>\n                   </tbody>\n        </table>\n        \n    </div>",
            styleUrls: ['app/../components/report/report.css'],
            directives: []
        })
    ], BasicGridComponent);
    return BasicGridComponent;
}());
exports.BasicGridComponent = BasicGridComponent;
