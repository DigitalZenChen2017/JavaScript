"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(productID, productVendor, partNumber, name, price, unit, photoPath) {
        this.id = productID;
        this.Vendor = productVendor;
        this.partNumber = partNumber;
        this.name = name;
        this.price = price;
        this.unit = unit;
        this.photoPath = photoPath;
    }
    Product.prototype.about = function () {
        return "Product: id=" + this.id + ", Vendor=" + this.Vendor + ", partNumber=" + this.partNumber + ", name=" + this.name + ", price=" + this.price + ", unit=" + this.unit + ", photoPath=" + this.photoPath;
    };
    return Product;
}());
exports.Product = Product;
