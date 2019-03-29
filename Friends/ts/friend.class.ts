export class friend {
    name: string;
    favNumber: number;
    favColor: string;

    print(): void {
        console.log("Name:", this.name, "Favorite Number:", this.favNumber, "Favorite Color:", this.favColor);
    }

    constructor(name: string, number: number, color: string) {
        this.name = name;
        this.favNumber = number;
        this.favColor = color;
    }
}