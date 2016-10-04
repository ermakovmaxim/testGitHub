"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
///<reference path="../../../node_modules/@angular/core/src/metadata.d.ts"/>
/**
 * Created by viral on 7/9/16.
 */
var core_1 = require('@angular/core');
var DoYouMeanText = (function () {
    function DoYouMeanText(searchEngineService, router, activatedRoute) {
        this.searchEngineService = searchEngineService;
        this.router = router;
    }
    DoYouMeanText.prototype.callHrefService = function () {
        document.getElementById("searchBoxId").value = this.doyouMeanText;
        this.router.navigate(['/mainpage/searchengine', { searchString: this.doyouMeanText, en: 'en' }]);
    };
    __decorate([
        core_1.Input()
    ], DoYouMeanText.prototype, "doyouMeanText");
    DoYouMeanText = __decorate([
        core_1.Component({
            selector: 'do-you-mean-text',
            template: "   \n          \n    <div class=\"col-lg-12\">\n            <div >\n                <p><a (click)=\"callHrefService()\" style=\"color: #0000AA\" ><u> {{doyouMeanText}} </u></a>\n                </p>\n            </div>\n   </div>\n\n"
        })
    ], DoYouMeanText);
    return DoYouMeanText;
}());
exports.DoYouMeanText = DoYouMeanText;
