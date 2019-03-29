"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var friend = /** @class */ (function () {
    function friend(name, number, color) {
        this.name = name;
        this.favNumber = number;
        this.favColor = color;
    }
    friend.prototype.print = function () {
        console.log("Name:", this.name, "Favorite Number:", this.favNumber, "Favorite Color:", this.favColor);
    };
    return friend;
}());
exports.friend = friend;
