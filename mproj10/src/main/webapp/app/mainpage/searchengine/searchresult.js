"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by viral on 7/9/16.
 */
var core_1 = require('@angular/core');
var SearchResult = (function () {
    function SearchResult(searchEngineService, router, activatedRoute) {
        var _this = this;
        this.searchEngineService = searchEngineService;
        this.router = router;
        //This service call used for taking data search data and send to UI
        this.responseResult = [];
        this.doyouMeanTextArray = [];
        this.searchEngineService.sendSearchData(activatedRoute.snapshot.params['searchString'], activatedRoute.snapshot.params['en']).subscribe(function (response) {
            var repsonseData = JSON.parse(response.json().response.data.message);
            _this.statusMsg = repsonseData.status;
            if (repsonseData.graphData.length == 0) {
                toastr.error("Your search -" + activatedRoute.snapshot.params['searchString'] + "- did not match any documents.");
            }
            else {
                _this.responseResult = repsonseData.graphData;
            }
            if (repsonseData.doUMean.length >= 1) {
                document.getElementById("doyoumeanButton").hidden = false;
                _this.doyouMeanTextArray = repsonseData.doUMean;
            }
            else {
                _this.doyouMeanTextArray = [];
            }
            //set search text
            document.getElementById("searchBoxId").value = activatedRoute.params.value.searchString;
        }, function (error) {
            console.log('error');
        }, function () {
            console.log("completd");
        });
    }
    SearchResult = __decorate([
        core_1.Component({
            selector: 'search-result',
            template: "   \n              <div class=\"row\">\n               <div>\n                   <a class=\"btn btn-primary\" hidden =\"true\" data-toggle=\"collapse\" id=\"doyoumeanButton\" href=\"#collapseExample\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n                                 Did you mean\n                    </a> \n                         <div class=\"collapse\" id=\"collapseExample\" *ngFor=\"let doyouMeanText of doyouMeanTextArray\">\n                                  <div class=\"card card-block\">\n                                    <do-you-mean-text [doyouMeanText]=\"doyouMeanText.newSearchString\"></do-you-mean-text>\n                                  </div>\n                         </div>\n                    </div>\n                </div>\n          <div class=\"text-md-left\"><h6 class=\"text-muted\">{{statusMsg}}</h6></div>\n               \n  <div class=\"row\">\n  \n     <div *ngFor=\"let chartdata of responseResult\" >\n        <app-chart [chartData]=\"chartdata\" ></app-chart>\n\n</div>\n</div>\n         \n"
        })
    ], SearchResult);
    return SearchResult;
}());
exports.SearchResult = SearchResult;
