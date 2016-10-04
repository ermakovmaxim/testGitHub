/**
 * Created by sagar on 6/9/16.
 */
import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import {Router} from "@angular/router";

@Injectable()
export class SearchEngineService {
    searchParamter:string;
    constructor(private _http : Http, private router : Router) {
        this.searchParamter = 'secure/SearchEngineService/getSearchResult?searchString=';
    }

   public sendSearchData(searchParamter : string,languageValue:string){
       let data=this.searchParamter+searchParamter+'&oprationType='+languageValue;
        let body={};
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({headers : headers,method : 'get'});

        try {
           return this._http.get(data, body, options);
        }
        catch (e){
            console.log('invalid search');
        }

    }
    public  getAvailableLanguages(){
        let data='secure/SearchEngineService/getAvailableLanguages';
        let body={};
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({headers : headers,method : 'get'});

        try {
            return this._http.get(data, body, options);
        }
        catch (e){
            console.log('gettting language error');
        }

    }
}
