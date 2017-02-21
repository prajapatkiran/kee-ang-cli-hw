"use strict";
var router_1 = require("@angular/router");
var hw_app_component_1 = require("./hw-app.component");
var hello_world_component_1 = require("./hello-world/hello-world.component");
var hello_world_sub_component_1 = require("./hello-world/hello-world-sub/hello-world-sub.component");
var hwAppRoutes = [
    {
        path: '',
        redirectTo: '/kee-hw-app',
        pathMatch: 'full'
    },
    {
        path: 'kee-hw-app',
        component: hw_app_component_1.HwAppComponent
    },
    {
        path: 'kee-hw-app/hello-world',
        component: hello_world_component_1.HelloWorldComponent
    },
    {
        path: 'kee-hw-app/hello-world-sub',
        component: hello_world_sub_component_1.HelloWorldSubComponent
    }
];
exports.appRoutingProviders = [];
exports.hwAppRouting = router_1.RouterModule.forChild(hwAppRoutes);
//# sourceMappingURL=hw-app.routing.js.map