import {Component, OnInit, Input} from '@angular/core';
import {BasicGridComponent} from "./basic.grid.component";
import {ReportDataGridService} from "./datagrid.service";
import {HTTP_PROVIDERS} from "@angular/http";

@Component({
    selector: 'report-datagrid-component',

    template:`

<div class="col-lg-12">
<header>
<nav style="float: right;">

    <ul class="pagination pg-bluegrey">
      <!--Arrow left-->
        <li class="page-item">
            <a class="page-link" aria-label="Previous" disabled (click) = "moveToFirst()">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only" >Previous</span>
            </a>
        </li>
        
        <!--Arrow left-->
        <li class="page-item">
            <a class="page-link" aria-label="Previous" (click) = "movePrev()">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only" >Previous</span>
            </a>
        </li>
 <li class="page-item"><a class="page-link"> {{pagingToolbarStatus()}} </a></li>
    
        <!--Arrow right-->
        <li class="page-item">
            <a class="page-link" aria-label="Next" (click) = "moveNext()">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only" >Next</span>
            </a>
        </li>
        
          <!--Arrow right-->
        <li class="page-item">
            <a class="page-link" aria-label="Next" (click) = "moveToLast()">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only" >Next</span>
            </a>
        </li>
         <li class="page-item">
            <a class="page-link" aria-disabled="true" aria-label="Refresh" (click) = "refresh()">
                <span aria-hidden="true" >&raquo;</span>
                
                <span class="sr-only" >Refresh</span>
            </a>
        </li>
    </ul>
</nav>
</header>
<!--/Pagination grey-->

                <basic-grid-component [reportId] = "reportId" [gridColumns]="gridColumns" [rowHighLight]="rowHighLight" [gridData]="gridData">basic-grid-component loading...</basic-grid-component>
            </div> `,

    directives:[BasicGridComponent],

    providers:[ReportDataGridService,HTTP_PROVIDERS]


})
export class ReportDataGridComponent implements OnInit {
  
    @Input() gridColumns :any = [];
    @Input() rowHighLight : any = [];
    @Input() reportId : string;
     gridData : any = [];
  
    pagingData : any = {
        currentPage : 1,
        start:0,
        limit:20,
        total:0
    }
    
    constructor(private reportDataGridService : ReportDataGridService) {
    }

    ngOnInit() {

    }
    ngAfterViewInit(){

    }

    loadcomponent(){
        this.pagingData.currentPage = 1;
        this.pagingData.start = 1;
        this.pagingData.total = 0;

        this.reportDataGridService.getGridData(this,this.reportId,this.pagingData);
    }

    refresh(){
        this.reportDataGridService.getGridData(this,this.reportId,this.pagingData);
    }
    pagingToolbarStatus(){
        let totalPages = Math.round(this.pagingData.total/this.pagingData.limit);

        let fromRecord = this.pagingData.start;
        let toRecord = this.pagingData.total == 0 ? 0:this.pagingData.start+ this.pagingData.limit-1;
        if(toRecord>this.pagingData.total){
            toRecord = toRecord -(toRecord -this.pagingData.total);
        }
        return "Page ("+this.pagingData.currentPage + "/"+totalPages +") Showing "+ fromRecord +"-" +toRecord+ " of total "+this.pagingData.total+" records.";
    }
    moveToFirst(){
        this.pagingData.currentPage = 1;
        this.pagingData.start = 1;
        this.pagingData.total = 0;

        this.reportDataGridService.getGridData(this,this.reportId,this.pagingData);


    }
    moveToLast(){
        let secondFromLastPage = Math.round(this.pagingData.total/this.pagingData.limit)-1;

        this.pagingData.currentPage = secondFromLastPage;
        this.pagingData.start =((secondFromLastPage)*this.pagingData.limit+1)-this.pagingData.limit;
        this.moveNext();
        this.pagingData.currentPage = secondFromLastPage+1;
    }

    moveNext(){
        if(!this.isLastPage()) {

            this.pagingData.currentPage = this.pagingData.currentPage + 1;
            this.pagingData.start = this.pagingData.start + this.pagingData.limit;

            this.reportDataGridService.getGridData(this, this.reportId, this.pagingData);
        }
    }

    movePrev(){
        if(!this.isFirstPage()) {

            this.pagingData.currentPage =  this.pagingData.currentPage-1;
            this.pagingData.start =  this.pagingData.start - this.pagingData.limit;

        }

        this.reportDataGridService.getGridData(this,this.reportId,this.pagingData);

    }

    isFirstPage (){

        return this.pagingData.start == 1;
    }
    isLastPage () {
        let toRecord = this.pagingData.total == 0 ? 0:this.pagingData.start+ this.pagingData.limit-1;
        if(toRecord>this.pagingData.total){
            toRecord = toRecord -(toRecord -this.pagingData.total);
        }
        return toRecord==this.pagingData.total;
    }

}