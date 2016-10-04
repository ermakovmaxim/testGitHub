"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var menutree_model_1 = require("./sidemenu/menutree.model");
var MainPageComponent = (function () {
    function MainPageComponent(menuService, authenticateService, router) {
        var _this = this;
        this.menuService = menuService;
        this.authenticateService = authenticateService;
        this.router = router;
        this.menuList = [];
        this.menu = new menutree_model_1.MenuData();
        this.menuService.getMainScreenMenu().subscribe(function (response) {
            var res = response.json();
            _this.menuBody = JSON.parse(res.response.data);
            console.log('json');
            _this.mainMenuSorting(_this.menuBody.menus);
        }, function (error) {
            console.log('error');
        }, function () {
            console.log('Submit');
        });
    }
    MainPageComponent.prototype.ngOnInit = function () { };
    MainPageComponent.prototype.ngAfterViewInit = function () {
        $(".button-collapse").sideNav();
        $(document).ready(function () {
            $('.mdb-select').material_select();
        });
    };
    MainPageComponent.prototype.mainMenuSorting = function (menuBody) {
        var _this = this;
        menuBody.forEach(function (option) {
            var parent = new menutree_model_1.MenuData();
            parent.menuLabel = option.menuName;
            parent.routePath = option.menuAction;
            parent.leaf = option.leaf;
            if (!parent.leaf) {
                _this.addChild(option.children, parent);
            }
            _this.menuList.push(parent);
        });
    };
    MainPageComponent.prototype.addChild = function (child, parent) {
        for (var i = 0; i < child.length; i++) {
            var parentChildren = new menutree_model_1.MenuData();
            parentChildren.menuLabel = child[i].menuName;
            parentChildren.leaf = child[i].leaf;
            if (child[i].leaf) {
                if (child[i].menuAction != '') {
                    var menuAction = child[i].menuAction;
                    try {
                        var menuObject = JSON.parse(menuAction);
                        parentChildren.routePath = menuObject.path;
                    }
                    catch (e) {
                        parentChildren.routePath = '';
                    }
                }
            }
            parent.children.push(parentChildren);
            if (!parentChildren.leaf) {
                this.addChild(child[i].children, parentChildren);
            }
        }
    };
    MainPageComponent.prototype.logoutAuthenticate = function () {
        var _this = this;
        console.log('call check logout');
        this.authenticateService.logOutServiceAuthenticateUser().subscribe(function (response) {
            var res = response.json();
        }, function (error) {
            console.log('logout error');
        }, function () {
            _this.clearCookies();
            setTimeout(function () { _this.router.navigate(['/login']), 200; });
        });
    };
    MainPageComponent.prototype.clearCookies = function () {
        document.cookie = 'XA_ID' +
            '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
        document.cookie = 'XA_TID' +
            '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
        console.log('clear cookies');
    };
    MainPageComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            templateUrl: 'app/mainpage/mainpage.html'
        })
    ], MainPageComponent);
    return MainPageComponent;
}());
exports.MainPageComponent = MainPageComponent;
