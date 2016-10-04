import { Injectable } from '@angular/core';
import { RequestOptions,Headers,Http } from '@angular/http';
import { AppUrl } from '../constant';

@Injectable()
export class LanguageService {

	responseData : any;
	callBackFunctionName : any;
	parentRef : any;

	constructor(private _http : Http){
	}

	onSaveClick_callLanguageService_saveOperation(parentRef : any, callBackFunctionName : any, requestJson : any){

		this.parentRef = parentRef;
		this.callBackFunctionName = callBackFunctionName;

		let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions({headers : headers, method : 'post'});

		this._http.post('secure/Language/', requestJson, options).subscribe(
		response=>{
		this.responseData = response.json();
		},
		error=>{

		},
		()=>{
		this.onSaveClick_callLanguageService_saveOperationComplete();
		}
		);
	}

	onSaveClick_callLanguageService_saveOperationComplete(){
		this.parentRef.onSaveClick_callLanguageService_saveOperationComplete(this.responseData);
	}

	onUpdateClick_callLanguageService_updateOperation(parentRef : any, callBackFunctionName : any, requestJson : any){

		this.parentRef = parentRef;
		this.callBackFunctionName = callBackFunctionName;

		let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions({headers : headers, method : 'put'});

		this._http.post('secure/Language/', requestJson, options).subscribe(
		response=>{
		this.responseData = response.json();
		},
		error=>{

		},
		()=>{
		this.onUpdateClick_callLanguageService_updateOperationComplete();
		}
		);
	}

	onUpdateClick_callLanguageService_updateOperationComplete(){
		this.parentRef.onUpdateClick_callLanguageService_updateOperationComplete(this.responseData);
	}

	onLanguageGridRowClick_callLanguage_findByIdOperation(parentRef : any, callBackFunctionName : any, requestJson : any){

		this.parentRef = parentRef;
		this.callBackFunctionName = callBackFunctionName;

		let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions({headers : headers, method : 'post'});

		this._http.post('secure/Language/findById', requestJson, options).subscribe(
		response=>{
		this.responseData = response.json();
		},
		error=>{

		},
		()=>{
		this.onLanguageGridRowClick_callLanguage_findByIdOperationComplete();
		}
		);
	}

	onLanguageGridRowClick_callLanguage_findByIdOperationComplete(){
		this.parentRef.onLanguageGridRowClick_callLanguage_findByIdOperationComplete(this.responseData);
	}

}