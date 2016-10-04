"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by pratik on 23/9/16.
 */
var core_1 = require('@angular/core');
var text_input_1 = require("./textinput/text.input");
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var number_input_1 = require("./numberinput/number.input");
var email_input_1 = require("./emailinput/email.input");
var textarea_input_1 = require("./textarea/textarea.input");
var range_input_1 = require("./rangeinput/range.input");
var reset_button_1 = require("./button/reset.button");
var simple_button_1 = require("./button/simple.button");
var checkbox_group_input_1 = require("./checkboxgroup/checkbox.group.input");
var checkbox_input_1 = require("./checkboxinput/checkbox.input");
var datagrid_1 = require("./datagrid/datagrid");
var date_input_1 = require("./dateinput/date.input");
var fileupload_input_1 = require("./fileuploadinput/fileupload.input");
var hidden_input_1 = require("./hiddeninput/hidden.input");
var password_input_1 = require("./passwordinput/password.input");
var radio_group_input_1 = require("./radioinput/radio.group.input");
var toggle_input_1 = require("./toggleinput/toggle.input");
var group_service_1 = require("./services/group.service");
var checkbox_group_service_1 = require("./checkboxgroup/checkbox.group.service");
var grid_service_1 = require("./services/table/grid.service");
var select_input_1 = require("./selectinput/select.input");
var select_input_service_1 = require("./selectinput/select.input.service");
var CommonsValidator_1 = require("./services/CommonsValidator");
var chart_component_1 = require("../app/../components/report/chart/chart.component");
var datagrid_component_1 = require("../app/../components/report/datagrid/datagrid.component");
var datapoint_component_1 = require("../app/../components/report/datapoint/datapoint.component");
var map_component_1 = require("../app/../components/report/map/map.component");
var basic_grid_component_1 = require("../app/../components/report/datagrid/basic.grid.component");
var WidgetModule = (function () {
    function WidgetModule() {
    }
    WidgetModule = __decorate([
        core_1.NgModule({
            imports: [http_1.HttpModule, platform_browser_1.BrowserModule, forms_1.FormsModule],
            exports: [text_input_1.TextInput, number_input_1.NumberInput, email_input_1.EmailInput, textarea_input_1.TextAreaInput, range_input_1.RangeInput, reset_button_1.ResetButton, simple_button_1.SimpleButton, checkbox_group_input_1.CheckBoxGroupComponent, checkbox_input_1.CheckBoxInput, datagrid_1.DataGrid, date_input_1.DateInputComponent, fileupload_input_1.FileUploadInput, hidden_input_1.HiddenInput, password_input_1.PasswordInput, radio_group_input_1.RadioGroupInputComponent, toggle_input_1.ToggleInput, select_input_1.SelectInput, basic_grid_component_1.BasicGridComponent, map_component_1.ReportMapComponent, datapoint_component_1.ReportDataPointComponent, datagrid_component_1.ReportDataGridComponent, chart_component_1.ReportChartComponent],
            declarations: [text_input_1.TextInput, number_input_1.NumberInput, email_input_1.EmailInput, textarea_input_1.TextAreaInput, range_input_1.RangeInput, reset_button_1.ResetButton, simple_button_1.SimpleButton, checkbox_group_input_1.CheckBoxGroupComponent, checkbox_input_1.CheckBoxInput, datagrid_1.DataGrid, date_input_1.DateInputComponent, fileupload_input_1.FileUploadInput, hidden_input_1.HiddenInput, password_input_1.PasswordInput, radio_group_input_1.RadioGroupInputComponent, toggle_input_1.ToggleInput, select_input_1.SelectInput, basic_grid_component_1.BasicGridComponent, map_component_1.ReportMapComponent, datapoint_component_1.ReportDataPointComponent, datagrid_component_1.ReportDataGridComponent, chart_component_1.ReportChartComponent],
            providers: [group_service_1.GroupFieldService, checkbox_group_service_1.CheckBoxGroupService, grid_service_1.GridService, select_input_service_1.SelectInputService, CommonsValidator_1.CommonsValidatorService]
        })
    ], WidgetModule);
    return WidgetModule;
}());
exports.WidgetModule = WidgetModule;
