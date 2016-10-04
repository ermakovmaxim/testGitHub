import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WidgetModule } from '../../../../components/widget.shared.module';
import { SocialCategoryComponent } from './socialcategory.component';
import { SocialCategoryService } from './socialcategory.service';

@NgModule({
imports : [ BrowserModule,FormsModule,HttpModule,WidgetModule,
RouterModule.forChild([{ path: '', component: SocialCategoryComponent }])
 ],
declarations : [ SocialCategoryComponent ],
providers : [ SocialCategoryService ]
})

export class SocialCategoryModule { }