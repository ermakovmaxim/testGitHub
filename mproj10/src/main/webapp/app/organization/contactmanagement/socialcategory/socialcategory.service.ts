import { Injectable } from '@angular/core';
import { RequestOptions,Headers,Http } from '@angular/http';
import { AppUrl } from '../constant';

@Injectable()
export class SocialCategoryService {

	responseData : any;
	callBackFunctionName : any;
	parentRef : any;

	constructor(private _http : Http){
	}

	onSaveClick_callSocialCategoryService_saveOperation(parentRef : any, callBackFunctionName : any, requestJson : any){

		this.parentRef = parentRef;
		this.callBackFunctionName = callBackFunctionName;

		let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions({headers : headers, method : 'post'});

		this._http.post('secure/SocialCategory/', requestJson, options).subscribe(
		response=>{
		this.responseData = response.json();
		},
		error=>{

		},
		()=>{
		this.onSaveClick_callSocialCategoryService_saveOperationComplete();
		}
		);
	}

	onSaveClick_callSocialCategoryService_saveOperationComplete(){
		this.parentRef.onSaveClick_callSocialCategoryService_saveOperationComplete(this.responseData);
	}

	onUpdateClick_callSocialCategoryService_updateOperation(parentRef : any, callBackFunctionName : any, requestJson : any){

		this.parentRef = parentRef;
		this.callBackFunctionName = callBackFunctionName;

		let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions({headers : headers, method : 'put'});

		this._http.post('secure/SocialCategory/', requestJson, options).subscribe(
		response=>{
		this.responseData = response.json();
		},
		error=>{

		},
		()=>{
		this.onUpdateClick_callSocialCategoryService_updateOperationComplete();
		}
		);
	}

	onUpdateClick_callSocialCategoryService_updateOperationComplete(){
		this.parentRef.onUpdateClick_callSocialCategoryService_updateOperationComplete(this.responseData);
	}

	onSocialCategoryGridRowClick_callSocialCategory_findByIdOperation(parentRef : any, callBackFunctionName : any, requestJson : any){

		this.parentRef = parentRef;
		this.callBackFunctionName = callBackFunctionName;

		let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions({headers : headers, method : 'post'});

		this._http.post('secure/SocialCategory/findById', requestJson, options).subscribe(
		response=>{
		this.responseData = response.json();
		},
		error=>{

		},
		()=>{
		this.onSocialCategoryGridRowClick_callSocialCategory_findByIdOperationComplete();
		}
		);
	}

	onSocialCategoryGridRowClick_callSocialCategory_findByIdOperationComplete(){
		this.parentRef.onSocialCategoryGridRowClick_callSocialCategory_findByIdOperationComplete(this.responseData);
	}

}