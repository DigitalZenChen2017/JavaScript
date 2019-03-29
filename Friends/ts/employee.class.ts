export class employee {
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    raise(): number {
//        this.salary * 1.10; 
        this.salary *= 1.10;
        return this.salary;
    }
}