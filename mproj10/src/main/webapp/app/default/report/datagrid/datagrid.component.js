"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var basic_grid_component_1 = require("./basic.grid.component");
var datagrid_service_1 = require("./datagrid.service");
var http_1 = require("@angular/http");
var ReportDataGridComponent = (function () {
    function ReportDataGridComponent(reportDataGridService) {
        this.reportDataGridService = reportDataGridService;
        this.gridColumns = [];
        this.rowHighLight = [];
        this.gridData = [];
        this.pagingData = {
            currentPage: 1,
            start: 0,
            limit: 20,
            total: 0
        };
    }
    ReportDataGridComponent.prototype.ngOnInit = function () {
    };
    ReportDataGridComponent.prototype.ngAfterViewInit = function () {
    };
    ReportDataGridComponent.prototype.loadcomponent = function () {
        this.pagingData.currentPage = 1;
        this.pagingData.start = 1;
        this.pagingData.total = 0;
        this.reportDataGridService.getGridData(this, this.reportId, this.pagingData);
    };
    ReportDataGridComponent.prototype.refresh = function () {
        this.reportDataGridService.getGridData(this, this.reportId, this.pagingData);
    };
    ReportDataGridComponent.prototype.pagingToolbarStatus = function () {
        var totalPages = Math.round(this.pagingData.total / this.pagingData.limit);
        var fromRecord = this.pagingData.start;
        var toRecord = this.pagingData.total == 0 ? 0 : this.pagingData.start + this.pagingData.limit - 1;
        if (toRecord > this.pagingData.total) {
            toRecord = toRecord - (toRecord - this.pagingData.total);
        }
        return "Page (" + this.pagingData.currentPage + "/" + totalPages + ") Showing " + fromRecord + "-" + toRecord + " of total " + this.pagingData.total + " records.";
    };
    ReportDataGridComponent.prototype.moveToFirst = function () {
        this.pagingData.currentPage = 1;
        this.pagingData.start = 1;
        this.pagingData.total = 0;
        this.reportDataGridService.getGridData(this, this.reportId, this.pagingData);
    };
    ReportDataGridComponent.prototype.moveToLast = function () {
        var secondFromLastPage = Math.round(this.pagingData.total / this.pagingData.limit) - 1;
        this.pagingData.currentPage = secondFromLastPage;
        this.pagingData.start = ((secondFromLastPage) * this.pagingData.limit + 1) - this.pagingData.limit;
        this.moveNext();
        this.pagingData.currentPage = secondFromLastPage + 1;
    };
    ReportDataGridComponent.prototype.moveNext = function () {
        if (!this.isLastPage()) {
            this.pagingData.currentPage = this.pagingData.currentPage + 1;
            this.pagingData.start = this.pagingData.start + this.pagingData.limit;
            this.reportDataGridService.getGridData(this, this.reportId, this.pagingData);
        }
    };
    ReportDataGridComponent.prototype.movePrev = function () {
        if (!this.isFirstPage()) {
            this.pagingData.currentPage = this.pagingData.currentPage - 1;
            this.pagingData.start = this.pagingData.start - this.pagingData.limit;
        }
        this.reportDataGridService.getGridData(this, this.reportId, this.pagingData);
    };
    ReportDataGridComponent.prototype.isFirstPage = function () {
        return this.pagingData.start == 1;
    };
    ReportDataGridComponent.prototype.isLastPage = function () {
        var toRecord = this.pagingData.total == 0 ? 0 : this.pagingData.start + this.pagingData.limit - 1;
        if (toRecord > this.pagingData.total) {
            toRecord = toRecord - (toRecord - this.pagingData.total);
        }
        return toRecord == this.pagingData.total;
    };
    __decorate([
        core_1.Input()
    ], ReportDataGridComponent.prototype, "gridColumns");
    __decorate([
        core_1.Input()
    ], ReportDataGridComponent.prototype, "rowHighLight");
    __decorate([
        core_1.Input()
    ], ReportDataGridComponent.prototype, "reportId");
    ReportDataGridComponent = __decorate([
        core_1.Component({
            selector: 'report-datagrid-component',
            template: "\n\n<div class=\"col-lg-12\">\n<header>\n<nav style=\"float: right;\">\n\n    <ul class=\"pagination pg-bluegrey\">\n      <!--Arrow left-->\n        <li class=\"page-item\">\n            <a class=\"page-link\" aria-label=\"Previous\" disabled (click) = \"moveToFirst()\">\n                <span aria-hidden=\"true\">&laquo;</span>\n                <span class=\"sr-only\" >Previous</span>\n            </a>\n        </li>\n        \n        <!--Arrow left-->\n        <li class=\"page-item\">\n            <a class=\"page-link\" aria-label=\"Previous\" (click) = \"movePrev()\">\n                <span aria-hidden=\"true\">&laquo;</span>\n                <span class=\"sr-only\" >Previous</span>\n            </a>\n        </li>\n <li class=\"page-item\"><a class=\"page-link\"> {{pagingToolbarStatus()}} </a></li>\n    \n        <!--Arrow right-->\n        <li class=\"page-item\">\n            <a class=\"page-link\" aria-label=\"Next\" (click) = \"moveNext()\">\n                <span aria-hidden=\"true\">&raquo;</span>\n                <span class=\"sr-only\" >Next</span>\n            </a>\n        </li>\n        \n          <!--Arrow right-->\n        <li class=\"page-item\">\n            <a class=\"page-link\" aria-label=\"Next\" (click) = \"moveToLast()\">\n                <span aria-hidden=\"true\">&raquo;</span>\n                <span class=\"sr-only\" >Next</span>\n            </a>\n        </li>\n         <li class=\"page-item\">\n            <a class=\"page-link\" aria-disabled=\"true\" aria-label=\"Refresh\" (click) = \"refresh()\">\n                <span aria-hidden=\"true\" >&raquo;</span>\n                \n                <span class=\"sr-only\" >Refresh</span>\n            </a>\n        </li>\n    </ul>\n</nav>\n</header>\n<!--/Pagination grey-->\n\n                <basic-grid-component [reportId] = \"reportId\" [gridColumns]=\"gridColumns\" [rowHighLight]=\"rowHighLight\" [gridData]=\"gridData\">basic-grid-component loading...</basic-grid-component>\n            </div> ",
            directives: [basic_grid_component_1.BasicGridComponent],
            providers: [datagrid_service_1.ReportDataGridService, http_1.HTTP_PROVIDERS]
        })
    ], ReportDataGridComponent);
    return ReportDataGridComponent;
}());
exports.ReportDataGridComponent = ReportDataGridComponent;
