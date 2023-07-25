"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheesePizza = void 0;
var CheesePizza = /** @class */ (function () {
    function CheesePizza() {
    }
    CheesePizza.prototype.prepare = function () {
        console.log('Preparing Cheese Pizza...');
    };
    CheesePizza.prototype.bake = function () {
        console.log('Baking Cheese Pizza...');
    };
    CheesePizza.prototype.cut = function () {
        console.log('Cutting Cheese Pizza...');
    };
    CheesePizza.prototype.box = function () {
        console.log('Packing Cheese Pizza...');
    };
    return CheesePizza;
}());
exports.CheesePizza = CheesePizza;
