import { Injectable } from '@angular/core';
import { RequestOptions,Headers,Http } from '@angular/http';
import { AppUrl } from '../constant';

@Injectable()
export class CountryService {

	responseData : any;
	callBackFunctionName : any;
	parentRef : any;

	constructor(private _http : Http){
	}

	onSaveClick_callCountryService_saveOperation(parentRef : any, callBackFunctionName : any, requestJson : any){

		this.parentRef = parentRef;
		this.callBackFunctionName = callBackFunctionName;

		let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions({headers : headers, method : 'post'});

		this._http.post('secure/Country/', requestJson, options).subscribe(
		response=>{
		this.responseData = response.json();
		},
		error=>{

		},
		()=>{
		this.onSaveClick_callCountryService_saveOperationComplete();
		}
		);
	}

	onSaveClick_callCountryService_saveOperationComplete(){
		this.parentRef.onSaveClick_callCountryService_saveOperationComplete(this.responseData);
	}

	onUpdateClick_callCountryService_updateOperation(parentRef : any, callBackFunctionName : any, requestJson : any){

		this.parentRef = parentRef;
		this.callBackFunctionName = callBackFunctionName;

		let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions({headers : headers, method : 'put'});

		this._http.post('secure/Country/', requestJson, options).subscribe(
		response=>{
		this.responseData = response.json();
		},
		error=>{

		},
		()=>{
		this.onUpdateClick_callCountryService_updateOperationComplete();
		}
		);
	}

	onUpdateClick_callCountryService_updateOperationComplete(){
		this.parentRef.onUpdateClick_callCountryService_updateOperationComplete(this.responseData);
	}

	onCountryGridRowClick_callCountry_findByIdOperation(parentRef : any, callBackFunctionName : any, requestJson : any){

		this.parentRef = parentRef;
		this.callBackFunctionName = callBackFunctionName;

		let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions({headers : headers, method : 'post'});

		this._http.post('secure/Country/findById', requestJson, options).subscribe(
		response=>{
		this.responseData = response.json();
		},
		error=>{

		},
		()=>{
		this.onCountryGridRowClick_callCountry_findByIdOperationComplete();
		}
		);
	}

	onCountryGridRowClick_callCountry_findByIdOperationComplete(){
		this.parentRef.onCountryGridRowClick_callCountry_findByIdOperationComplete(this.responseData);
	}

}