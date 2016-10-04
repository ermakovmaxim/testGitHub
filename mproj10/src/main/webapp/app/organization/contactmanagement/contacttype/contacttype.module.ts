import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WidgetModule } from '../../../../components/widget.shared.module';
import { ContactTypeComponent } from './contacttype.component';
import { ContactTypeService } from './contacttype.service';

@NgModule({
imports : [ BrowserModule,FormsModule,HttpModule,WidgetModule,
RouterModule.forChild([{ path: '', component: ContactTypeComponent }])
 ],
declarations : [ ContactTypeComponent ],
providers : [ ContactTypeService ]
})

export class ContactTypeModule { }