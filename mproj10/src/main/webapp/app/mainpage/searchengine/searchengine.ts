import {Component, ElementRef, Input, Output, EventEmitter, OnInit, ViewChild}      from    '@angular/core';
import {Component, Provider, forwardRef, Provider, forwardRef, Input} from "@angular/core";
import {INPUT_MD_FORM} from "../style.constants";
import {SearchEngineService} from "./searchengine.service";
import {Router} from "@angular/router";

@Component({
    selector : 'search-engine',
    template : `     
         <li class="nav-item active">
                    <form class="form-inline" style="padding-left: 80px">
                        <input class="form-control" id="searchBoxId" value="" type="text" placeholder="Search" #searchstring style="color: white" autocomplete="off" >
                     </form>
            </li>
            <li class="nav-item">
                <div class="col-lg-4" (click)="sendSearchData(searchstring.value)" >
                        <i class="fa fa-search " aria-hidden="true" ></i>        
                </div>
             </li>
     
`,
})

export class SearchEngine implements OnInit{
    languageValue : string;
	constructor(private searchEngineService : SearchEngineService,private router : Router) {
    }
    //Route call to SearchResult
  public sendSearchData(searchString:string){
 	if(searchString==""){
          toastr.error("Please enter search data.");
      }else{
         // document.getElementById("progressBar").style.display = "block";
          setTimeout(()=>{
              this.router.navigate(['/mainpage/searchengine',{searchString: searchString, en: 'en'}])
          });
      }
  }
 /* This method is used get Selected drop down value and pass to sendSearchData method*/
   public onChangeLanguageDropDown(eventData  : any){
       this.languageValue=eventData.target.value;
     //  this.getLanguage();
   }
   public getLanguage(){

       let  listOfLanguage:[];
      listOfLanguage=searchEngineService.getLanguage().subscribe(
          response=>{
              let repsonseData=JSON.parse(response.json().response);
          },
          error=>{
              console.log('error gettting language');
          },
          ()=>{
              console.log("gettting language Completed...");
          });
   }
}

