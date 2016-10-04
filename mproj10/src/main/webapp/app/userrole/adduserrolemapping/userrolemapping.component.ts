/**
 * Created by prasad on 23/9/16.
 */
import { Component, OnInit } from '@angular/core';
import {CheckBoxGroupConfiguration} from "../../../components/checkboxgroup/checkbox.group.input";
import {UserRoleService} from "./userrolemapping.service";
import {UserData, RoleData} from "./userrolemapping.model";
import {SimpleButtonConfiguration} from "../../../components/button/simple.button";
import {ResetButtonConfiguration} from "../../../components/button/reset.button";
import {CommonsValidatorService} from "../../../components/services/CommonsValidator";

@Component({

    templateUrl: 'app/userrole/adduserrolemapping/userrolemapping.html'
})
export class UserRoleMappingComponent implements OnInit {
    checkboxConfig;userConfig : CheckBoxGroupConfiguration;
    saveButtonConfig : SimpleButtonConfiguration;
    checkBoxData :any[]= [];
    roleListArray : any[] =[];
    userDataArray : any[] =[];
    selectedRole : any[]=[];
    selectedUser : any[]=[];
    jsonData : any[] = [];
    roleData : RoleData;
    data : Object;
    ResetConfig : ResetButtonConfiguration;
    check : boolean;

    constructor(private _userRoleService : UserRoleService,private _commonsValidatorService : CommonsValidatorService) {
        this.roleData = new  RoleData();
        this.ResetConfig = new ResetButtonConfiguration(false,false);
        this.checkboxConfig = new CheckBoxGroupConfiguration('roleName','roleId',false,false,false,'Select Role ');
        this.userConfig = new CheckBoxGroupConfiguration('userName','userId',false,false,false,'Select User ');
        this.saveButtonConfig = new SimpleButtonConfiguration(false,false);
        this.getUserList();
    }
    ngOnInit() { }
    getUserList(){
        let requestJson ={};
        this._userRoleService.findListOfUser(this,"getUserData","secure/Login/FindUnMappedUser","post",requestJson);

    }
    getUserData (data: any) {
        data.response.data.forEach((option)=> {
            let userObject = new UserData();
            userObject.userId = option.user.userId;
            let name;
            if (option.coreContacts.middleName != '') {
                name = option.coreContacts.firstName + ' ' + option.coreContacts.middleName + ' ' + option.coreContacts.lastName;
            }
            else {
                name = option.coreContacts.firstName + ' ' + option.coreContacts.lastName;
            }
            userObject.userName = name;

            this.userDataArray.push(userObject);

            this.data = {
                response: {
                    data: this.userDataArray
                }
            };

        });
    }
    selectUserData(data : any){
        this.selectedUser = [];
        data.forEach((option)=>{
            this.selectedUser.push(option.userId);

        })
    }
    selectCountryData(data : any){
        this.selectedRole = [];
        data.forEach((option)=>{
           this.selectedRole.push(option.roleId);
        })
    }
    saveMappingData(){
        this.jsonData = [];
        this.selectedUser.forEach((useroption)=>{
            this.selectedRole.forEach((roleoption)=>{
                this.jsonData.push({'userId':useroption,'roleId':roleoption});
            })
        })
        console.log(this.jsonData);

       /* let componentArray = [ this.checkboxConfig,this.userConfig ];

        if(this._commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
            return;
        }
        else {*/

            this._userRoleService.saveRoleMappedData(this, "getSaveMappedRoleResponse", "secure/UserRoleBridge", "post", this.jsonData);

    }
    getSaveMappedRoleResponse(data : any){
        toastr.success(data.response.message);
        console.log('save');
        document.getElementById("roleMapping").reset();
    }

    resetForm(){
        document.getElementById("roleMapping").reset();
    }

}








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
