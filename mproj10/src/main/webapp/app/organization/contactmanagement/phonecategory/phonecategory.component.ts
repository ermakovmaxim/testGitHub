import { Component } from '@angular/core';
import { PhoneCategoryModel } from './phonecategory.model';
import { PhoneCategoryService } from './phonecategory.service';
import { TextInputConfiguration,DataGridConfiguration,SimpleButtonConfiguration,CommonsValidatorService } from 'ng_custom_widgets';

@Component({
selector : 'phonecategory-component',
templateUrl : 'app/organization/contactmanagement/phonecategory/phonecategory.template.html'
})
export class PhoneCategoryComponent {

	phoneCategoryModel : PhoneCategoryModel;
	phoneCatName : TextInputConfiguration;
	save : SimpleButtonConfiguration;
	update : SimpleButtonConfiguration;
	reset : SimpleButtonConfiguration;
	phoneCategoryGrid : DataGridConfiguration;
	phoneCategoryGridData : any;

	constructor(  private phoneCategoryService : PhoneCategoryService , private commonsValidatorService : CommonsValidatorService ) {

		this.phoneCategoryModel = new PhoneCategoryModel('','','');
		this.phoneCatName = new TextInputConfiguration(false,false,false,true,'1','256','Please enter Phone Category Name');
		this.save = new SimpleButtonConfiguration(false,false);
		this.update = new SimpleButtonConfiguration(true,false);
		this.reset = new SimpleButtonConfiguration(false,false);
		
		var phoneCategoryGridcolumns = [];
		phoneCategoryGridcolumns.push({text : 'Phone Category Id', dataIndex : 'phoneCatId', hidden: true});
		phoneCategoryGridcolumns.push({text : 'Phone Category Name', dataIndex : 'phoneCatName', hidden: false});
		phoneCategoryGridcolumns.push({text : 'createdBy', dataIndex : 'createdBy', hidden: true});
		phoneCategoryGridcolumns.push({text : 'createdDate', dataIndex : 'createdDate', hidden: true});
		phoneCategoryGridcolumns.push({text : 'updatedBy', dataIndex : 'updatedBy', hidden: true});
		phoneCategoryGridcolumns.push({text : 'updatedDate', dataIndex : 'updatedDate', hidden: true});
		phoneCategoryGridcolumns.push({text : 'versionId', dataIndex : 'versionId', hidden: true});
		phoneCategoryGridcolumns.push({text : 'activeStatus', dataIndex : 'activeStatus', hidden: true});
		phoneCategoryGridcolumns.push({text : 'txnAccessCode', dataIndex : 'txnAccessCode', hidden: true});
		this.phoneCategoryGrid = new DataGridConfiguration(phoneCategoryGridcolumns);
		this.phoneCategoryGridData = [];

	}

	onSaveClick() {

		var requestData = {};

		var componentArray = [ this.phoneCatName ];

		if(this.commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
			return;
		}

		requestData.phoneCatName = this.phoneCategoryModel.phoneCatName;

		this.phoneCategoryService.onSaveClick_callPhoneCategoryService_saveOperation(this,'onSaveClick_callPhoneCategoryService_saveOperationComplete',requestData);

		this.phoneCategoryModel.phoneCatId = null;
		this.phoneCategoryModel.phoneCatName = null;
		this.phoneCategoryModel.versionId = null;
	}

	onSaveClick_callPhoneCategoryService_saveOperationComplete(responseData) {

		if(responseData.response.success) {
			toastr.info(responseData.response.message);
		} else {
			toastr.error(responseData.response.message);
		}
	}


	onUpdateClick() {

		var requestData = {};

		var componentArray = [ this.phoneCatName ];

		if(this.commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
			return;
		}

		requestData.phoneCatId = this.phoneCategoryModel.phoneCatId;
		requestData.phoneCatName = this.phoneCategoryModel.phoneCatName;
		requestData.versionId = this.phoneCategoryModel.versionId;

		this.phoneCategoryService.onUpdateClick_callPhoneCategoryService_updateOperation(this,'onUpdateClick_callPhoneCategoryService_updateOperationComplete',requestData);

		this.phoneCategoryModel.phoneCatId = null;
		this.phoneCategoryModel.phoneCatName = null;
		this.phoneCategoryModel.versionId = null;
		this.save.hidden = false;
		this.update.hidden = true;
	}

	onUpdateClick_callPhoneCategoryService_updateOperationComplete(responseData) {

		if(responseData.response.success) {
			toastr.info(responseData.response.message);
		} else {
			toastr.error(responseData.response.message);
		}
	}


	onResetClick() {

		this.phoneCategoryModel.phoneCatId = null;
		this.phoneCategoryModel.phoneCatName = null;
		this.phoneCategoryModel.versionId = null;
		this.save.hidden = false;
		this.update.hidden = true;
	}

	onPhoneCategoryGridRowClick(data) {

		var requestData = {};
		requestData.findKey = data.phoneCatId;

		this.phoneCategoryService.onPhoneCategoryGridRowClick_callPhoneCategory_findByIdOperation(this,'onPhoneCategoryGridRowClick_callPhoneCategory_findByIdOperationComplete',requestData);

	}

	onPhoneCategoryGridRowClick_callPhoneCategory_findByIdOperationComplete(responseData) {

		let data = responseData.response.data;

		this.phoneCategoryModel.phoneCatId = data.phoneCatId;
		this.phoneCategoryModel.phoneCatName = data.phoneCatName;
		this.phoneCategoryModel.versionId = data.versionId;

		this.save.hidden = true;
		this.update.hidden = false;
	}


}