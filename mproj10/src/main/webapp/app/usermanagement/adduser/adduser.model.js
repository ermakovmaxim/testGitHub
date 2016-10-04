"use strict";
var CoreContacts = (function () {
    function CoreContacts() {
        this.address = [];
        this.timezone = { timeZoneId: '' };
    }
    return CoreContacts;
}());
exports.CoreContacts = CoreContacts;
var User = (function () {
    function User() {
        this.allowMultipleLogin = 0;
        this.changePasswordNextLogin = 1;
        this.userAccessCode = 55005;
        this.systemInfo = { activeStatus: 1 };
    }
    return User;
}());
exports.User = User;
/*
export class DropdownData{
    _valueField : string;
    _displayField : string;


    constructor(){
        this.valueField  = '';
        this.displayField ='';
    }

    get valueField():string {
        return this._valueField;
    }
    set valueField(valueField:string) {
        this._valueField = valueField;
    }
    get displayField():string {
        return this._displayField;
    }
    set displayField(displayField:string) {
        this._displayField = displayField;
    }

}
*/
var AddressDetails = (function () {
    function AddressDetails() {
        this.addressTypeId = '';
        this.addressLabel = '';
        this.address1 = '';
        this.address2 = '';
        this.address3 = '';
        this.latitude = null;
        this.longitude = null;
        this.zipcode = null;
        this.countryId = '';
        this.stateId = '';
        this.cityId = '';
    }
    return AddressDetails;
}());
exports.AddressDetails = AddressDetails;
var GridData = (function () {
    function GridData() {
    }
    return GridData;
}());
exports.GridData = GridData;
