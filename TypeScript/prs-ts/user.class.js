"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(id, userName, password, firstName, lastName, phoneNumber, email, isReviewer, isAdmin) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.isReviewer = isReviewer;
        this.isAdmin = isAdmin;
    }
    User.prototype.about = function () {
        return "User: id=" + this.id + ", userName=" + this.userName + ", password=" + this.password + ", firstName=" + this.firstName + ", lastName=" + this.lastName + ", phoneNumber=" + this.phoneNumber + ", email=" + this.email + ", isReviewer=" + this.isReviewer + ", isAdmin=" + this.isAdmin;
    };
    return User;
}());
exports.User = User;
