import { Injectable } from '@angular/core';
import {Http, Headers,RequestOptions} from "@angular/http";
import {AppUrl} from "../../constant";


@Injectable()
export class RoleFeatureServices {

    mainScreenMenuUrl : string;
    responseData:any;
    callBackFunctionName:any;
    parentRef:any;
    menuList : any;
    menuData : any;

    constructor(private _http : Http) {

        this.mainScreenMenuUrl = AppUrl+'secure/RoleFeatureService/findMainScreenMenus';
    }

    /*getMainScreenMenu(){

        return this._http.post(this.mainScreenMenuUrl,null,{ jsonData : {}, headers : new Headers({ 'Content-Type': 'application/json;charset=UTF-8' })  })

    }*/

    findListOfRole(parentRef : any, callBackFunctionName: any, serviceUrl : string, methodType: string, requestJson : any){

        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;

        let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'  });
        let options = new RequestOptions({headers : headers,method : methodType});

        if(methodType == "post"){

            this._http.post(serviceUrl,requestJson,options).subscribe(
                response=>{
                    this.responseData = response.json();
                },
                error=>{

                },
                ()=>{
                    this.setData();
                }

            );

        }else if(methodType == "get"){
            this._http.get(serviceUrl,options).subscribe(
                response=>{
                    this.responseData = response.json();
                },
                error=>{

                },
                ()=>{
                    this.setData();
                }

            );
        }
    }

    setData(){
        this.parentRef.setRoleListData(this.responseData);
    }



    getMenus(parentRef : any, callBackFunctionName: any, serviceUrl : string, methodType: string, requestJson : any){

        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;


        let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'  });
        let options = new RequestOptions({headers : headers,method : methodType});

        if(methodType == "post"){

           return this._http.post(serviceUrl,requestJson,options)

        }else if(methodType == "get"){
            this._http.get(serviceUrl,options).subscribe(
                response=>{
                    this.responseData = response.json();
                },
                error=>{

                },
                ()=>{

                }

            );
        }
    }



    saveUser(parentRef : any, callBackFunctionName: any, serviceUrl : string, methodType: string, requestJson : any){
debugger;
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;

        let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'  });
        let options = new RequestOptions({headers : headers,method : methodType});

        if(methodType == "post"){

            this._http.post(serviceUrl,requestJson,options).subscribe(
                response=>{
                    this.responseData = response.json();
                },
                error=>{

                },
                ()=>{
                    this.saveData();
                }

            );

        }else if(methodType == "get"){
            this._http.get(serviceUrl,options).subscribe(
                response=>{
                    this.responseData = response.json();
                },
                error=>{

                },
                ()=>{
                    this.saveData();
                }

            );
        }
    }

    saveData(){
        this.parentRef.SaveResponseData(this.responseData);
    }

}