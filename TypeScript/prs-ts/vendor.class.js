"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var Vendor = /** @class */ (function () {
    function Vendor(id, code, name, address, city, state, zip, phoneNumber, email, preApproved) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.preApproved = preApproved;
    }
    Vendor.prototype.about = function () {
        return "Vendor: id=" + this.id + ", code=" + this.code + ", name=" + this.name + ", address=" + this.address + ", city=" + this.city + ", state=" + this.state + ", zip=" + this.zip + ", phoneNumber=" + this.phoneNumber + ", email=" + this.email + ", preApproved=" + this.preApproved;
    };
    return Vendor;
}());
exports.Vendor = Vendor;