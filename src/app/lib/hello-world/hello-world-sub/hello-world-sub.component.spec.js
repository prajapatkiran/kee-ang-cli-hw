"use strict";
var testing_1 = require("@angular/core/testing");
var hello_world_sub_component_1 = require("./hello-world-sub.component");
describe('HelloWorldSubComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [hello_world_sub_component_1.HelloWorldSubComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(hello_world_sub_component_1.HelloWorldSubComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=hello-world-sub.component.spec.js.map