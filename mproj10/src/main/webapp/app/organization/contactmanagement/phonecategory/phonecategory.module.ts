import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WidgetModule } from '../../../../components/widget.shared.module';
import { PhoneCategoryComponent } from './phonecategory.component';
import { PhoneCategoryService } from './phonecategory.service';

@NgModule({
imports : [ BrowserModule,FormsModule,HttpModule,WidgetModule,
RouterModule.forChild([{ path: '', component: PhoneCategoryComponent }])
 ],
declarations : [ PhoneCategoryComponent ],
providers : [ PhoneCategoryService ]
})

export class PhoneCategoryModule { }