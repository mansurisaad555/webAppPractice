"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.toyotaCar = void 0;
var vehicle_1 = require("./vehicle");
var toyotaCar = /** @class */ (function (_super) {
    __extends(toyotaCar, _super);
    function toyotaCar(model, year, sound, specialFeature) {
        var _this = _super.call(this, "Toyota", year, model) || this;
        _this.isReliable = true;
        _this.sound = sound;
        _this.specialFeature = specialFeature;
        return _this;
    }
    toyotaCar.prototype.bio = function () {
        _super.prototype.bio.call(this);
        console.log("reliability? ".concat(this.isReliable));
        if (this.specialFeature) {
            console.log("special feature: ".concat(this.specialFeature));
        }
    };
    toyotaCar.prototype.carSound = function () {
        _super.prototype.carSound.call(this, this.sound);
    };
    return toyotaCar;
}(vehicle_1.vehicle));
exports.toyotaCar = toyotaCar;
