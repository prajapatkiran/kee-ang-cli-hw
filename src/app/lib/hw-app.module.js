"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var hello_world_component_1 = require("./hello-world/hello-world.component");
var hello_world_sub_component_1 = require("./hello-world/hello-world-sub/hello-world-sub.component");
var hw_app_component_1 = require("./hw-app.component");
var abcd_component_1 = require("./abcd/abcd.component");
var hw_app_routing_1 = require("./hw-app.routing");
var HwAppModule = (function () {
    function HwAppModule() {
    }
    return HwAppModule;
}());
HwAppModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            hw_app_routing_1.hwAppRouting
        ],
        declarations: [
            hello_world_component_1.HelloWorldComponent,
            hello_world_sub_component_1.HelloWorldSubComponent,
            hw_app_component_1.HwAppComponent,
            abcd_component_1.AbcdComponent
        ]
    })
], HwAppModule);
exports.HwAppModule = HwAppModule;
//# sourceMappingURL=hw-app.module.js.map