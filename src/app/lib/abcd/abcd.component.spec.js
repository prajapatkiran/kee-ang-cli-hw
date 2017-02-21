"use strict";
var testing_1 = require("@angular/core/testing");
var abcd_component_1 = require("./abcd.component");
describe('AbcdComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [abcd_component_1.AbcdComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(abcd_component_1.AbcdComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=abcd.component.spec.js.map