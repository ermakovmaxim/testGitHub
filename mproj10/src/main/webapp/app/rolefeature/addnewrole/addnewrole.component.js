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
var text_input_1 = require("../../../components/textinput/text.input");
var addnewrole_model_1 = require("./addnewrole.model");
var radio_group_input_1 = require("../../../components/radioinput/radio.group.input");
var simple_button_1 = require("../../../components/button/simple.button");
var reset_button_1 = require("../../../components/button/reset.button");
var AddNewRoleComponent = (function () {
    function AddNewRoleComponent(_roleFeatureService, _commonsValidatorService) {
        this._roleFeatureService = _roleFeatureService;
        this._commonsValidatorService = _commonsValidatorService;
        this.SaveConfig = new simple_button_1.SimpleButtonConfiguration(false, false);
        this.ResetConfig = new reset_button_1.ResetButtonConfiguration(false, false);
        this.mappedFeatureList = [];
        this.roleMenuBrigeArray = [];
        this.dragData = [];
        this.roleListArray = [];
        this.roleconfig = new addnewrole_model_1.RoleConfiguration();
        this.deviceConfig = new radio_group_input_1.RadioGroupInputConfiguration('displayField', 'valueField', false, false, true, 'select device mode ');
        this.roleNameConfig = new text_input_1.TextInputConfiguration(false, false, false, true, '', '', 'Invalid Role Name');
        this.roleDescriptionConfig = new text_input_1.TextInputConfiguration(false, false, false, true, '', '', 'Invalid Description');
        this.menuList = [];
        this.deviceType = {
            response: {
                data: [
                    { displayField: 'Web', valueField: '1' },
                    { displayField: 'Mobile', valueField: '2' }
                ]
            }
        };
    }
    AddNewRoleComponent.prototype.resetForm = function () {
        document.getElementById("roleForm").reset();
    };
    AddNewRoleComponent.prototype.selectAllRole = function (data) {
        var _this = this;
        if (data) {
            this.menuList.forEach(function (option) {
                option.isSelected = true;
                option.isExecute = true;
                if (!option.leaf) {
                    _this.childSelected(option.children, data);
                }
            });
        }
        else {
            this.menuList.forEach(function (option) {
                option.isSelected = false;
                option.isExecute = false;
                if (!option.leaf) {
                    _this.childSelected(option.children, data);
                }
            });
        }
    };
    AddNewRoleComponent.prototype.childSelected = function (child, data) {
        var _this = this;
        if (data) {
            child.forEach(function (option) {
                option.isSelected = true;
                option.isExecute = true;
                if (!option.leaf) {
                    _this.childSelected(option.children, data);
                }
            });
        }
        else {
            child.forEach(function (option) {
                option.isSelected = false;
                option.isExecute = false;
                if (!option.leaf) {
                    _this.childSelected(option.children, data);
                }
            });
        }
    };
    AddNewRoleComponent.prototype.SaveRole = function () {
        this.setRoleConfigData(this.menuList);
        var requestJson = { 'roleDescription': this.roleconfig.roleName, 'roleName': this.roleconfig.roleDescription, 'roleMenuBridge': this.roleMenuBrigeArray };
        var componentArray = [this.roleNameConfig, this.roleDescriptionConfig];
        if (this._commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
            return;
        }
        else {
            this._roleFeatureService.saveUser(this, "SaveResponseData", "secure/Roles", "post", requestJson);
        }
    };
    AddNewRoleComponent.prototype.SaveResponseData = function (data) {
        toastr.success('Role Added Successfully');
        /*TODO : if required*/
        //  this.getRoleList();
    };
    AddNewRoleComponent.prototype.setRoleConfigData = function (data) {
        var _this = this;
        data.forEach(function (option) {
            if (option.isSelected) {
                var role = new addnewrole_model_1.RoleMenuBridge();
                role.menuId = option.menuId;
                role.isRead = option.isRead;
                role.isWrite = option.isWrite;
                role.isExecute = option.isExecute;
                if (!option.leaf) {
                    _this.addChildConfigData(option.children, role);
                }
                _this.roleMenuBrigeArray.push(role);
            }
        });
    };
    AddNewRoleComponent.prototype.addChildConfigData = function (child, parent) {
        var _this = this;
        child.forEach(function (option) {
            var role = new addnewrole_model_1.RoleMenuBridge();
            role.menuId = option.menuId;
            role.isRead = option.isRead;
            role.isWrite = option.isWrite;
            role.isExecute = option.isExecute;
            _this.roleMenuBrigeArray.push(role);
            if (!option.leaf) {
                _this.addChildConfigData(option.children, role);
            }
        });
    };
    AddNewRoleComponent.prototype.getDeviceType = function (value) {
        var _this = this;
        var requestJson = {};
        requestJson['findKey'] = parseInt(value);
        this._roleFeatureService.getMenus(this, "setMenusData", "secure/MenuService/findMenusByDeviceType", "post", requestJson).subscribe(function (response) {
            var res = response.json();
            _this.menuBody = JSON.parse(res.response.data);
        }, function (error) {
        }, function () {
            _this.mainMenuSorting(_this.menuBody);
            _this._roleFeatureService.menuData = _this.menuList;
        });
    };
    AddNewRoleComponent.prototype.mainMenuSorting = function (menuBody) {
        var _this = this;
        this.menuList = [];
        menuBody.forEach(function (option) {
            var parent = new addnewrole_model_1.MappedFeature();
            parent.menuLabel = option.menuName;
            parent.routePath = option.menuAction.path;
            parent.leaf = option.leaf;
            parent.menuId = option.menuId;
            if (!parent.leaf) {
                _this.addChild(option.children, parent);
            }
            _this.menuList.push(parent);
        });
    };
    AddNewRoleComponent.prototype.addChild = function (child, parent) {
        for (var i = 0; i < child.length; i++) {
            var parentChildren = new addnewrole_model_1.MappedFeature();
            parentChildren.menuLabel = child[i].menuName;
            parentChildren.leaf = child[i].leaf;
            parentChildren.routePath = child[i].menuAction;
            parentChildren.menuId = child[i].menuId;
            parent.children.push(parentChildren);
            if (!parentChildren.leaf) {
                this.addChild(child[i].children, parentChildren);
            }
        }
    };
    AddNewRoleComponent.prototype.ngOnInit = function () { };
    AddNewRoleComponent = __decorate([
        core_1.Component({
            selector: 'add-new-role',
            templateUrl: 'app/rolefeature/addnewrole/addnewrole.html'
        })
    ], AddNewRoleComponent);
    return AddNewRoleComponent;
}());
exports.AddNewRoleComponent = AddNewRoleComponent;
