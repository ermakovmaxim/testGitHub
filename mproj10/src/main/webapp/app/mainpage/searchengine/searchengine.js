"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var SearchEngine = (function () {
    function SearchEngine(searchEngineService, router) {
        this.searchEngineService = searchEngineService;
        this.router = router;
    }
    //Route call to SearchResult
    SearchEngine.prototype.sendSearchData = function (searchString) {
        var _this = this;
        if (searchString == "") {
            toastr.error("Please enter search data.");
        }
        else {
            // document.getElementById("progressBar").style.display = "block";
            setTimeout(function () {
                _this.router.navigate(['/mainpage/searchengine', { searchString: searchString, en: 'en' }]);
            });
        }
    };
    /* This method is used get Selected drop down value and pass to sendSearchData method*/
    SearchEngine.prototype.onChangeLanguageDropDown = function (eventData) {
        this.languageValue = eventData.target.value;
        //  this.getLanguage();
    };
    SearchEngine.prototype.getLanguage = function () {
        var listOfLanguage;
        listOfLanguage = searchEngineService.getLanguage().subscribe(function (response) {
            var repsonseData = JSON.parse(response.json().response);
        }, function (error) {
            console.log('error gettting language');
        }, function () {
            console.log("gettting language Completed...");
        });
    };
    SearchEngine = __decorate([
        core_1.Component({
            selector: 'search-engine',
            template: "     \n         <li class=\"nav-item active\">\n                    <form class=\"form-inline\" style=\"padding-left: 80px\">\n                        <input class=\"form-control\" id=\"searchBoxId\" value=\"\" type=\"text\" placeholder=\"Search\" #searchstring style=\"color: white\" autocomplete=\"off\" >\n                     </form>\n            </li>\n            <li class=\"nav-item\">\n                <div class=\"col-lg-4\" (click)=\"sendSearchData(searchstring.value)\" >\n                        <i class=\"fa fa-search \" aria-hidden=\"true\" ></i>        \n                </div>\n             </li>\n     \n"
        })
    ], SearchEngine);
    return SearchEngine;
}());
exports.SearchEngine = SearchEngine;
