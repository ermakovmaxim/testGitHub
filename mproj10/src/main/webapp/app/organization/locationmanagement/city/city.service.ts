import { Injectable } from '@angular/core';
import { RequestOptions,Headers,Http } from '@angular/http';
import { AppUrl } from '../constant';

@Injectable()
export class CityService {

	responseData : any;
	callBackFunctionName : any;
	parentRef : any;

	constructor(private _http : Http){
	}

	onCountryIdSelect_callStateService_findByCountryIdOperation(parentRef : any, callBackFunctionName : any, requestJson : any){

		this.parentRef = parentRef;
		this.callBackFunctionName = callBackFunctionName;

		let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions({headers : headers, method : 'post'});

		this._http.post('secure/State/findByCountryId', requestJson, options).subscribe(
		response=>{
		this.responseData = response.json();
		},
		error=>{

		},
		()=>{
		this.onCountryIdSelect_callStateService_findByCountryIdOperationComplete();
		}
		);
	}

	onCountryIdSelect_callStateService_findByCountryIdOperationComplete(){
		this.parentRef.onCountryIdSelect_callStateService_findByCountryIdOperationComplete(this.responseData);
	}

	onSaveClick_callCityService_saveOperation(parentRef : any, callBackFunctionName : any, requestJson : any){

		this.parentRef = parentRef;
		this.callBackFunctionName = callBackFunctionName;

		let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions({headers : headers, method : 'post'});

		this._http.post('secure/City/', requestJson, options).subscribe(
		response=>{
		this.responseData = response.json();
		},
		error=>{

		},
		()=>{
		this.onSaveClick_callCityService_saveOperationComplete();
		}
		);
	}

	onSaveClick_callCityService_saveOperationComplete(){
		this.parentRef.onSaveClick_callCityService_saveOperationComplete(this.responseData);
	}

	onUpdateClick_callCityService_updateOperation(parentRef : any, callBackFunctionName : any, requestJson : any){

		this.parentRef = parentRef;
		this.callBackFunctionName = callBackFunctionName;

		let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions({headers : headers, method : 'put'});

		this._http.post('secure/City/', requestJson, options).subscribe(
		response=>{
		this.responseData = response.json();
		},
		error=>{

		},
		()=>{
		this.onUpdateClick_callCityService_updateOperationComplete();
		}
		);
	}

	onUpdateClick_callCityService_updateOperationComplete(){
		this.parentRef.onUpdateClick_callCityService_updateOperationComplete(this.responseData);
	}

	onCityGridRowClick_callCity_findByIdOperation(parentRef : any, callBackFunctionName : any, requestJson : any){

		this.parentRef = parentRef;
		this.callBackFunctionName = callBackFunctionName;

		let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions({headers : headers, method : 'post'});

		this._http.post('secure/City/findById', requestJson, options).subscribe(
		response=>{
		this.responseData = response.json();
		},
		error=>{

		},
		()=>{
		this.onCityGridRowClick_callCity_findByIdOperationComplete();
		}
		);
	}

	onCityGridRowClick_callCity_findByIdOperationComplete(){
		this.parentRef.onCityGridRowClick_callCity_findByIdOperationComplete(this.responseData);
	}

}