export class EmailCategoryModel
{


 private _emailCatName : string;

 private _emailCatId : string;

 private _versionId : string;

constructor(emailCatName:string,emailCatId:string,versionId:string) {
 this._emailCatName = emailCatName;
 this._emailCatId = emailCatId;
 this._versionId = versionId;
}

get emailCatName():string { return this._emailCatName; }

get emailCatId():string { return this._emailCatId; }

get versionId():string { return this._versionId; }


set emailCatName(value:string) { this._emailCatName = value; }

set emailCatId(value:string) { this._emailCatId = value; }

set versionId(value:string) { this._versionId = value; }

}