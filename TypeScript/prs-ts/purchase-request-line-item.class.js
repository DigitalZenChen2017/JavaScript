"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PurchaseRequestLineItem = /** @class */ (function () {
    function PurchaseRequestLineItem(id, PurchaseRequest, Product, quantity) {
        this.id = id;
        this.PurchaseRequest = PurchaseRequest;
        this.Product = Product;
        this.quantity = quantity;
    }
    PurchaseRequestLineItem.prototype.about = function () {
        return "PurchaseRequestLineItem: id=" + this.id + ", PurchaseRequest=" + this.PurchaseRequest + ", Product=" + this.Product + ", quantity=" + this.quantity;
    };
    return PurchaseRequestLineItem;
}());
exports.PurchaseRequestLineItem = PurchaseRequestLineItem;
