"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by pratik on 26/5/16.
 */
var core_1 = require('@angular/core');
var PaginationDirective = (function () {
    function PaginationDirective() {
        this.onContentChange = new core_1.EventEmitter();
    }
    PaginationDirective.prototype.ngOnInit = function () {
        /*        console.log(this.pages);
                this.firstPage = this.pages[0];
        
                this.currentPage = this.pages[0];
                this.lastPage = this.pages[this.pages.length-1];*/
        this.asyncFlag = true;
    };
    /**
     * Selects the page, change the icon and emit to number of rows to change.
     * @param page
     * @param event
     */
    PaginationDirective.prototype.selectPage = function (page, event) {
        this.currentPage = page;
        var nextPageNumber = page.pageNumber;
        var loadPage = this.pages[nextPageNumber - 1];
        this.setActiveIcon(loadPage); // Change Circle Icon
        this.onContentChange.emit(loadPage);
    };
    /**
     *  Take the page object and sets its style class to active and all others to non active.
     * @param loadPage : Page Object
     */
    PaginationDirective.prototype.setActiveIcon = function (loadPage) {
        // Set the current page active to true and others to false
        for (var i = 0; i < this.pages.length; i++) {
            //If match found to loadPage- set isActive true else set all to false
            if (this.pages[i].pageNumber == loadPage.pageNumber) {
                this.pages[i].isActive = true;
            }
            else
                this.pages[i].isActive = false;
        }
    };
    /**
     * Method to navigate using the chvron Right Icon
     */
    PaginationDirective.prototype.navigateForward = function () {
        //Async problem
        console.log('Navigate Forward');
        console.log(this.pages);
        this.hasCallFinished();
        // Check if current is last ? No action : Move Forward
        console.log(this.currentPage);
        console.log(this.lastPage);
        if (this.currentPage.pageNumber != this.lastPage.pageNumber) {
            console.log('Forward');
            console.log(this.pages[this.currentPage.pageNumber]);
            this.selectPage(this.pages[this.currentPage.pageNumber], null);
        }
    };
    /**
     * method to navigate using the chevron Left icon
     */
    PaginationDirective.prototype.navigateBack = function () {
        this.hasCallFinished();
        //Check if current is first ? : No Action : Move Backward
        if (this.currentPage.pageNumber != this.firstPage.pageNumber) {
            var tempIndex = this.currentPage.pageNumber - 1;
            this.currentPage = this.pages[tempIndex - 1];
            this.setActiveIcon(this.currentPage);
            console.log('backward');
            console.log(this.currentPage);
            this.onContentChange.emit(this.currentPage);
        }
    };
    PaginationDirective.prototype.hasCallFinished = function () {
        if (this.asyncFlag) {
            this.firstPage = this.pages[0];
            this.currentPage = this.pages[0];
            this.lastPage = this.pages[this.pages.length - 1];
        }
        this.asyncFlag = false;
    };
    __decorate([
        core_1.Input()
    ], PaginationDirective.prototype, "pages");
    __decorate([
        core_1.Output()
    ], PaginationDirective.prototype, "onContentChange");
    PaginationDirective = __decorate([
        core_1.Component({
            selector: 'grid-pagination',
            template: "\n               <nav>\n                <ul class=\"pagination\">\n                            <li class=\"page-item\"><a class=\"page-link waves-effect\" (click)=\"navigateBack()\"><span aria-hidden=\"true\">&laquo;</span>\n        <span class=\"sr-only\">Previous</span></a></li>\n                            \n                            <li class=\"page-item\" [class.active]=\"page.isActive\" *ngFor=\"let page of pages\"><a class=\"page-link\" (click)=\"selectPage(page,$event)\">{{page.pageNumber}}</a></li>\n                            \n                            <li class=\"page-item\"><a (click)=\"navigateForward()\" class=\"page-link waves-effect\"><span aria-hidden=\"true\">&raquo;</span>\n        <span class=\"sr-only\">Next</span></a></li>\n                 </ul>\n              </nav>\n\n"
        })
    ], PaginationDirective);
    return PaginationDirective;
}());
exports.PaginationDirective = PaginationDirective;
/**
 * Class representing the Pagination
 */
var Page = (function () {
    function Page(isActive, pageNumber, rowsToDisplay, previousRowCount) {
        this.isActive = isActive;
        this.pageNumber = pageNumber;
        this.rowsToDisplay = rowsToDisplay;
        this.previousRowCount = previousRowCount;
    }
    return Page;
}());
exports.Page = Page;
