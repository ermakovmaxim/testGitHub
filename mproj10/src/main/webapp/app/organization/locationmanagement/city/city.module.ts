import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WidgetModule } from '../../../../components/widget.shared.module';
import { CityComponent } from './city.component';
import { CityService } from './city.service';

@NgModule({
imports : [ BrowserModule,FormsModule,HttpModule,WidgetModule,
RouterModule.forChild([{ path: '', component: CityComponent }])
 ],
declarations : [ CityComponent ],
providers : [ CityService ]
})

export class CityModule { }