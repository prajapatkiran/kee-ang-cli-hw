"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var HelloWorldSubComponent = (function () {
    function HelloWorldSubComponent() {
    }
    HelloWorldSubComponent.prototype.ngOnInit = function () {
    };
    return HelloWorldSubComponent;
}());
HelloWorldSubComponent = __decorate([
    core_1.Component({
        selector: 'app-hello-world-sub',
        templateUrl: './hello-world-sub.component.html',
        styleUrls: ['./hello-world-sub.component.css']
    }),
    __metadata("design:paramtypes", [])
], HelloWorldSubComponent);
exports.HelloWorldSubComponent = HelloWorldSubComponent;
//# sourceMappingURL=hello-world-sub.component.js.map