/**
 * Created by prasad on 19/9/16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AllFeatureComponent = (function () {
    function AllFeatureComponent(router, _roleFeatureService) {
        this.router = router;
        this._roleFeatureService = _roleFeatureService;
    }
    AllFeatureComponent.prototype.ngOnInit = function () { };
    /* isMenuSelected(node : any){
         console.log(node);
         this.menuData = this._roleFeatureService.menuData;
         console.log(this.menuData);
         console.log(node);
 
         this.menuData.forEach((menuOption)=>{
         debugger;
             if(!node.leaf) {
                 if (menuOption.menuId == node.menuId) {
                     this.addSelected(menuOption.children, menuOption);
                     debugger;
                 }
                 else {
                     menuOption.children.forEach((menuOp)=> {
                         if (menuOp.menuId == node.menuId) {
                             menuOp.isSelected = true;
                             menuOp.isExecute = true;
                             debugger;
                             this.addSelected(menuOp.children, menuOption,);
                         }
                     })
                 }
             }
             else{
                 this.addSelected(menuOption.children, menuOption);
 
             }
 
 
 
         });
 
     }
     addSelected(childArray,parent){
         parent.isSelected = true;
         parent.isExecute =  true;
         childArray.forEach((option)=>{
             if(!option.isSelected) {
                 option.isSelected = true;
                 option.isExecute = true;
 
                 debugger;
                 }
                 else {
                    parent.isSelected = false;
                    option.isSelected = false;
                    parent.isExecute =  false;
                    option.isExecute = false;
                 debugger;
             }
             if(!option.leaf){
                 this.addSelected(option.children,option);
             }
             else{
                 parent.isSelected = true;
                 parent.isExecute =  true;
             }
 
         })
 }
 */
    AllFeatureComponent.prototype.isMenuSelected = function (node) {
        var _this = this;
        this.menuData = this._roleFeatureService.menuData;
        console.log(this.menuData);
        console.log(node);
        //  this.nodeData.emit(node);
        this.menuData.forEach(function (menuOption) {
            if (menuOption.menuId == node.menuId) {
                _this.addSelected(menuOption.children, menuOption);
                debugger;
            }
            else {
                menuOption.children.forEach(function (menuOp) {
                    if (menuOp.menuId == node.menuId) {
                        menuOp.isSelected = true;
                        menuOp.isExecute = true;
                        _this.addSelected(menuOp.children, menuOption);
                    }
                });
            }
        });
    };
    AllFeatureComponent.prototype.addSelected = function (childArray, parent) {
        var _this = this;
        childArray.forEach(function (option) {
            if (!option.isSelected) {
                option.isSelected = true;
                option.isExecute = true;
                parent.isSelected = true;
                parent.isExecute = true;
            }
            else {
                parent.isSelected = false;
                option.isSelected = false;
                parent.isExecute = false;
                option.isExecute = false;
            }
            if (!option.leaf) {
                _this.addSelected(option.children, option);
            }
        });
    };
    AllFeatureComponent.prototype.ngAfterViewInit = function () {
    };
    __decorate([
        core_1.Input()
    ], AllFeatureComponent.prototype, "menuList");
    AllFeatureComponent = __decorate([
        core_1.Component({
            selector: 'all-feature',
            template: "\n   <ul class=\"collapsible\" *ngFor=\"let node of menuList let i=index\"> <!--[routerLink]=\"node.routePath\" routerLinkActive=\"active\"-->\n         <li>\n           <div class=\"col-lg-1\">\n             <input type=\"checkbox\" [attr.id]=\"node.menuId\" class=\"filled-in\" [(ngModel)]=\"node.isSelected\" name=\"isSelected\" (change)=\"isMenuSelected(node)\">\n             <label [attr.for]=\"node.menuId\"></label>\n           </div>\n           <div class=\"col-lg-5\" >\n             <a (click)=\"node.toggle()\" >\n                 <a *ngIf=\"!node.leaf\"><i [attr.class]=\"node.iconUrl\"></i></a>\n             </a>&nbsp;&nbsp;  \n             <label *ngIf=\"!node.leaf\"><h6><b>{{node.menuLabel}}</b></h6></label> \n             <label *ngIf=\"node.leaf\"><h7><span style=\"padding-left: 30px\">{{node.menuLabel}}</span></h7></label> \n           </div>\n           <div class=\"col-lg-2\">\n             <fieldset class=\"form-group\">\n             <input type=\"checkbox\" [attr.id]=\"node.menuId\" class=\"filled-in\" [(ngModel)]=\"node.isRead\" name=\"isRead\">\n             <label [attr.for]=\"node.menuId\"></label>\n             </fieldset>\n           </div>\n           <div class=\"col-lg-2\">\n              <fieldset class=\"form-group\">\n                <input type=\"checkbox\" [attr.id]=\"node.menuId+i\" class=\"filled-in\" [(ngModel)]=\"node.isWrite\" name=\"isWrite\">\n                <label [attr.for]=\"node.menuId+i\"></label>\n              </fieldset>\n           </div>\n           <div class=\"col-lg-2\">\n              <fieldset class=\"form-group\">\n                 <input type=\"checkbox\" [attr.id]=\"node.menuId+i+i\" class=\"filled-in\" [(ngModel)]=\"node.isExecute\" name=\"isExecute\">\n                 <label [attr.for]=\"node.menuId+i+i\"></label>\n                 </fieldset>\n           </div>\n         </li>  \n         <div  class=\"collapse\" [attr.id]=\"node.elementId\" [ngClass]=\"{'collapse in': node.isExpanded , 'collapse':!node.isExpanded}\">\n              <div *ngIf=\"!node.leaf\">\n                <all-feature [menuList]=\"node.children\"></all-feature>\n              </div>    \n         </div>\n   </ul>\n                       \n                        \n"
        })
    ], AllFeatureComponent);
    return AllFeatureComponent;
}());
exports.AllFeatureComponent = AllFeatureComponent;
