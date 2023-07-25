"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PepperoniPizza = void 0;
var PepperoniPizza = /** @class */ (function () {
    function PepperoniPizza() {
    }
    PepperoniPizza.prototype.prepare = function () {
        console.log('Preparing Pepperoni Pizza...');
    };
    PepperoniPizza.prototype.bake = function () {
        console.log('Baking Pepperoni Pizza...');
    };
    PepperoniPizza.prototype.cut = function () {
        console.log('Cutting Pepperoni Pizza...');
    };
    PepperoniPizza.prototype.box = function () {
        console.log('Packing Pepperoni Pizza...');
    };
    return PepperoniPizza;
}());
exports.PepperoniPizza = PepperoniPizza;
