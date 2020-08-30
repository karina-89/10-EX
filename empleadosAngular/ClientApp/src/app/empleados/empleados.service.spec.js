"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var empleados_service_1 = require("./empleados.service");
describe('EmpleadosService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(empleados_service_1.EmpleadosService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=empleados.service.spec.js.map