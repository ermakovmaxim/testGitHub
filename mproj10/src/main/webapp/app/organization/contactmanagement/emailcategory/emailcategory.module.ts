import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WidgetModule } from '../../../../components/widget.shared.module';
import { EmailCategoryComponent } from './emailcategory.component';
import { EmailCategoryService } from './emailcategory.service';

@NgModule({
imports : [ BrowserModule,FormsModule,HttpModule,WidgetModule,
RouterModule.forChild([{ path: '', component: EmailCategoryComponent }])
 ],
declarations : [ EmailCategoryComponent ],
providers : [ EmailCategoryService ]
})

export class EmailCategoryModule { }