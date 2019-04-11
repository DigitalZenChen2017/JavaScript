"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PurchaseRequest = /** @class */ (function () {
    function PurchaseRequest(id, User, description, justification, dateNeeded, deliveryMode, status, submittedDate, reasonForRejection) {
        this.id = id;
        this.User = User;
        this.description = description;
        this.justification = justification;
        this.dateNeeded = dateNeeded;
        this.deliveryMode = deliveryMode;
        this.status = status;
        this.submittedDate = submittedDate;
        this.reasonForRejection = reasonForRejection;
    }
    PurchaseRequest.prototype.about = function () {
        return "PurchaseRequest: id=" + this.id + ", User=" + this.User + ", description=" + this.description + ", justification=" + this.justification + ", dateNeeded=" + this.dateNeeded + ", deliveryMode=" + this.deliveryMode + ", status=" + this.status + ", submittedDate=" + this.submittedDate + ", reasonForRejection=" + this.reasonForRejection;
    };
    return PurchaseRequest;
}());
exports.PurchaseRequest = PurchaseRequest;
