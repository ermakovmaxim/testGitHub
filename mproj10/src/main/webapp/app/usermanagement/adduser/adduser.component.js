"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var adduser_model_1 = require("./adduser.model");
var text_input_1 = require("../../../components/textinput/text.input");
var email_input_1 = require("../../../components/emailinput/email.input");
var date_input_1 = require("../../../components/dateinput/date.input");
var number_input_1 = require("../../../components/numberinput/number.input");
var radio_group_input_1 = require("../../../components/radioinput/radio.group.input");
var datagrid_1 = require("../../../components/datagrid/datagrid");
var select_input_1 = require("../../../components/selectinput/select.input");
var simple_button_1 = require("../../../components/button/simple.button");
var reset_button_1 = require("../../../components/button/reset.button");
var AddUserComponent = (function () {
    function AddUserComponent(_AddUserService, _commonsValidatorService) {
        this._AddUserService = _AddUserService;
        this._commonsValidatorService = _commonsValidatorService;
        this.checkBoxData = [];
        this.userData = new adduser_model_1.CoreContacts();
        this.radioArray;
        this.radioObject;
        this.displatGridDataArray = [];
        this.cityIddData;
        this.stateIdddata;
        this.countryIdddata;
        this.addressTypeddata;
        this.timezoneddata;
        this.languageData;
        this.titledata;
        this.nativeTitledata = [];
        this.address = new adduser_model_1.AddressDetails();
        this.gridData = new adduser_model_1.GridData();
        this.user = new adduser_model_1.User();
        this.directiveConfigClassCall();
    }
    AddUserComponent.prototype.ngOnInit = function () { };
    AddUserComponent.prototype.directiveConfigClassCall = function () {
        this.addAddressConfig = new simple_button_1.SimpleButtonConfiguration(false, false);
        this.SaveConfig = new simple_button_1.SimpleButtonConfiguration(false, false);
        this.ResetConfig = new reset_button_1.ResetButtonConfiguration(false, false);
        this.countryConfig = new select_input_1.SelectInputConfiguration(false, false, true, 'Please select country', 'countryName', 'countryId');
        this.stateIdsConfig = new select_input_1.SelectInputConfiguration(false, false, true, 'Please select state', "stateName", "stateId");
        this.cityIdsConfig = new select_input_1.SelectInputConfiguration(false, false, true, 'Please select city', "cityName", "cityId");
        this.addressTypeConfig = new select_input_1.SelectInputConfiguration(false, false, true, 'Please select Address Type', "addressType", "addressTypeId");
        this.timezoneConfig = new select_input_1.SelectInputConfiguration(false, false, true, 'Please select Timezone', "timeZoneLabel", "timeZoneId");
        this.languageConfig = new select_input_1.SelectInputConfiguration(false, false, true, 'Please select language', "language", "languageId");
        this.titleConfig = new select_input_1.SelectInputConfiguration(false, false, true, 'Please select title', "titles", "titleId");
        this.nativeTitleConfig = new select_input_1.SelectInputConfiguration(false, false, false, 'Please select native title', "titles", "titleId");
        this.radioGroupConfig = new radio_group_input_1.RadioGroupInputConfiguration('gender', 'genderId', false, false, true, 'Please select gender ');
        this.firstNameConfig = new text_input_1.TextInputConfiguration(false, false, false, true, '', '', 'Invalid First Name');
        this.nativeFirstNameConfig = new text_input_1.TextInputConfiguration(false, false, false, false, '', '', 'Invalid Native First Name');
        this.nativeLastNameConfig = new text_input_1.TextInputConfiguration(false, false, false, false, '', '', 'Invalid Native Last Name');
        this.nativeMiddleNameConfig = new text_input_1.TextInputConfiguration(false, false, false, false, '', '', 'Invalid Native Middle Name');
        this.lastNameConfig = new text_input_1.TextInputConfiguration(false, false, false, true, '', '', 'Invalid Last Name');
        this.middleNameConfig = new text_input_1.TextInputConfiguration(false, false, false, false, '', '', 'Invalid Middle Name');
        this.emailConfig = new email_input_1.EmailInputConfiguration(false, false, false, true, '', '', 'Enter Email address');
        this.dateConfig = new date_input_1.DateInputConfiguration(false, false, false, false, 'Date Required');
        this.phoneNoConfig = new number_input_1.NumberInputConfiguration(false, false, false, true, '10', '10', 'Invalid Phone NO ');
        this.latitudeConfig = new number_input_1.NumberInputConfiguration(false, false, false, false, '', '', 'Invalid latitude ');
        this.longitudeConfig = new number_input_1.NumberInputConfiguration(false, false, false, false, '', '', 'Invalid longitude ');
        this.postalCodeConfig = new number_input_1.NumberInputConfiguration(false, false, false, true, '', '', 'Invalid postal Code ');
        this.sessionConfig = new number_input_1.NumberInputConfiguration(false, false, false, true, '120', '', 'Invalid session Timeout ');
        this.addressLabelConfig = new text_input_1.TextInputConfiguration(false, false, false, false, '', '', 'Invalid Address Label');
        this.address1Config = new text_input_1.TextInputConfiguration(false, false, false, true, '', '', 'Invalid Address 1');
        this.address2Config = new text_input_1.TextInputConfiguration(false, false, false, false, '', '', 'Invalid Address 2');
        this.address3Config = new text_input_1.TextInputConfiguration(false, false, false, false, '', '', 'Invalid Address 3');
        this.ageConfig = new number_input_1.NumberInputConfiguration(false, false, true, false, '2', '3', 'Invalid age ');
        var columns = [];
        columns.push({ text: 'Address Type', dataIndex: 'addressType', hidden: false });
        columns.push({ text: 'Address1', dataIndex: 'address1', hidden: false });
        columns.push({ text: 'Postal Code', dataIndex: 'postalCode', hidden: false });
        columns.push({ text: 'Country', dataIndex: 'country', hidden: false });
        columns.push({ text: 'State', dataIndex: 'state', hidden: false });
        columns.push({ text: 'City', dataIndex: 'city', hidden: false });
        columns.push({ text: 'Action', dataIndex: '', hidden: false });
        this.dataGridConfig = new datagrid_1.DataGridConfiguration(columns);
    };
    AddUserComponent.prototype.addAddress = function () {
        var addressDetails = new adduser_model_1.AddressDetails();
        this.displayGridData();
        addressDetails = JSON.parse(JSON.stringify(this.address));
        this.userData.address.push(addressDetails);
        toastr.success('Address Added Successfully');
        document.getElementById("addressForm").reset();
    };
    AddUserComponent.prototype.displayGridData = function () {
        this.gridData.postalCode = this.address.zipcode;
        this.gridData.address1 = this.address.address1;
        var gridData = new adduser_model_1.GridData();
        gridData = JSON.parse(JSON.stringify(this.gridData));
        this.displatGridDataArray.push(gridData);
        this.displatGridDataObject = ({ 'response': { 'data': this.displatGridDataArray } });
    };
    AddUserComponent.prototype.resetForm = function () {
        document.getElementById("userForm").reset();
    };
    AddUserComponent.prototype.getDate = function (dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age > 18 || age == 18) {
            this.userData.age = age;
        }
        else {
            this.userData.dateofbirth = '';
            toastr.error('Age Should be greater than or equal to 18');
        }
    };
    AddUserComponent.prototype.selectAddressType = function (data) {
        this.gridData.addressType = data.data.addressType;
    };
    AddUserComponent.prototype.radioSelect = function (data) {
        this.userData.genderId = data.target.value;
    };
    AddUserComponent.prototype.selectCountryData = function (data) {
        this.gridData.country = data.data.countryName;
        var requestJson = {};
        requestJson['findKey'] = data.value;
        this._AddUserService.findByCountryIdData(this, "setfindByCountryIdData", "secure/State/findByCountryId", "post", requestJson);
    };
    AddUserComponent.prototype.setfindByCountryIdData = function (data) {
        this.stateIdddata = data;
    };
    AddUserComponent.prototype.selectStateData = function (data) {
        this.gridData.state = data.data.stateName;
        if (data != null) {
            //this.address.stateId =data.value;
            debugger;
            var requestJson = {};
            requestJson['findKey'] = data.value;
            this._AddUserService.findByStateIdData(this, "setfindByStateIdData", "secure/City/findByStateId", "post", requestJson);
        }
    };
    AddUserComponent.prototype.setfindByStateIdData = function (data) {
        this.cityIddData = data;
    };
    AddUserComponent.prototype.selectCityData = function (data) {
        this.gridData.city = data.data.cityName;
    };
    AddUserComponent.prototype.saveUserData = function () {
        var requestJson = {};
        requestJson['findKey'] = this.userData.emailId;
        var componentArray = [this.phoneNoConfig, this.postalCodeConfig, this.sessionConfig,
            this.countryConfig, this.stateIdsConfig, this.cityIdsConfig, this.addressTypeConfig, this.timezoneConfig, this.languageConfig, this.titleConfig, this.nativeTitleConfig,
            this.firstNameConfig, this.nativeFirstNameConfig, this.nativeLastNameConfig, this.lastNameConfig, this.addressLabelConfig, this.address1Config];
        if (this._commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
            return;
        }
        else {
            this._AddUserService.checkValidityOfLoginId(this, "checkValidityLoginData", "secure/PasswordGenerator/checkValidityOfLoginId", "post", requestJson);
        }
    };
    AddUserComponent.prototype.checkValidityLoginData = function (data) {
        toastr.success(data.response.message);
        if (data.response.success != false) {
            var requestJson = {};
            requestJson['coreContacts'] = this.userData;
            requestJson['loginId'] = this.userData.emailId;
            requestJson['user'] = this.user;
            this._AddUserService.LoginData(this, "loginDataResponse", "secure/Login", "post", requestJson);
        }
    };
    AddUserComponent.prototype.loginDataResponse = function (data) {
        toastr.success(data.response.message);
        var requestJson = {};
        requestJson['findKey'] = data.response.data.loginPk;
        this._AddUserService.passworsGenerator(this, "getpassworsGeneratorDataResponse", "secure/PasswordGenerator/generatePassword", "post", requestJson);
    };
    AddUserComponent.prototype.getpassworsGeneratorDataResponse = function (data) {
        toastr.success(data.response.message);
        var requestJson = {};
        this._AddUserService.loginFindAll(this, "loginResponse", "secure/Login/findAll", "get", requestJson);
    };
    AddUserComponent.prototype.loginResponse = function (data) {
        toastr.success('User Added Successfully');
        document.getElementById("userForm").reset();
    };
    AddUserComponent = __decorate([
        core_1.Component({
            selector: 'add-user',
            templateUrl: 'app/usermanagement/adduser/adduser.html'
        })
    ], AddUserComponent);
    return AddUserComponent;
}());
exports.AddUserComponent = AddUserComponent;
