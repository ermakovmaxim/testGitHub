import { Injectable } from '@angular/core';
import { RequestOptions,Headers,Http } from '@angular/http';
import { AppUrl } from '../constant';

@Injectable()
export class QuestionService {

	responseData : any;
	callBackFunctionName : any;
	parentRef : any;

	constructor(private _http : Http){
	}

	onSaveClick_callQuestionService_saveOperation(parentRef : any, callBackFunctionName : any, requestJson : any){

		this.parentRef = parentRef;
		this.callBackFunctionName = callBackFunctionName;

		let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions({headers : headers, method : 'post'});

		this._http.post('secure/Question/', requestJson, options).subscribe(
		response=>{
		this.responseData = response.json();
		},
		error=>{

		},
		()=>{
		this.onSaveClick_callQuestionService_saveOperationComplete();
		}
		);
	}

	onSaveClick_callQuestionService_saveOperationComplete(){
		this.parentRef.onSaveClick_callQuestionService_saveOperationComplete(this.responseData);
	}

	onUpdateClick_callQuestionService_updateOperation(parentRef : any, callBackFunctionName : any, requestJson : any){

		this.parentRef = parentRef;
		this.callBackFunctionName = callBackFunctionName;

		let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions({headers : headers, method : 'put'});

		this._http.post('secure/Question/', requestJson, options).subscribe(
		response=>{
		this.responseData = response.json();
		},
		error=>{

		},
		()=>{
		this.onUpdateClick_callQuestionService_updateOperationComplete();
		}
		);
	}

	onUpdateClick_callQuestionService_updateOperationComplete(){
		this.parentRef.onUpdateClick_callQuestionService_updateOperationComplete(this.responseData);
	}

	onQuestionGridRowClick_callQuestion_findByIdOperation(parentRef : any, callBackFunctionName : any, requestJson : any){

		this.parentRef = parentRef;
		this.callBackFunctionName = callBackFunctionName;

		let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions({headers : headers, method : 'post'});

		this._http.post('secure/Question/findById', requestJson, options).subscribe(
		response=>{
		this.responseData = response.json();
		},
		error=>{

		},
		()=>{
		this.onQuestionGridRowClick_callQuestion_findByIdOperationComplete();
		}
		);
	}

	onQuestionGridRowClick_callQuestion_findByIdOperationComplete(){
		this.parentRef.onQuestionGridRowClick_callQuestion_findByIdOperationComplete(this.responseData);
	}

}