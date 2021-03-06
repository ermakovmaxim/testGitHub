import { Injectable } from '@angular/core';
import { RequestOptions,Headers,Http } from '@angular/http';
import { AppUrl } from '../constant';

@Injectable()
export class TitleService {

	responseData : any;
	callBackFunctionName : any;
	parentRef : any;

	constructor(private _http : Http){
	}

	onSaveClick_callTitleService_saveOperation(parentRef : any, callBackFunctionName : any, requestJson : any){

		this.parentRef = parentRef;
		this.callBackFunctionName = callBackFunctionName;

		let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions({headers : headers, method : 'post'});

		this._http.post('secure/Title/', requestJson, options).subscribe(
		response=>{
		this.responseData = response.json();
		},
		error=>{

		},
		()=>{
		this.onSaveClick_callTitleService_saveOperationComplete();
		}
		);
	}

	onSaveClick_callTitleService_saveOperationComplete(){
		this.parentRef.onSaveClick_callTitleService_saveOperationComplete(this.responseData);
	}

	onUpdateClick_callTitleService_updateOperation(parentRef : any, callBackFunctionName : any, requestJson : any){

		this.parentRef = parentRef;
		this.callBackFunctionName = callBackFunctionName;

		let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions({headers : headers, method : 'put'});

		this._http.post('secure/Title/', requestJson, options).subscribe(
		response=>{
		this.responseData = response.json();
		},
		error=>{

		},
		()=>{
		this.onUpdateClick_callTitleService_updateOperationComplete();
		}
		);
	}

	onUpdateClick_callTitleService_updateOperationComplete(){
		this.parentRef.onUpdateClick_callTitleService_updateOperationComplete(this.responseData);
	}

	onTitleGridRowClick_callTitle_findByIdOperation(parentRef : any, callBackFunctionName : any, requestJson : any){

		this.parentRef = parentRef;
		this.callBackFunctionName = callBackFunctionName;

		let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions({headers : headers, method : 'post'});

		this._http.post('secure/Title/findById', requestJson, options).subscribe(
		response=>{
		this.responseData = response.json();
		},
		error=>{

		},
		()=>{
		this.onTitleGridRowClick_callTitle_findByIdOperationComplete();
		}
		);
	}

	onTitleGridRowClick_callTitle_findByIdOperationComplete(){
		this.parentRef.onTitleGridRowClick_callTitle_findByIdOperationComplete(this.responseData);
	}

}