"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by pratik on 1/6/16.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var grid_service_1 = require("../../services/table/grid.service");
var paginator_component_1 = require("../paginator.component");
var GroupGridComponent = (function () {
    function GroupGridComponent(gridService) {
        this.gridService = gridService;
        this.isGroupValid = true;
        this.groupedData = []; // Original Grouped Data
        this.groupedPaginatorData = [];
        this.groupPages = [];
    }
    GroupGridComponent.prototype.ngOnInit = function () {
        // Service Calls should go here.
        console.log(this.url);
        console.log(this.maxRows);
        this.gridService.getTableGroupedDataService(this, this.url);
    };
    GroupGridComponent.prototype.test = function () {
        console.log(this.groupedData);
    };
    /**
     * Method that changes the sort icon
     */
    GroupGridComponent.prototype.checkSortIcon = function (dataIndex) {
        if (this.sortedIcon == '' || this.sortedIcon == null) {
            return 0;
        }
        if (this.sortedIcon == dataIndex) {
        }
        else {
            return 0;
        }
    };
    /**
     * Change the Table Row Content based on Pagination Click Event
     * @param page : Page Object that need to be loaded now.
     */
    GroupGridComponent.prototype.loadRows = function (page) {
        console.log(page);
        var previousCount = page.previousRowCount;
        var newCount = page.rowsToDisplay;
        this.groupedPaginatorData = []; // Empty the View Rows Data
        for (var i = previousCount; i < newCount; i++) {
            this.groupedPaginatorData.push(this.groupedData[i]);
        }
        this.setDefaultGroupStyle();
    };
    GroupGridComponent.prototype.setDefaultGroupStyle = function () {
        for (var i = 0; i < this.groupedPaginatorData.length; i++) {
            var item = this.groupedPaginatorData[i];
            item.expandStatus = false;
            item.icon = 'plus';
        }
    };
    /**
     * Method that groupes the grid raw data based on the key provided.
     * @param groupByKey
     */
    GroupGridComponent.prototype.groupGridData = function (groupByKey) {
        console.log('Grp by: ');
        var groupedCollection = [];
        var group;
        for (var i = 0; i < this.gridData.length; i++) {
            if (!groupedCollection.includes(this.gridData[i][groupByKey])) {
                groupedCollection.push(this.gridData[i][groupByKey]); // unique group items
            }
        }
        // console.log(groupedCollection);
        for (var i = 0; i < groupedCollection.length; i++) {
            var gObj = new Group();
            var tmp = [];
            gObj.headerText = groupedCollection[i];
            gObj.viewId = '#gp' + i;
            gObj.groupId = 'gp' + i;
            console.log('---');
            for (var j = 0; j < this.gridData.length; j++) {
                if (this.gridData[j][groupByKey] == groupedCollection[i]) {
                    tmp.push(this.gridData[j]);
                }
            }
            gObj.groupedData = tmp;
            this.groupedData.push(gObj);
            // console.log(this.groupedData);
            console.log(gObj.groupedData);
        }
        // console.log(groupedCollection);
        this.groupHeader = groupedCollection;
        if (groupedCollection.length <= 0) {
            this.isGroupValid = false;
        }
    };
    /**
     * Takes param as the complete data, and then divides the
     * total grouped data based on the maximum rows and creates
     * pages for the Paginator.
     * @param groupDataDump
     */
    GroupGridComponent.prototype.chopData = function (groupDataDump) {
        var totalGroupCount = groupDataDump.length;
        var page = new paginator_component_1.Page(true, 1, this.maxRows, 0);
        console.log('Total Groups : ' + totalGroupCount + ' And Max Rows ' + this.maxRows);
        console.log(totalGroupCount / this.maxRows);
        var totalPages = totalGroupCount / this.maxRows;
        console.log('Total Pages : ' + totalPages);
        /**
         * Rounding Off
         */
        if (totalPages % 1 != 0) {
            // Results in Decimal No need to round off
            console.log('Rounded off result if ' + Math.round(totalPages));
            totalPages = Math.round(totalPages);
        }
        else {
            //Number is whole.
            console.log('Whole Result is : ' + totalPages);
        }
        var lastRowCount = this.maxRows;
        var newRowCount = this.maxRows + this.maxRows;
        for (var i = 2; i <= totalPages; i++) {
            this.groupPages.push(new paginator_component_1.Page(false, i, newRowCount, lastRowCount));
            lastRowCount = newRowCount;
            newRowCount = newRowCount + this.maxRows;
        }
        console.log(this.groupPages);
    };
    /**
     * Sorting the grouped grid data. Sorts only the single group of data
     * at header click $event and changes the icon based on sort op.
     */
    GroupGridComponent.prototype.sortData = function (sortIndex, dataToSort, event) {
        // console.log('Sort '+sortIndex);
        // console.log(dataToSort);
        // console.log('Paginator');
        // console.log(this.groupedPaginatorData);
        // Traverse down the dataToSort -> Group Object using the sortIndex key and sort(dataToSort)
        switch (this.sortStyle) {
            default:
                // console.log('Assign ascending sort as default sort to ' +sortIndex);
                this.sortStyle = 'asc';
                this.sortGroupedData(this.sortStyle, sortIndex, dataToSort);
                break;
            case 'asc':
                // console.log('Do desc sort to '+sortIndex);
                this.sortStyle = 'desc';
                this.sortGroupedData(this.sortStyle, sortIndex, dataToSort);
                break;
            case 'desc':
                // console.log('Do Asecing sort to '+sortIndex);
                this.sortStyle = 'asc';
                this.sortGroupedData(this.sortStyle, sortIndex, dataToSort);
                break;
        }
    };
    /**
     * Performs actual sorting on the grouped data.
     * @param dataToSort
     */
    GroupGridComponent.prototype.sortGroupedData = function (sortOperation, sortKey, dataToSort) {
        switch (sortOperation) {
            case 'asc':
                for (var i = 0; i < dataToSort.length; i++) {
                    var localCopytoSort = dataToSort[i].groupedData;
                    dataToSort[i].groupedData.sort(function (a, b) { return a[sortKey].localeCompare(b[sortKey]); });
                }
                break;
            case 'desc':
                for (var i = 0; i < dataToSort.length; i++) {
                    var localCopytoSort = dataToSort[i].groupedData;
                    dataToSort[i].groupedData.sort(function (a, b) { return b[sortKey].localeCompare(a[sortKey]); });
                }
                break;
        }
    };
    /**
     * Icon switch
     */
    GroupGridComponent.prototype.expand = function (groupItem) {
        groupItem.expandStatus = true;
        this.selectedHeaderText = groupItem.headerText;
        console.log('Click');
        console.log(groupItem.expandStatus);
        if (groupItem.expandStatus === true && groupItem.icon === 'minus') {
            groupItem.expandStatus = false;
            console.log("After minus   =    " + groupItem.expandStatus);
        }
        if (groupItem.expandStatus === false) {
            groupItem.icon = 'plus';
        }
    };
    GroupGridComponent.prototype.update = function (groupItem) {
        console.log("called");
        console.log(groupItem.headerText);
        if (this.selectedHeaderText === groupItem.headerText && groupItem.expandStatus === true) {
            groupItem.icon = 'minus';
            console.log("with in update =    " + groupItem.expandStatus);
            console.log("true");
        }
    };
    __decorate([
        core_1.Input()
    ], GroupGridComponent.prototype, "url");
    __decorate([
        core_1.Input()
    ], GroupGridComponent.prototype, "data");
    __decorate([
        core_1.Input()
    ], GroupGridComponent.prototype, "maxRows");
    GroupGridComponent = __decorate([
        core_1.Component({
            selector: 'group-grid',
            template: "\n                       \n                        <div class=\"container\">\n                            <table class=\"table table-sm table-hover z-depth-1\">\n                                <thead class=\"thead-inverse\">\n                                <tr>\n                                    <th *ngFor=\"let head of headerData\" [hidden]=\"head.hide\" (click)=\"sortData(head.dataIndex,groupedPaginatorData,$event)\"><i [ngClass]=\"{'fa fa-sort': (checkSortIcon(head.dataIndex)==0),'fa fa-sort-asc': (checkSortIcon(head.dataIndex)==-1),'fa fa-sort-desc' : (checkSortIcon(head.dataIndex)==1)}\"></i>{{head.text}}</th>\n                                </tr>\n                                </thead>\n                                    <!--<template *ngFor=\"let item of groupedPaginatorData\">-->\n                                    <template ngFor let-item=\"$implicit\" [ngForOf]=\"groupedPaginatorData\" let-i=\"index\">\n                                           <tr data-toggle=\"collapse\" [attr.data-target]=\"item.viewId\" class=\"table-active clickable animated fadeIn\">\n                                            <td class=\"thead-default\" (click)=\"expand(item)\" colspan=\"4\"><i class=\"fa fa-{{item.icon}}-square\" aria-hidden=\"true\" [ngClass]=\"update(item)\">&nbsp;&nbsp;&nbsp;<b>{{item.headerText}}</b></i></td>\n                                           </tr>\n                        \n                                             <tbody [attr.id]=\"item.groupId\" class=\"collapse\">\n                                                <tr *ngFor=\"let data of item.groupedData\">\n                                                    <td>{{data.description}}</td>\n                                                    <td *ngFor=\"let head of headerData\" [hidden]=\"head.hidden\">{{data[head.dataIndex]}}</td>   <!-- TODO adding their grouping dynamic  && ISSUE Desciption missing-->\n                                                </tr>\n                                                \n                                                <tr>\n                                                   <td><center><b>Summary({{item.groupedData.length}})</b></center></td>\n                                                    <td *ngFor=\"let summary of item.groupSummary\"><b>{{summary.resultSummary}}</b></td>\n                                                </tr>\n                                                \n                                            </tbody>\n                                    </template>\n                                  </table>\n                          <center>\n                          <grid-pagination [pages]=\"groupPages\" (onContentChange)=\"loadRows($event)\"></grid-pagination>\n                          </center>\n                        </div>\n                         \n",
            providers: [http_1.HTTP_PROVIDERS, grid_service_1.GridService],
            directives: [paginator_component_1.PaginationDirective]
        })
    ], GroupGridComponent);
    return GroupGridComponent;
}());
exports.GroupGridComponent = GroupGridComponent;
/**
 * Model class for Grid Groupings.
 */
var Group = (function () {
    function Group() {
        this.icon = 'plus';
    }
    return Group;
}());
exports.Group = Group;
var GroupSummary = (function () {
    function GroupSummary() {
    }
    return GroupSummary;
}());
exports.GroupSummary = GroupSummary;
