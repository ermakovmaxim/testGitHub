"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var constant_1 = require("../../../constant");
var ReportDataGridService = (function () {
    function ReportDataGridService(_http) {
        this._http = _http;
    }
    ReportDataGridService.prototype.getGridData = function (dataGridComponent, reportId, pagingData) {
        var _this = this;
        this.dataGridComponent = dataGridComponent;
        this._http.post(constant_1.REPORT_GRID_DATA_URL, { id: reportId, start: pagingData.start, page: pagingData.currentPage }, { headers: new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' }) })
            .subscribe(function (response) {
            _this.responseData = response;
        }, function (error) { console.error('Error Occured -> Classname : ' + _this.constructor.name); }, function () {
            _this.sendData();
        });
    };
    ReportDataGridService.prototype.sendData = function () {
        var body = JSON.parse(this.responseData._body);
        var data = body.response.data;
        if (data) {
            this.dataGridComponent.gridData = data;
            this.dataGridComponent.pagingData.total = body.response.total;
        }
        else {
            console.log("Report Data Grid getGridData() " + body.response.message);
        }
    };
    ReportDataGridService = __decorate([
        core_1.Injectable()
    ], ReportDataGridService);
    return ReportDataGridService;
}());
exports.ReportDataGridService = ReportDataGridService;
