"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var employee_class_1 = require("./employee.class");
// Creates an array of Employee Objects
var employees = [
    new employee_class_1.employee("Boris", 55000),
    new employee_class_1.employee("Samantha", 72000),
    new employee_class_1.employee("Paul", 60000),
    new employee_class_1.employee("Kendra", 90000),
    new employee_class_1.employee("Xiao", 100000),
    new employee_class_1.employee("Nick", 58000)
];
// Total Employee Salaries Before 10% Raise
var startTotal = 0;
for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
    var e = employees_1[_i];
    startTotal += e.salary;
}
var endTotal = 0;
for (var _a = 0, employees_2 = employees; _a < employees_2.length; _a++) {
    var e = employees_2[_a];
    endTotal += e.raise();
}
