export class SocialCategoryModel
{


 private _socialCatName : string;

 private _socialCatId : string;

 private _versionId : string;

constructor(socialCatName:string,socialCatId:string,versionId:string) {
 this._socialCatName = socialCatName;
 this._socialCatId = socialCatId;
 this._versionId = versionId;
}

get socialCatName():string { return this._socialCatName; }

get socialCatId():string { return this._socialCatId; }

get versionId():string { return this._versionId; }


set socialCatName(value:string) { this._socialCatName = value; }

set socialCatId(value:string) { this._socialCatId = value; }

set versionId(value:string) { this._versionId = value; }

}