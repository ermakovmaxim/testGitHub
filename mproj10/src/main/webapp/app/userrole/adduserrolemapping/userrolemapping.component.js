"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by prasad on 23/9/16.
 */
var core_1 = require('@angular/core');
var checkbox_group_input_1 = require("../../../components/checkboxgroup/checkbox.group.input");
var userrolemapping_model_1 = require("./userrolemapping.model");
var simple_button_1 = require("../../../components/button/simple.button");
var reset_button_1 = require("../../../components/button/reset.button");
var UserRoleMappingComponent = (function () {
    function UserRoleMappingComponent(_userRoleService, _commonsValidatorService) {
        this._userRoleService = _userRoleService;
        this._commonsValidatorService = _commonsValidatorService;
        this.checkBoxData = [];
        this.roleListArray = [];
        this.userDataArray = [];
        this.selectedRole = [];
        this.selectedUser = [];
        this.jsonData = [];
        this.roleData = new userrolemapping_model_1.RoleData();
        this.ResetConfig = new reset_button_1.ResetButtonConfiguration(false, false);
        this.checkboxConfig = new checkbox_group_input_1.CheckBoxGroupConfiguration('roleName', 'roleId', false, false, false, 'Select Role ');
        this.userConfig = new checkbox_group_input_1.CheckBoxGroupConfiguration('userName', 'userId', false, false, false, 'Select User ');
        this.saveButtonConfig = new simple_button_1.SimpleButtonConfiguration(false, false);
        this.getUserList();
    }
    UserRoleMappingComponent.prototype.ngOnInit = function () { };
    UserRoleMappingComponent.prototype.getUserList = function () {
        var requestJson = {};
        this._userRoleService.findListOfUser(this, "getUserData", "secure/Login/FindUnMappedUser", "post", requestJson);
    };
    UserRoleMappingComponent.prototype.getUserData = function (data) {
        var _this = this;
        data.response.data.forEach(function (option) {
            var userObject = new userrolemapping_model_1.UserData();
            userObject.userId = option.user.userId;
            var name;
            if (option.coreContacts.middleName != '') {
                name = option.coreContacts.firstName + ' ' + option.coreContacts.middleName + ' ' + option.coreContacts.lastName;
            }
            else {
                name = option.coreContacts.firstName + ' ' + option.coreContacts.lastName;
            }
            userObject.userName = name;
            _this.userDataArray.push(userObject);
            _this.data = {
                response: {
                    data: _this.userDataArray
                }
            };
        });
    };
    UserRoleMappingComponent.prototype.selectUserData = function (data) {
        var _this = this;
        this.selectedUser = [];
        data.forEach(function (option) {
            _this.selectedUser.push(option.userId);
        });
    };
    UserRoleMappingComponent.prototype.selectCountryData = function (data) {
        var _this = this;
        this.selectedRole = [];
        data.forEach(function (option) {
            _this.selectedRole.push(option.roleId);
        });
    };
    UserRoleMappingComponent.prototype.saveMappingData = function () {
        var _this = this;
        this.jsonData = [];
        this.selectedUser.forEach(function (useroption) {
            _this.selectedRole.forEach(function (roleoption) {
                _this.jsonData.push({ 'userId': useroption, 'roleId': roleoption });
            });
        });
        console.log(this.jsonData);
        /* let componentArray = [ this.checkboxConfig,this.userConfig ];
 
         if(this._commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
             return;
         }
         else {*/
        this._userRoleService.saveRoleMappedData(this, "getSaveMappedRoleResponse", "secure/UserRoleBridge", "post", this.jsonData);
    };
    UserRoleMappingComponent.prototype.getSaveMappedRoleResponse = function (data) {
        toastr.success(data.response.message);
        console.log('save');
        document.getElementById("roleMapping").reset();
    };
    UserRoleMappingComponent.prototype.resetForm = function () {
        document.getElementById("roleMapping").reset();
    };
    UserRoleMappingComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/userrole/adduserrolemapping/userrolemapping.html'
        })
    ], UserRoleMappingComponent);
    return UserRoleMappingComponent;
}());
exports.UserRoleMappingComponent = UserRoleMappingComponent;
/*










 getRoleList(){
 let requestJson ={};
 this._userRoleService.findListOfRole(this,"setRoleListData","secure/Roles/findAll","get",requestJson);

 }
 setRoleListData (data: any){
 data.response.data.forEach((option)=> {
 let role = new RoleData();
 role.roleId = option.roleId;
 role.roleName = option.roleName;
 this.roleListArray.push(role);


 });
 }

 selectRoles(){
 this.selectedRole =[];
 this.roleListArray.forEach((option)=>{
 if(option.isRoleSelected){
 this.selectedRole.push(option);
 //this.selectedData.push(option);
 }

 })
 }

 RemoveRoles(){

 let removeAaray = [];
 this.selectedRole.forEach((option)=> {
 if(!option.isRemoveRole){
 removeAaray.push(option);
 }
 else {
 option.isRemoveRole = false;
 }
 })
 this.selectedRole =[];
 this.selectedRole = removeAaray;

 }





 selectUsers(){
 this.selectedUser =[];
 this.userDataArray.forEach((option)=>{
 if(option.isUserSelected){
 this.selectedUser.push(option);
 // this.selectedData.push(option);
 }

 })
 }


removeUsers(){
    let userAaray = [];
    this.selectedUser.forEach((option)=> {
        if(!option.isRemoveUser){
            userAaray.push(option);
        }
        else {
            option.isRemoveUser = false;
        }
    })
    this.selectedUser =[];
    this.selectedUser = userAaray;

}*/
