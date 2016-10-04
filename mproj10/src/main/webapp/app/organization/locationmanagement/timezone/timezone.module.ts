import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WidgetModule } from '../../../../components/widget.shared.module';
import { TimezoneComponent } from './timezone.component';
import { TimezoneService } from './timezone.service';

@NgModule({
imports : [ BrowserModule,FormsModule,HttpModule,WidgetModule,
RouterModule.forChild([{ path: '', component: TimezoneComponent }])
 ],
declarations : [ TimezoneComponent ],
providers : [ TimezoneService ]
})

export class TimezoneModule { }