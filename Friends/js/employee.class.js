"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var employee = /** @class */ (function () {
    function employee(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    employee.prototype.raise = function () {
        //        this.salary * 1.10; 
        this.salary *= 1.10;
        return this.salary;
    };
    return employee;
}());
exports.employee = employee;
