import { Component } from '@angular/core';
import { SocialCategoryModel } from './socialcategory.model';
import { SocialCategoryService } from './socialcategory.service';
import { TextInputConfiguration,DataGridConfiguration,SimpleButtonConfiguration,CommonsValidatorService } from 'ng_custom_widgets';

@Component({
selector : 'socialcategory-component',
templateUrl : 'app/organization/contactmanagement/socialcategory/socialcategory.template.html'
})
export class SocialCategoryComponent {

	socialCategoryModel : SocialCategoryModel;
	socialCatName : TextInputConfiguration;
	save : SimpleButtonConfiguration;
	update : SimpleButtonConfiguration;
	reset : SimpleButtonConfiguration;
	socialCategoryGrid : DataGridConfiguration;
	socialCategoryGridData : any;

	constructor(  private socialCategoryService : SocialCategoryService , private commonsValidatorService : CommonsValidatorService ) {

		this.socialCategoryModel = new SocialCategoryModel('','','');
		this.socialCatName = new TextInputConfiguration(false,false,false,true,'1','256','Please enter Social Category Name');
		this.save = new SimpleButtonConfiguration(false,false);
		this.update = new SimpleButtonConfiguration(true,false);
		this.reset = new SimpleButtonConfiguration(false,false);
		
		var socialCategoryGridcolumns = [];
		socialCategoryGridcolumns.push({text : 'Social Category Id', dataIndex : 'socialCatId', hidden: true});
		socialCategoryGridcolumns.push({text : 'Social Category Name', dataIndex : 'socialCatName', hidden: false});
		socialCategoryGridcolumns.push({text : 'createdBy', dataIndex : 'createdBy', hidden: true});
		socialCategoryGridcolumns.push({text : 'createdDate', dataIndex : 'createdDate', hidden: true});
		socialCategoryGridcolumns.push({text : 'updatedBy', dataIndex : 'updatedBy', hidden: true});
		socialCategoryGridcolumns.push({text : 'updatedDate', dataIndex : 'updatedDate', hidden: true});
		socialCategoryGridcolumns.push({text : 'versionId', dataIndex : 'versionId', hidden: true});
		socialCategoryGridcolumns.push({text : 'activeStatus', dataIndex : 'activeStatus', hidden: true});
		socialCategoryGridcolumns.push({text : 'txnAccessCode', dataIndex : 'txnAccessCode', hidden: true});
		this.socialCategoryGrid = new DataGridConfiguration(socialCategoryGridcolumns);
		this.socialCategoryGridData = [];

	}

	onSaveClick() {

		var requestData = {};

		var componentArray = [ this.socialCatName ];

		if(this.commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
			return;
		}

		requestData.socialCatName = this.socialCategoryModel.socialCatName;

		this.socialCategoryService.onSaveClick_callSocialCategoryService_saveOperation(this,'onSaveClick_callSocialCategoryService_saveOperationComplete',requestData);

		this.socialCategoryModel.socialCatId = null;
		this.socialCategoryModel.socialCatName = null;
		this.socialCategoryModel.versionId = null;
	}

	onSaveClick_callSocialCategoryService_saveOperationComplete(responseData) {

		if(responseData.response.success) {
			toastr.info(responseData.response.message);
		} else {
			toastr.error(responseData.response.message);
		}
	}


	onUpdateClick() {

		var requestData = {};

		var componentArray = [ this.socialCatName ];

		if(this.commonsValidatorService.validateAndShowErrorMessages(componentArray)) {
			return;
		}

		requestData.socialCatId = this.socialCategoryModel.socialCatId;
		requestData.socialCatName = this.socialCategoryModel.socialCatName;
		requestData.versionId = this.socialCategoryModel.versionId;

		this.socialCategoryService.onUpdateClick_callSocialCategoryService_updateOperation(this,'onUpdateClick_callSocialCategoryService_updateOperationComplete',requestData);

		this.socialCategoryModel.socialCatId = null;
		this.socialCategoryModel.socialCatName = null;
		this.socialCategoryModel.versionId = null;
		this.save.hidden = false;
		this.update.hidden = true;
	}

	onUpdateClick_callSocialCategoryService_updateOperationComplete(responseData) {

		if(responseData.response.success) {
			toastr.info(responseData.response.message);
		} else {
			toastr.error(responseData.response.message);
		}
	}


	onResetClick() {

		this.socialCategoryModel.socialCatId = null;
		this.socialCategoryModel.socialCatName = null;
		this.socialCategoryModel.versionId = null;
		this.save.hidden = false;
		this.update.hidden = true;
	}

	onSocialCategoryGridRowClick(data) {

		var requestData = {};
		requestData.findKey = data.socialCatId;

		this.socialCategoryService.onSocialCategoryGridRowClick_callSocialCategory_findByIdOperation(this,'onSocialCategoryGridRowClick_callSocialCategory_findByIdOperationComplete',requestData);

	}

	onSocialCategoryGridRowClick_callSocialCategory_findByIdOperationComplete(responseData) {

		let data = responseData.response.data;

		this.socialCategoryModel.socialCatId = data.socialCatId;
		this.socialCategoryModel.socialCatName = data.socialCatName;
		this.socialCategoryModel.versionId = data.versionId;

		this.save.hidden = true;
		this.update.hidden = false;
	}


}