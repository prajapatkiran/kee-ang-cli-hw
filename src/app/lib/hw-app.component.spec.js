"use strict";
var testing_1 = require("@angular/core/testing");
var hw_app_component_1 = require("./hw-app.component");
describe('HwAppComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [hw_app_component_1.HwAppComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(hw_app_component_1.HwAppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=hw-app.component.spec.js.map