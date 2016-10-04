export class PhoneCategoryModel
{


 private _phoneCatName : string;

 private _phoneCatId : string;

 private _versionId : string;

constructor(phoneCatName:string,phoneCatId:string,versionId:string) {
 this._phoneCatName = phoneCatName;
 this._phoneCatId = phoneCatId;
 this._versionId = versionId;
}

get phoneCatName():string { return this._phoneCatName; }

get phoneCatId():string { return this._phoneCatId; }

get versionId():string { return this._versionId; }


set phoneCatName(value:string) { this._phoneCatName = value; }

set phoneCatId(value:string) { this._phoneCatId = value; }

set versionId(value:string) { this._versionId = value; }

}