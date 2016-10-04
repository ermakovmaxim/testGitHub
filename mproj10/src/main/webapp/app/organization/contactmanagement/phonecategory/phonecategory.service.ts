import { Injectable } from '@angular/core';
import { RequestOptions,Headers,Http } from '@angular/http';
import { AppUrl } from '../constant';

@Injectable()
export class PhoneCategoryService {

	responseData : any;
	callBackFunctionName : any;
	parentRef : any;

	constructor(private _http : Http){
	}

	onSaveClick_callPhoneCategoryService_saveOperation(parentRef : any, callBackFunctionName : any, requestJson : any){

		this.parentRef = parentRef;
		this.callBackFunctionName = callBackFunctionName;

		let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions({headers : headers, method : 'post'});

		this._http.post('secure/PhoneCategory/', requestJson, options).subscribe(
		response=>{
		this.responseData = response.json();
		},
		error=>{

		},
		()=>{
		this.onSaveClick_callPhoneCategoryService_saveOperationComplete();
		}
		);
	}

	onSaveClick_callPhoneCategoryService_saveOperationComplete(){
		this.parentRef.onSaveClick_callPhoneCategoryService_saveOperationComplete(this.responseData);
	}

	onUpdateClick_callPhoneCategoryService_updateOperation(parentRef : any, callBackFunctionName : any, requestJson : any){

		this.parentRef = parentRef;
		this.callBackFunctionName = callBackFunctionName;

		let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions({headers : headers, method : 'put'});

		this._http.post('secure/PhoneCategory/', requestJson, options).subscribe(
		response=>{
		this.responseData = response.json();
		},
		error=>{

		},
		()=>{
		this.onUpdateClick_callPhoneCategoryService_updateOperationComplete();
		}
		);
	}

	onUpdateClick_callPhoneCategoryService_updateOperationComplete(){
		this.parentRef.onUpdateClick_callPhoneCategoryService_updateOperationComplete(this.responseData);
	}

	onPhoneCategoryGridRowClick_callPhoneCategory_findByIdOperation(parentRef : any, callBackFunctionName : any, requestJson : any){

		this.parentRef = parentRef;
		this.callBackFunctionName = callBackFunctionName;

		let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions({headers : headers, method : 'post'});

		this._http.post('secure/PhoneCategory/findById', requestJson, options).subscribe(
		response=>{
		this.responseData = response.json();
		},
		error=>{

		},
		()=>{
		this.onPhoneCategoryGridRowClick_callPhoneCategory_findByIdOperationComplete();
		}
		);
	}

	onPhoneCategoryGridRowClick_callPhoneCategory_findByIdOperationComplete(){
		this.parentRef.onPhoneCategoryGridRowClick_callPhoneCategory_findByIdOperationComplete(this.responseData);
	}

}