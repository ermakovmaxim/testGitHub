import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {MainPageComponent} from "./mainpage.component";



const mainPageRoutes: Routes = [
{
 path: 'mainpage',
 component: MainPageComponent,
 children : [
	{ path : ''},
	{"path": "searchengine", "loadChildren": "./app/mainpage/searchengine/searchengine.module#SearchEngieModule"},
	{"path": "doyoumean","loadChildren": "./app/mainpage/searchengine/searchengine.module#SearchEngieModule"},
	{"path":"GenderModule","loadChildren":"app/organization/contactmanagement/gender/gender.module#GenderModule"},
	{"path":"PhoneCategoryModule","loadChildren":"app/organization/contactmanagement/phonecategory/phonecategory.module#PhoneCategoryModule"},
	{"path":"SocialCategoryModule","loadChildren":"app/organization/contactmanagement/socialcategory/socialcategory.module#SocialCategoryModule"},
	{"path":"TitleModule","loadChildren":"app/organization/contactmanagement/title/title.module#TitleModule"},
	{"path":"AddressTypeModule","loadChildren":"app/organization/locationmanagement/addresstype/addresstype.module#AddressTypeModule"},
	{"path":"CountryModule","loadChildren":"app/organization/locationmanagement/country/country.module#CountryModule"},
	{"path":"TimezoneModule","loadChildren":"app/organization/locationmanagement/timezone/timezone.module#TimezoneModule"},
	{"path": "UserManagement","loadChildren": "./app/usermanagement/usermanagement.module#UserManagementModule"},
	{"path":"CityModule","loadChildren":"app/organization/locationmanagement/city/city.module#CityModule"},
	{"path":"QuestionModule","loadChildren":"app/appbasicsetup/usermanagement/question/question.module#QuestionModule"},
	{"path":"ContactTypeModule","loadChildren":"app/organization/contactmanagement/contacttype/contacttype.module#ContactTypeModule"},
	{"path":"EmailCategoryModule","loadChildren":"app/organization/contactmanagement/emailcategory/emailcategory.module#EmailCategoryModule"},
	{"path": "addrole","loadChildren": "./app/rolefeature/addnewrole/addnewrole.module#AddNewRoleModule"},
	{"path":"StateModule","loadChildren":"app/organization/locationmanagement/state/state.module#StateModule"},
	{"path":"LanguageModule","loadChildren":"app/organization/locationmanagement/language/language.module#LanguageModule"},
	{"path": "userRoleMapping","loadChildren": "./app/userrole/adduserrolemapping/userrolemapping.module#UserRoleMappingModule"},
	    ]
	}
];
 export const mainPageRouting: ModuleWithProviders = RouterModule.forRoot(mainPageRoutes);