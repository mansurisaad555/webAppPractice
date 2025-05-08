"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehicle = void 0;
var vehicle = /** @class */ (function () {
    function vehicle(vehicleName, vehicleYear, vehicleModel) {
        this.vehicleName = vehicleName;
        this.vehicleYear = vehicleYear;
        this.vehicleModel = vehicleModel;
    }
    vehicle.prototype.bio = function () {
        console.log("name: ".concat(this.vehicleName, " model: ").concat(this.vehicleModel, " year: ").concat(this.vehicleYear));
    };
    vehicle.prototype.carSound = function (sound) {
        console.log("".concat(this.vehicleName, " makes sound ").concat(sound));
    };
    return vehicle;
}());
exports.vehicle = vehicle;
