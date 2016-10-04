/**
 * Created by prasad on 23/9/16.
 */



import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";


@Injectable()
export class UserRoleService {
    responseData:any;
    callBackFunctionName:any;
    parentRef:any;

    constructor(private _http : Http) {
    }

    findListOfUser(parentRef : any, callBackFunctionName: any, serviceUrl : string, methodType: string, requestJson : any){

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
                    this.setUserData();
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
                    this.setUserData();
                }

            );
        }
    }


    setUserData(){
        this.parentRef.getUserData(this.responseData);
    }


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



    saveRoleMappedData(parentRef : any, callBackFunctionName: any, serviceUrl : string, methodType: string, requestJson : any){
        this.parentRef = parentRef;
        this.callBackFunctionName = callBackFunctionName;

        // let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'  });
        let headers = new Headers({ isArray : true });
        let options = new RequestOptions({headers : headers,method : methodType});

        if(methodType == "post"){
            this._http.post(serviceUrl,requestJson,options).subscribe(
                response=>{
                    this.responseData = response.json();

                },
                error=>{

                },
                ()=>{
                    this.getSaveResponse();
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
                    this.getSaveResponse();
                }

            );
        }
    }


    getSaveResponse(){
        this.parentRef.getSaveMappedRoleResponse(this.responseData);

    }



}


