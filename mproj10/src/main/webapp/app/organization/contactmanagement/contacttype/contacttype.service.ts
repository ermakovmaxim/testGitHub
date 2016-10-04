import { Injectable } from '@angular/core';
import { RequestOptions,Headers,Http } from '@angular/http';
import { AppUrl } from '../constant';

@Injectable()
export class ContactTypeService {

	responseData : any;
	callBackFunctionName : any;
	parentRef : any;

	constructor(private _http : Http){
	}

	onSaveClick_callContactTypeService_saveOperation(parentRef : any, callBackFunctionName : any, requestJson : any){

		this.parentRef = parentRef;
		this.callBackFunctionName = callBackFunctionName;

		let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions({headers : headers, method : 'post'});

		this._http.post('secure/ContactType/', requestJson, options).subscribe(
		response=>{
		this.responseData = response.json();
		},
		error=>{

		},
		()=>{
		this.onSaveClick_callContactTypeService_saveOperationComplete();
		}
		);
	}

	onSaveClick_callContactTypeService_saveOperationComplete(){
		this.parentRef.onSaveClick_callContactTypeService_saveOperationComplete(this.responseData);
	}

	onUpdateClick_callContactTypeService_updateOperation(parentRef : any, callBackFunctionName : any, requestJson : any){

		this.parentRef = parentRef;
		this.callBackFunctionName = callBackFunctionName;

		let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions({headers : headers, method : 'put'});

		this._http.post('secure/ContactType/', requestJson, options).subscribe(
		response=>{
		this.responseData = response.json();
		},
		error=>{

		},
		()=>{
		this.onUpdateClick_callContactTypeService_updateOperationComplete();
		}
		);
	}

	onUpdateClick_callContactTypeService_updateOperationComplete(){
		this.parentRef.onUpdateClick_callContactTypeService_updateOperationComplete(this.responseData);
	}

	onContactTypeGridRowClick_callContactType_findByIdOperation(parentRef : any, callBackFunctionName : any, requestJson : any){

		this.parentRef = parentRef;
		this.callBackFunctionName = callBackFunctionName;

		let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions({headers : headers, method : 'post'});

		this._http.post('secure/ContactType/findById', requestJson, options).subscribe(
		response=>{
		this.responseData = response.json();
		},
		error=>{

		},
		()=>{
		this.onContactTypeGridRowClick_callContactType_findByIdOperationComplete();
		}
		);
	}

	onContactTypeGridRowClick_callContactType_findByIdOperationComplete(){
		this.parentRef.onContactTypeGridRowClick_callContactType_findByIdOperationComplete(this.responseData);
	}

}