/**
 * Created by prasad on 19/9/16.
 */
"use strict";
var RoleConfiguration = (function () {
    function RoleConfiguration() {
        this.roleMenuBridge = [];
    }
    return RoleConfiguration;
}());
exports.RoleConfiguration = RoleConfiguration;
var RoleList = (function () {
    function RoleList() {
    }
    return RoleList;
}());
exports.RoleList = RoleList;
var RoleMenuBridge = (function () {
    function RoleMenuBridge() {
        this.isExecute = true;
        this.isRead = true;
        this.isWrite = true;
    }
    return RoleMenuBridge;
}());
exports.RoleMenuBridge = RoleMenuBridge;
var MappedFeature = (function () {
    function MappedFeature() {
        this.isSelected = false;
        this.children = [];
        this.isExpanded = false;
        this.iconUrl = 'fa fa-angle-down rotate-icon';
        this.isExecute = false;
        this.isRead = true;
        this.isWrite = true;
    }
    MappedFeature.prototype.toggle = function () {
        this.isExpanded = !this.isExpanded;
        if (this.isExpanded) {
            this.iconUrl = 'fa fa-angle-down rotate-icon rotate-element';
        }
        else {
            this.iconUrl = 'fa fa-angle-down rotate-icon';
        }
    };
    return MappedFeature;
}());
exports.MappedFeature = MappedFeature;
