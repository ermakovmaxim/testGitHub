/**
 * Created by pratik on 23/9/16.
 */
import {NgModule} from '@angular/core';
import {TextInput} from "./textinput/text.input";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {NumberInput} from "./numberinput/number.input";
import {EmailInput} from "./emailinput/email.input";
import {TextAreaInput} from "./textarea/textarea.input";
import {RangeInput} from "./rangeinput/range.input";
import {ResetButton} from "./button/reset.button";
import {SimpleButton} from "./button/simple.button";
import {CheckBoxGroupComponent} from "./checkboxgroup/checkbox.group.input";
import {CheckBoxInput} from "./checkboxinput/checkbox.input";
import {DataGrid} from "./datagrid/datagrid";
import {DateInputComponent} from "./dateinput/date.input";
import {FileUploadInput} from "./fileuploadinput/fileupload.input";
import {HiddenInput} from "./hiddeninput/hidden.input";
import {PasswordInput} from "./passwordinput/password.input";
import {RadioGroupInputComponent} from "./radioinput/radio.group.input";
import {ToggleInput} from "./toggleinput/toggle.input";
import {GroupFieldService} from "./services/group.service";
import {CheckBoxGroupService} from "./checkboxgroup/checkbox.group.service";
import {GridService} from "./services/table/grid.service";
import {SelectInput} from "./selectinput/select.input";
import {SelectInputService} from "./selectinput/select.input.service";
import {CommonsValidatorService} from "./services/CommonsValidator";
import {ReportChartComponent} from "../app/../components/report/chart/chart.component";
import {ReportDataGridComponent} from "../app/../components/report/datagrid/datagrid.component";
import {ReportDataPointComponent} from "../app/../components/report/datapoint/datapoint.component";
import {ReportMapComponent} from "../app/../components/report/map/map.component";
import {BasicGridComponent} from "../app/../components/report/datagrid/basic.grid.component";
@NgModule({
    imports: [HttpModule,BrowserModule,FormsModule],
    exports: [TextInput,NumberInput,EmailInput,TextAreaInput,RangeInput,ResetButton,SimpleButton,CheckBoxGroupComponent,CheckBoxInput,DataGrid,DateInputComponent,FileUploadInput,HiddenInput,PasswordInput,RadioGroupInputComponent,ToggleInput,SelectInput,BasicGridComponent,ReportMapComponent,ReportDataPointComponent,ReportDataGridComponent,ReportChartComponent],
    declarations: [TextInput,NumberInput,EmailInput,TextAreaInput,RangeInput,ResetButton,SimpleButton,CheckBoxGroupComponent,CheckBoxInput,DataGrid,DateInputComponent,FileUploadInput,HiddenInput,PasswordInput,RadioGroupInputComponent,ToggleInput,SelectInput,BasicGridComponent,ReportMapComponent,ReportDataPointComponent,ReportDataGridComponent,ReportChartComponent],
    providers: [GroupFieldService,CheckBoxGroupService,GridService,SelectInputService,CommonsValidatorService],
})
export class WidgetModule {
}

