/**
 * Created by ketan on 7/9/16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var style_constants_1 = require("../style.constants");
var datagrid_service_1 = require("./datagrid.service");
var DataGrid = (function () {
    function DataGrid(dataGridService) {
        this.dataGridService = dataGridService;
        this.rowData = new core_1.EventEmitter();
    }
    DataGrid.prototype.ngOnChanges = function (change) {
        var data = change['localdata'].currentValue;
        if (data && data.response) {
            this.setData(change['localdata'].currentValue);
        }
    };
    DataGrid.prototype.ngOnInit = function () {
        this.widgetStyleClassName = style_constants_1.INPUT_MD_FORM + this.column;
    };
    DataGrid.prototype.ngAfterViewInit = function () {
        this.loadData();
    };
    DataGrid.prototype.reload = function () {
        this.loadData();
    };
    DataGrid.prototype.loadData = function () {
        this.dataGridService.getData(this, "setData()", this.serviceurl, this.methodType);
    };
    DataGrid.prototype.setData = function (responseData) {
        this.response = responseData.response;
        this.pageNumber = 1;
        if (this.response.data.length > (1 * this.pageSize)) {
            this.maxPage = Math.floor((this.response.data.length / this.pageSize));
            if ((this.response.data.length % this.pageSize) > 0) {
                this.maxPage++;
            }
        }
        this.rows = this.response.data;
        this.renderData();
    };
    DataGrid.prototype.renderData = function () {
        if (this.maxPage > 1) {
            var rowsTemp = this.response.data;
            var newRows = [];
            var startIndex = 1;
            var endIndex = this.pageSize;
            if (this.pageNumber > 1) {
                startIndex = (this.pageNumber - 1) * this.pageSize;
                endIndex = startIndex + this.pageSize;
            }
            while (startIndex <= endIndex) {
                if (rowsTemp[startIndex]) {
                    newRows.push(rowsTemp[startIndex]);
                }
                startIndex++;
            }
            this.rows = newRows;
        }
        else {
            this.rows = this.response.data;
        }
    };
    DataGrid.prototype.rowClick = function (rowIndex) {
        this.rowData.emit(this.rows[rowIndex]);
    };
    DataGrid.prototype.next = function () {
        debugger;
        if (this.pageNumber < this.maxPage) {
            this.pageNumber++;
        }
        this.renderData();
    };
    DataGrid.prototype.prev = function () {
        debugger;
        if (this.pageNumber > 1) {
            this.pageNumber--;
        }
        else {
            this.pageNumber = 1;
        }
        this.renderData();
    };
    __decorate([
        core_1.Input()
    ], DataGrid.prototype, "serviceurl");
    __decorate([
        core_1.Input()
    ], DataGrid.prototype, "methodType");
    __decorate([
        core_1.Input()
    ], DataGrid.prototype, "column");
    __decorate([
        core_1.Input()
    ], DataGrid.prototype, "title");
    __decorate([
        core_1.Input()
    ], DataGrid.prototype, "widgetConfig");
    __decorate([
        core_1.Input()
    ], DataGrid.prototype, "clientSidePaging");
    __decorate([
        core_1.Input()
    ], DataGrid.prototype, "pageSize");
    __decorate([
        core_1.Input()
    ], DataGrid.prototype, "localdata");
    __decorate([
        core_1.Output()
    ], DataGrid.prototype, "rowData");
    DataGrid = __decorate([
        core_1.Component({
            selector: 'data-grid',
            template: "\n                        <div [class]=\"widgetStyleClassName\">\n                        <table width=\"100%\">\n                            <tr>\n                                <td>\n                                     <b>{{title}}</b> \n                                </td>\n                                <td width=\"25%\" align=\"right\" [hidden]=\"clientSidePaging ? false : true\">\n                                      <ul class=\"pagination pg-bluegrey\">\n                                        <li class=\"page-item\">\n                                          <a class=\"page-link\"   aria-label=\"Previous\" (click)=\"prev()\">\n                                            <i class=\"fa fa-backward\" aria-hidden=\"true\"></i>\n                                          </a>\n                                        </li>\n                                        <li class=\"page-item\">\n                                          <a class=\"page-link\"  aria-label=\"Next\" (click)=\"next()\">\n                                            <i class=\"fa fa-forward\" aria-hidden=\"true\"></i>\n                                          </a>\n                                        </li>\n                                        <li class=\"page-item\">\n                                          <a class=\"page-link\"  aria-label=\"Next\" (click)=\"reload()\">\n                                            <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\n                                          </a>\n                                        </li>\n                                        \n                                      </ul>\n                                </td>\n                            </tr>\n                        </table>\n                            <table class=\"table table-hover\">\n                                <thead>\n                                    <tr>\n                                        <th *ngFor=\"let columns of widgetConfig.columns\" [hidden]=\"columns.hidden\">\n                                            {{columns.text}}\n                                        </th>\n                                    </tr>\n                                </thead>\n                                 <tr *ngFor=\"let row of rows let rowIndex = index \" (click)=\"rowClick(rowIndex)\">\n                                   <td *ngFor=\"let columns of widgetConfig.columns\" [hidden] =\"columns.hidden\" >\n                                            {{row[columns.dataIndex]}}\n                                    </td>\n                                </tr>\n                            </table>\n                        </div> \n    ",
            providers: [http_1.HTTP_PROVIDERS, datagrid_service_1.DataGridService],
            directives: []
        })
    ], DataGrid);
    return DataGrid;
}());
exports.DataGrid = DataGrid;
var DataGridConfiguration = (function () {
    function DataGridConfiguration(columns) {
        this.columns = columns;
        console.log(this.columns);
    }
    return DataGridConfiguration;
}());
exports.DataGridConfiguration = DataGridConfiguration;
