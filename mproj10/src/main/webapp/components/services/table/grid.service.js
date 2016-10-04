"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by pratik on 25/5/16.
 */
/**
 * Created by pratik on 16/5/16.
 */
var core_1 = require('@angular/core');
var paginator_component_1 = require("../../grid/paginator.component");
var group_grid_component_1 = require("../../grid/groupbygrid/group.grid.component");
/**
 * Service class that calls the service to get data of table
 */
var GridService = (function () {
    // DI for getting HTTP class instance
    function GridService(_http) {
        this._http = _http;
    }
    /**
     * Calls the service and assigns the returned JSON data to caller.data
     * @param parentRef : Refrence of the directive class calling the service
     * @param serviceUrl : URL of the service to be called
     */
    GridService.prototype.getTableDataService = function (parentRef, serviceUrl) {
        var _this = this;
        this._http.get(serviceUrl)
            .subscribe(function (res) {
            // On Successfully receiving data
            parentRef.data = res.json();
            parentRef.gridHeaderData = parentRef.data.column;
            // parentRef.gridContentData = parentRef.data.data;
            parentRef.bufferDumpData = parentRef.data.data;
            // console.log(parentRef.bufferDumpData.length);
            parentRef.gridContentData = [];
            for (var i = 0; i < parentRef.maxRowsDefault; i++) {
                parentRef.gridContentData.push(parentRef.bufferDumpData[i]);
            }
            parentRef.gridPages.push(new paginator_component_1.Page(true, 1, parentRef.maxRowsDefault, 0));
            parentRef.chopData(parentRef.bufferDumpData);
            // Need to chop rest of the data.
        }, function (err) {
            console.error('Error Occured on Service. Classname : ' + _this.constructor.name);
        }, function () {
            //on complete?
        });
    };
    /**
     * Service Method that returns the data fetched from the service, Groupes them based on the 3 fields
     * i.e groupBykey && groupByValue && groupByLabel
     * and then Chops the data based
     * on the default maxRows count to display for paginator.
     * @param parentRef
     * @param serviceUrl
     */
    GridService.prototype.getTableGroupedDataService = function (parentRef, serviceUrl) {
        var _this = this;
        console.log(serviceUrl);
        this._http.get(serviceUrl)
            .subscribe(function (res) {
            parentRef.buffer = res.json();
            parentRef.headerData = parentRef.buffer.column;
            parentRef.gridData = parentRef.buffer.data;
            parentRef.groupByKey = parentRef.buffer.groupbyKey;
            parentRef.summaryData = parentRef.buffer.summary;
            // console.log(parentRef.summaryData);
            _this.groupGridData(parentRef.groupByKey, parentRef); // Group the data based on the 3 keys. TODO : to add the groupLabel to the template from service.
        }, function (err) {
            console.log('Error Occured on Service. Classname : ' + _this.constructor.name);
        }, function () {
            // OnComplete
        });
    };
    GridService.prototype.groupGridData = function (groupByKey, parentRef) {
        // console.log('Grp by: ');
        var groupedCollection = [];
        var group;
        for (var i = 0; i < parentRef.gridData.length; i++) {
            // console.log(this.gridData[i][groupByKey]);
            if (!groupedCollection.includes(parentRef.gridData[i][groupByKey])) {
                groupedCollection.push(parentRef.gridData[i][groupByKey]); // unique group items
            }
        }
        // console.log(groupedCollection);
        for (var i = 0; i < groupedCollection.length; i++) {
            var gObj = new group_grid_component_1.Group();
            var tmp = [];
            gObj.headerText = groupedCollection[i];
            gObj.viewId = '#gp' + i;
            gObj.groupId = 'gp' + i;
            gObj.groupSummary = [];
            // gObj.groupSummary = grpSummary;
            // Form Groups of data for Each Group Object
            for (var j = 0; j < parentRef.gridData.length; j++) {
                // console.log(this.gridData[j][groupByKey]);
                // console.log(groupedCollection[i]);
                // console.log(this.gridData[j][groupByKey]==groupedCollection[i]);
                if (parentRef.gridData[j][groupByKey] == groupedCollection[i]) {
                    tmp.push(parentRef.gridData[j]);
                }
            }
            gObj.groupedData = tmp;
            // Perform calcuation before pushing to groups
            // console.log('-----');
            // console.log(gObj.groupedData);
            for (var i_1 = 0; i_1 < parentRef.summaryData.length; i_1++) {
                var grpSummary = new group_grid_component_1.GroupSummary();
                var result = 0;
                grpSummary.dataIndex = parentRef.summaryData[i_1].dataIndex;
                grpSummary.operation = parentRef.summaryData[i_1].operation;
                grpSummary.resultSummary = 0;
                var bufferArray = [];
                var bufferDateArray = [];
                // console.log('Index : '+grpSummary.dataIndex);
                // console.log('Opertaion '+grpSummary.operation);
                for (var j = 0; j < gObj.groupedData.length; j++) {
                    bufferArray.push(gObj.groupedData[j][grpSummary.dataIndex]);
                    bufferDateArray.push(new Date(gObj.groupedData[j].dataIndex));
                    // TODO :  Add a switch case for operation
                    switch (grpSummary.operation) {
                        case 'total':
                            grpSummary.resultSummary += Number(gObj.groupedData[j][grpSummary.dataIndex]);
                            break;
                        case 'average':
                            grpSummary.resultSummary += Number(gObj.groupedData[j][grpSummary.dataIndex]);
                            grpSummary.resultSummary = (grpSummary.resultSummary / gObj.groupedData.length);
                            // grpSummary.resultSummary = grpSummary.resultSummary.toFixed(3); TODO : Fix decimal places.
                            // console.log('should perform average op');
                            break;
                        case 'min':
                            // console.log('should perform min');
                            grpSummary.resultSummary = Math.min.apply(Math, bufferArray);
                            break;
                        case 'max':
                            // console.log('should perform max');
                            grpSummary.resultSummary = Math.max.apply(Math, bufferArray);
                            break;
                        case 'datemax':
                            grpSummary.resultSummary = new Date(Math.max.apply(null, bufferDateArray));
                            break;
                        default:
                            // console.log('Do nothing');
                            break;
                    }
                }
                console.log(grpSummary);
                gObj.groupSummary.push(grpSummary);
            }
            parentRef.groupedData.push(gObj);
        }
        console.log(parentRef.groupedData);
        parentRef.groupHeader = groupedCollection;
        //Add First Set of Paged Data
        for (var i = 0; i < parentRef.maxRows; i++) {
            parentRef.groupedPaginatorData.push(parentRef.groupedData[i]);
        }
        // console.log('First set : '+parentRef.groupedPaginatorData);
        if (groupedCollection.length <= 0) {
            parentRef.isGroupValid = false;
        }
        parentRef.groupPages.push(new paginator_component_1.Page(true, 1, parentRef.maxRows, 0)); // Add The first Page of Paginator.
        parentRef.chopData(parentRef.groupedData); // Chop groups into Pages for Pagination Control.
        // this.doGroupPagination(parentRef);  // Start pagination
    };
    /**
     * Performs Pagination Action for group grid. Calculated On Number of Groups and not
     * the group Page.
     * @param parentRef
     */
    GridService.prototype.doGroupPagination = function (parentRef) {
        var totalCountGroup = parentRef.groupedData.length;
        // console.log(" Available Groups "+totalCountGroup);
        // console.log("Max Rows"+parentRef.maxRows);
        var firstPage = new paginator_component_1.Page(true, 1, parentRef.maxRows, 0);
        // console.log(firstPage);
        parentRef.chopData(totalCountGroup);
        //Need to divide the total : groupedData[] into chunks with ref to the input provided as maxRows to groupedPaginator Data
    };
    GridService = __decorate([
        core_1.Injectable()
    ], GridService);
    return GridService;
}());
exports.GridService = GridService;
