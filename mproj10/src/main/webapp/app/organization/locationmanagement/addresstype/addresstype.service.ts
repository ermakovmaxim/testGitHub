import { Injectable } from '@angular/core';
import { RequestOptions,Headers,Http } from '@angular/http';
import { AppUrl } from '../constant';

@Injectable()
export class AddressTypeService {

	responseData : any;
	callBackFunctionName : any;
	parentRef : any;

	constructor(private _http : Http){
	}

	onSaveClick_callAddressTypeService_saveOperation(parentRef : any, callBackFunctionName : any, requestJson : any){

		this.parentRef = parentRef;
		this.callBackFunctionName = callBackFunctionName;

		let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions({headers : headers, method : 'post'});

		this._http.post('secure/AddressType/', requestJson, options).subscribe(
		response=>{
		this.responseData = response.json();
		},
		error=>{

		},
		()=>{
		this.onSaveClick_callAddressTypeService_saveOperationComplete();
		}
		);
	}

	onSaveClick_callAddressTypeService_saveOperationComplete(){
		this.parentRef.onSaveClick_callAddressTypeService_saveOperationComplete(this.responseData);
	}

	onUpdateClick_callAddressTypeService_updateOperation(parentRef : any, callBackFunctionName : any, requestJson : any){

		this.parentRef = parentRef;
		this.callBackFunctionName = callBackFunctionName;

		let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions({headers : headers, method : 'put'});

		this._http.post('secure/AddressType/', requestJson, options).subscribe(
		response=>{
		this.responseData = response.json();
		},
		error=>{

		},
		()=>{
		this.onUpdateClick_callAddressTypeService_updateOperationComplete();
		}
		);
	}

	onUpdateClick_callAddressTypeService_updateOperationComplete(){
		this.parentRef.onUpdateClick_callAddressTypeService_updateOperationComplete(this.responseData);
	}

	onAddressTypeGridRowClick_callAddressType_findByIdOperation(parentRef : any, callBackFunctionName : any, requestJson : any){

		this.parentRef = parentRef;
		this.callBackFunctionName = callBackFunctionName;

		let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions({headers : headers, method : 'post'});

		this._http.post('secure/AddressType/findById', requestJson, options).subscribe(
		response=>{
		this.responseData = response.json();
		},
		error=>{

		},
		()=>{
		this.onAddressTypeGridRowClick_callAddressType_findByIdOperationComplete();
		}
		);
	}

	onAddressTypeGridRowClick_callAddressType_findByIdOperationComplete(){
		this.parentRef.onAddressTypeGridRowClick_callAddressType_findByIdOperationComplete(this.responseData);
	}

}