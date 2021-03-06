"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by pratik on 27/5/16.
 */
var core_1 = require('@angular/core');
var grid_service_1 = require("../../services/table/grid.service");
var http_1 = require('@angular/http');
var paginator_component_1 = require("../paginator.component");
var StandardGridComponent = (function () {
    function StandardGridComponent(gridService) {
        this.gridService = gridService;
    }
    StandardGridComponent.prototype.check = function () {
        console.log('check');
    };
    StandardGridComponent.prototype.ngOnInit = function () {
        // Create Service Fetch Data from service and populate table.
        this.maxRowsDefault = 5; // Default change if user sets!=null TODO : To set from JSON Or Directive Input
        this.gridPages = [];
        this.gridService.getTableDataService(this, this.serviceUrl);
    };
    /**
     * Change the Table Row Content based on Pagination Click Event
     * @param page : Page Object that need to be loaded now.
     */
    StandardGridComponent.prototype.loadRows = function (page) {
        console.log(page);
        var previousCount = page.previousRowCount;
        var newCount = page.rowsToDisplay;
        this.gridContentData = []; // Empty the View Rows Data
        for (var i = previousCount; i < newCount; i++) {
            this.gridContentData.push(this.bufferDumpData[i]);
        } // yaay!
    };
    /**
     * Use the total data dump to create the paginator and emit data from loadRows to
     * change the row content.
     * @param dataDump
     */
    StandardGridComponent.prototype.chopData = function (dataDump) {
        var totalRowSize = dataDump.length;
        console.log(totalRowSize / this.maxRowsDefault);
        var result = totalRowSize / this.maxRowsDefault;
        /**
         * Rounding Off
         */
        if (result % 1 != 0) {
            // Results in Decimal No need to round off
            console.log('result if ' + Math.round(result));
            result = Math.round(result);
        }
        else {
        }
        var lastRowCount = this.maxRowsDefault;
        var newRowCount = this.maxRowsDefault + this.maxRowsDefault;
        for (var i = 2; i <= result; i++) {
            this.gridPages.push(new paginator_component_1.Page(false, i, newRowCount, lastRowCount));
            lastRowCount = newRowCount;
            newRowCount = newRowCount + this.maxRowsDefault;
        }
    };
    StandardGridComponent.prototype.changeSortStyle = function (dataIndex, headers, icon, index, format) {
        console.log(dataIndex);
        // console.log(headers);
        // console.log(index);
        console.log(icon);
        // console.log(this.header.toArray()[index].nativeElement.id);
        console.log(this.sortable);
        if (this.sortable) {
            switch (this.sortStyle) {
                case 'fa fa-sort-asc':
                    this.sortStyle = 'fa fa-sort-desc';
                    // icon.set = 'fa fa-sort-desc';
                    this.descendingSort(dataIndex);
                    // TODO : Method for sorting() : desc
                    break;
                case 'fa fa-sort-desc':
                    this.sortStyle = 'fa fa-sort-asc';
                    // icon.class = 'fa fa-sort-desc';
                    // TODO : Method for sorting() : asc
                    this.ascendingSort(dataIndex);
                    break;
                default:
                    this.sortStyle = 'fa fa-sort-asc';
                    // icon.class = 'fa -fa-sort-asc';
                    // TODO : Method for sorting() : asc
                    this.ascendingSort(dataIndex);
                    break;
            }
        }
    };
    StandardGridComponent.prototype.ascendingSort = function (key) {
        // console.log(this.gridContentData);
        var localDataCopy = this.gridContentData;
        var localSortedCopy = [];
        localSortedCopy = localDataCopy.sort(function (a, b) { return a[key].localeCompare(b[key]); });
    };
    StandardGridComponent.prototype.descendingSort = function (key) {
        var localDataCopy = this.gridContentData;
        var localSortedCopy = [];
        localSortedCopy = this.gridContentData.sort(function (a, b) { return b[key].localeCompare(a[key]); });
    };
    StandardGridComponent.prototype.cellClick = function (cellData) {
        console.log(cellData);
        alert('Clicked on Cell Value : ' + cellData);
    };
    __decorate([
        core_1.Input('column')
    ], StandardGridComponent.prototype, "column");
    __decorate([
        core_1.Input('dataurl')
    ], StandardGridComponent.prototype, "serviceUrl");
    __decorate([
        core_1.Input('datalist')
    ], StandardGridComponent.prototype, "datalist");
    __decorate([
        core_1.Input('sortable')
    ], StandardGridComponent.prototype, "sortable");
    __decorate([
        // TODO : Make the sortable from service instead of directive.
        core_1.Input('columnItem')
    ], StandardGridComponent.prototype, "gridHeaderData");
    __decorate([
        core_1.ViewChildren('icon')
    ], StandardGridComponent.prototype, "header");
    StandardGridComponent = __decorate([
        core_1.Component({
            selector: 'standard-grid',
            template: "\n                    <table class=\"table table-hover\">\n                          <thead>\n                            <tr>\n<!--&lt;!&ndash; TODO : Make Column directive&ndash;&gt;    <th (click)=\"changeSortStyle(tableHeaderItem.dataIndex,headers,icon,i)\" [hidden]=\"tableHeaderItem.hidden\" #headers *ngFor=\"let tableHeaderItem of gridHeaderData; let i = index\" [attr.id]=\"tableHeaderItem.dataIndex\">{{tableHeaderItem.text}}&nbsp;&nbsp;<i [class]=\"sortStyle\" [attr.id]=\"tableHeaderItem.dataIndex\" #icon></i></th>                             -->\n                                <th (click)=\"changeSortStyle()\" [hidden]=\"tableHeaderItem.hidden\" *ngFor=\"let tableHeaderItem of gridHeaderData\">{{tableHeaderItem.text}}</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr *ngFor=\"let tableDataItem of gridContentData\">\n                              <td *ngFor=\"let tableHeaderItem of gridHeaderData\" [style.display]=\"tableHeaderItem.hidden ? 'none' : 'table-cell'\" (click)=\"cellClick(tableDataItem[tableHeaderItem.dataIndex])\">{{tableDataItem[tableHeaderItem.dataIndex]}}</td>\n                            </tr>\n                          </tbody>                    \n                    </table>\n                          <center>\n                          <grid-pagination [pages]=\"gridPages\" (onContentChange)=\"loadRows($event)\"></grid-pagination>\n                          </center>\n",
            providers: [http_1.HTTP_PROVIDERS, grid_service_1.GridService],
            directives: [paginator_component_1.PaginationDirective]
        })
    ], StandardGridComponent);
    return StandardGridComponent;
}());
exports.StandardGridComponent = StandardGridComponent;
