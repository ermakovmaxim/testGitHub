"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var map_service_1 = require("./map.service");
var ReportMapComponent = (function () {
    function ReportMapComponent(reportMapService) {
        this.reportMapService = reportMapService;
    }
    ReportMapComponent.prototype.ngOnInit = function () {
    };
    ReportMapComponent.prototype.ngAfterViewInit = function () {
        this.loadGoogleMap();
    };
    ReportMapComponent.prototype.loadcomponent = function () {
        this.reportMapService.getMapData(this, this.reportId);
    };
    ReportMapComponent.prototype.loadGoogleMap = function () {
        try {
            var mapOptions = {
                center: {
                    lat: 28.613939,
                    lng: 77.209021
                },
                zoom: 3,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var mapDiv = document.getElementById("reportGoogleMap");
            this.googleMap = new google.maps.Map(mapDiv, mapOptions);
        }
        catch (e) {
        }
    };
    ReportMapComponent.prototype.showMarker = function () {
        var mapdata = this.mapData;
        for (var i = 0; i < mapdata.length; i++) {
            var data = mapdata[i];
            var marker = new google.maps.Marker({
                map: this.googleMap,
                position: { lat: parseFloat(data.lattitude), lng: parseFloat(data.longitude) },
                title: data.groupvalue
            });
            this.attachMarkerInfo(marker, data);
        }
    };
    ReportMapComponent.prototype.attachMarkerInfo = function (marker, data) {
        if (this.mapConfig) {
            var mapConfig = this.mapConfig;
            if (mapConfig.hasOwnProperty("mapView")) {
                var key = "";
                var mapJson = mapConfig.mapView;
                if (mapJson.hasOwnProperty("aggregate")) {
                    var aggregateConfig = mapJson.aggregate;
                    if (aggregateConfig.length > 0) {
                        key = aggregateConfig[0].dfieldList;
                    }
                }
                else {
                    key = mapJson.displayName;
                }
                var infowindow = new google.maps.InfoWindow({
                    content: data[key]
                });
                var googleMap = this.googleMap;
                google.maps.event.addListener(marker, 'click', function () {
                    infowindow.open(googleMap, marker);
                });
                google.maps.event.addListener(googleMap, 'click', function () {
                    infowindow.close();
                });
            }
        }
    };
    __decorate([
        core_1.Input()
    ], ReportMapComponent.prototype, "reportId");
    __decorate([
        core_1.Input()
    ], ReportMapComponent.prototype, "mapConfig");
    ReportMapComponent = __decorate([
        core_1.Component({
            selector: 'report-map-component',
            template: "\n\n<div class=\"card card-block\" id=\"reportGoogleMap\" style=\"height: 480px;\"></div>\n",
            providers: [map_service_1.ReportMapService]
        })
    ], ReportMapComponent);
    return ReportMapComponent;
}());
exports.ReportMapComponent = ReportMapComponent;
