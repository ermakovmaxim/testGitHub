import { Injectable } from '@angular/core';
import { RequestOptions,Headers,Http } from '@angular/http';
import { AppUrl } from '../constant';

@Injectable()
export class EmailCategoryService {

	responseData : any;
	callBackFunctionName : any;
	parentRef : any;

	constructor(private _http : Http){
	}

	onSaveClick_callEmailCategoryService_saveOperation(parentRef : any, callBackFunctionName : any, requestJson : any){

		this.parentRef = parentRef;
		this.callBackFunctionName = callBackFunctionName;

		let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions({headers : headers, method : 'post'});

		this._http.post('secure/EmailCategory/', requestJson, options).subscribe(
		response=>{
		this.responseData = response.json();
		},
		error=>{

		},
		()=>{
		this.onSaveClick_callEmailCategoryService_saveOperationComplete();
		}
		);
	}

	onSaveClick_callEmailCategoryService_saveOperationComplete(){
		this.parentRef.onSaveClick_callEmailCategoryService_saveOperationComplete(this.responseData);
	}

	onUpdateClick_callEmailCategoryService_updateOperation(parentRef : any, callBackFunctionName : any, requestJson : any){

		this.parentRef = parentRef;
		this.callBackFunctionName = callBackFunctionName;

		let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions({headers : headers, method : 'put'});

		this._http.post('secure/EmailCategory/', requestJson, options).subscribe(
		response=>{
		this.responseData = response.json();
		},
		error=>{

		},
		()=>{
		this.onUpdateClick_callEmailCategoryService_updateOperationComplete();
		}
		);
	}

	onUpdateClick_callEmailCategoryService_updateOperationComplete(){
		this.parentRef.onUpdateClick_callEmailCategoryService_updateOperationComplete(this.responseData);
	}

	onEmailCategoryGridRowClick_callEmailCategory_findByIdOperation(parentRef : any, callBackFunctionName : any, requestJson : any){

		this.parentRef = parentRef;
		this.callBackFunctionName = callBackFunctionName;

		let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions({headers : headers, method : 'post'});

		this._http.post('secure/EmailCategory/findById', requestJson, options).subscribe(
		response=>{
		this.responseData = response.json();
		},
		error=>{

		},
		()=>{
		this.onEmailCategoryGridRowClick_callEmailCategory_findByIdOperationComplete();
		}
		);
	}

	onEmailCategoryGridRowClick_callEmailCategory_findByIdOperationComplete(){
		this.parentRef.onEmailCategoryGridRowClick_callEmailCategory_findByIdOperationComplete(this.responseData);
	}

}