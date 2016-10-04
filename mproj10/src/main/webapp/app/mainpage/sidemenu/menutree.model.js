"use strict";
var MenuData = (function () {
    function MenuData() {
        this.children = [];
        this.isExpanded = false;
        this.iconUrl = 'fa fa-angle-down rotate-icon';
    }
    MenuData.prototype.toggle = function () {
        this.isExpanded = !this.isExpanded;
        if (this.isExpanded) {
            this.iconUrl = 'fa fa-angle-down rotate-icon rotate-element';
        }
        else {
            this.iconUrl = 'fa fa-angle-down rotate-icon';
        }
    };
    return MenuData;
}());
exports.MenuData = MenuData;
