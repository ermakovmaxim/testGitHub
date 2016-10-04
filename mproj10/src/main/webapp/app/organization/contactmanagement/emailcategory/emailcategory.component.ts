import { Component } from '@angular/core';
import { EmailCategoryModel } from './emailcategory.model';
import { EmailCategoryService } from './emailcategory.service';
import { TextInputConfiguration,DataGridConfiguration,SimpleButtonConfiguration,CommonsValidatorService } from 'ng_custom_widgets';

@Component({
selector : 'emailcategory-component',
templateUrl : 'app/organization/contactmanagement/emailcategory/emailcategory.template.html'
})
export class EmailCategoryComponent {

	emailCategoryModel : EmailCategoryModel;
	emailCatName : TextInputConfiguration;
	save : SimpleButtonConfiguration;
	update : SimpleButtonConfiguration;
	reset : SimpleButtonConfiguration;
	emailCategoryGrid : DataGridConfiguration;
	emailCategoryGridData : any;

	constructor(  private emailCategoryService : EmailCategoryService , private commonsValidatorService : CommonsValidatorService ) {

		this.emailCategoryModel = new EmailCategoryModel('','','');
		this.emailCatName = new TextInputConfiguration(false,false,false,true,'1','256','Please enter Email Category Name');
		this.save = new SimpleButtonConfiguration(false,false);
		this.update = new SimpleButtonConfiguration(true,false);
		this.reset = new SimpleButtonConfiguration(false,false);
		
		var emailCategoryGridcolumns = [];
		emailCategoryGridcolumns.push({text : 'Email  Category Id', dataIndex : 'emailCatId', hidden: true});
		emailCategoryGridcolumns.push({text : 'Email Category Name', dataIndex : 'emailCatName', hidden: false});
		emailCategoryGridcolumns.push({text : 'createdBy', dataIndex : 'createdBy', hidden: true});
		emailCategoryGridcolumns.push({text : 'createdDate', dataIndex : 'createdDate', hidden: true});
		emailCategoryGridcolumns.push({text : 'updatedBy', dataIndex : 'updatedBy', hidden: true});
		emailCategoryGridcolumns.push({text : 'updatedDate', dataIndex : 'updatedDate', hidden: true});
		emailCategoryGridcolumns.push({text : 'versionId', dataIndex : 'versionId', hidden: true});
		emailCategoryGridcolumns.push({text : 'activeStatus', dataIndex : 'activeStatus', hidden: true});
		emailCategoryGridcolumns.push({text : 'txnAccessCode', dataIndex : 'txnAccessCode', hidden: true});
		this.emailCategoryGrid = new DataGridConfiguration(emailCategoryGridcolumns);
		this.emailCategoryGridData = [];

	}

	onSaveClick() {

		var requestData = {};

		var componentArray = [ this.emailCatName ];

		if(this.commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
			return;
		}

		requestData.emailCatName = this.emailCategoryModel.emailCatName;

		this.emailCategoryService.onSaveClick_callEmailCategoryService_saveOperation(this,'onSaveClick_callEmailCategoryService_saveOperationComplete',requestData);

		this.emailCategoryModel.emailCatId = null;
		this.emailCategoryModel.emailCatName = null;
		this.emailCategoryModel.versionId = null;
	}

	onSaveClick_callEmailCategoryService_saveOperationComplete(responseData) {

		if(responseData.response.success) {
			toastr.info(responseData.response.message);
		} else {
			toastr.error(responseData.response.message);
		}
	}


	onUpdateClick() {

		var requestData = {};

		var componentArray = [ this.emailCatName ];

		if(this.commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
			return;
		}

		requestData.emailCatId = this.emailCategoryModel.emailCatId;
		requestData.emailCatName = this.emailCategoryModel.emailCatName;
		requestData.versionId = this.emailCategoryModel.versionId;

		this.emailCategoryService.onUpdateClick_callEmailCategoryService_updateOperation(this,'onUpdateClick_callEmailCategoryService_updateOperationComplete',requestData);

		this.emailCategoryModel.emailCatId = null;
		this.emailCategoryModel.emailCatName = null;
		this.emailCategoryModel.versionId = null;
		this.save.hidden = false;
		this.update.hidden = true;
	}

	onUpdateClick_callEmailCategoryService_updateOperationComplete(responseData) {

		if(responseData.response.success) {
			toastr.info(responseData.response.message);
		} else {
			toastr.error(responseData.response.message);
		}
	}


	onResetClick() {

		this.emailCategoryModel.emailCatId = null;
		this.emailCategoryModel.emailCatName = null;
		this.emailCategoryModel.versionId = null;
		this.save.hidden = false;
		this.update.hidden = true;
	}

	onEmailCategoryGridRowClick(data) {

		var requestData = {};
		requestData.findKey = data.emailCatId;

		this.emailCategoryService.onEmailCategoryGridRowClick_callEmailCategory_findByIdOperation(this,'onEmailCategoryGridRowClick_callEmailCategory_findByIdOperationComplete',requestData);

	}

	onEmailCategoryGridRowClick_callEmailCategory_findByIdOperationComplete(responseData) {

		let data = responseData.response.data;

		this.emailCategoryModel.emailCatId = data.emailCatId;
		this.emailCategoryModel.emailCatName = data.emailCatName;
		this.emailCategoryModel.versionId = data.versionId;

		this.save.hidden = true;
		this.update.hidden = false;
	}


}