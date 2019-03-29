import { employee } from "./employee.class";

// Creates an array of Employee Objects
let employees: employee[] = [
    new employee("Boris", 55000),
    new employee("Samantha", 72000),
    new employee("Paul", 60000),
    new employee("Kendra", 90000),
    new employee("Xiao", 100000),
    new employee("Nick", 58000)
]

// Total Employee Salaries Before 10% Raise
let startTotal: number = 0;
for(let e of employees) {
    startTotal += e.salary;
}

let endTotal: number = 0;

for(let e of employees) {
    endTotal += e.raise();
}