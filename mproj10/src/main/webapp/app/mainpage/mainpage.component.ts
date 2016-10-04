
import { Component, OnInit } from '@angular/core';
import {MenuService} from "./sidemenu/menuTree.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../login/authentication.service";
import {MenuData} from "./sidemenu/menutree.model";

@Component({

    selector: 'dashboard',
    templateUrl :'app/mainpage/mainpage.html'
})

export class MainPageComponent implements OnInit {
    menu : MenuData;
    menuBody : any;
    menuList : any;


    
    ngOnInit() { }

    ngAfterViewInit(){
        $(".button-collapse").sideNav();


        $(document).ready(function() {
            $('.mdb-select').material_select();
        });
    }

    constructor(private menuService : MenuService,private authenticateService : AuthenticationService,private router : Router){
        this.menuList = [];
        this.menu = new  MenuData();


        this.menuService.getMainScreenMenu().subscribe(
            response=> {
                let res =response.json();

                this.menuBody = JSON.parse(res.response.data);
                console.log('json');

                this.mainMenuSorting(this.menuBody.menus);
            },
            error=> {
                console.log('error');
            },
            ()=> {

                console.log('Submit');


            }
        );




    }

    



    mainMenuSorting(menuBody) {
        menuBody.forEach((option)=> {
            let parent = new MenuData();
            parent.menuLabel = option.menuName;
            parent.routePath = option.menuAction;
            parent.leaf = option.leaf;
            if(!parent.leaf){
                this.addChild(option.children,parent);
            }
            this.menuList.push(parent);

        });

    }



      addChild(child,parent){

        for(let i = 0 ;i< child.length;i++){
            let parentChildren = new MenuData();
            parentChildren.menuLabel = child[i].menuName;
            parentChildren.leaf = child[i].leaf;
            if(child[i].leaf) {
                if(child[i].menuAction !=''){
                    let menuAction = child[i].menuAction;
                    try {
                        let menuObject = JSON.parse(menuAction);
                        parentChildren.routePath = menuObject.path;
                    }
                    catch (e){
                        parentChildren.routePath = '';
                    }
                }
            }
            parent.children.push(parentChildren);

            if(!parentChildren.leaf){
                this.addChild(child[i].children, parentChildren);
            }

        }

    }




  


   


    logoutAuthenticate(){

        console.log('call check logout');
        this.authenticateService.logOutServiceAuthenticateUser().subscribe(

            response=> {
                let res =response.json();

            },
            error=> {
                console.log('logout error');
            },
            ()=> {

                this.clearCookies();
                setTimeout(()=>{this.router.navigate(['/login']),200});


                }

        );
    }

    clearCookies()
    {
        document.cookie = 'XA_ID' +
            '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
        document.cookie = 'XA_TID' +
            '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
        console.log('clear cookies');
    }


}

