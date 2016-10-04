import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WidgetModule } from '../../../../components/widget.shared.module';
import { AddressTypeComponent } from './addresstype.component';
import { AddressTypeService } from './addresstype.service';

@NgModule({
imports : [ BrowserModule,FormsModule,HttpModule,WidgetModule,
RouterModule.forChild([{ path: '', component: AddressTypeComponent }])
 ],
declarations : [ AddressTypeComponent ],
providers : [ AddressTypeService ]
})

export class AddressTypeModule { }