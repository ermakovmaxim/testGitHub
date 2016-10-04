/**
 * Created by prasad on 26/8/16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var MenuTreeComponent = (function () {
    function MenuTreeComponent(router) {
        this.router = router;
    }
    MenuTreeComponent.prototype.ngOnInit = function () { };
    MenuTreeComponent.prototype.ngAfterViewInit = function () {
    };
    MenuTreeComponent.prototype.route = function (node) {
        if (node.leaf) {
            /* after getting data from service use this code*/
            if (node.routePath != '' && node.routePath != null) {
                try {
                    var routeLink = '/mainpage/' + node.routePath;
                    this.router.navigate([routeLink]);
                }
                catch (e) { }
            }
        }
    };
    __decorate([
        core_1.Input()
    ], MenuTreeComponent.prototype, "menuList");
    MenuTreeComponent = __decorate([
        core_1.Component({
            selector: 'menu-tree',
            template: "\n\n<li>\n    <ul class=\"collapsible\" *ngFor=\"let node of menuList\"> <!--[routerLink]=\"node.routePath\" routerLinkActive=\"active\"-->\n    \n     <li (click)=\"node.toggle()\">\n     <a (click)=\"route(node)\" class=\"collapsible-header waves-effect arrow-r\" data-toggle=\"collapse\"  [attr.href]=\"node.elemenTarget\"  aria-expanded=\"false\" >{{node.menuLabel}}\n            <a *ngIf=\"!node.leaf\"><i [attr.class]=\"node.iconUrl\"></i></a>\n     </a>\n     </li>  \n     <div style=\"padding-left: 10px\"  class=\"collapse\" [attr.id]=\"node.elementId\" [ngClass]=\"{'collapse in': node.isExpanded , 'collapse':!node.isExpanded}\">\n          \n        <div *ngIf=\"!node.leaf\">\n            <menu-tree [menuList]=\"node.children\"></menu-tree>\n        </div>\n        \n    </div>\n    </ul>\n</li>                          \n                        \n"
        })
    ], MenuTreeComponent);
    return MenuTreeComponent;
}());
exports.MenuTreeComponent = MenuTreeComponent;
