"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VeggiePizza = void 0;
var VeggiePizza = /** @class */ (function () {
    function VeggiePizza() {
    }
    VeggiePizza.prototype.prepare = function () {
        console.log('Preparing Veggie Pizza...');
    };
    VeggiePizza.prototype.bake = function () {
        console.log('Baking Veggie Pizza...');
    };
    VeggiePizza.prototype.cut = function () {
        console.log('Cutting Veggie Pizza...');
    };
    VeggiePizza.prototype.box = function () {
        console.log('Packing Veggie Pizza...');
    };
    return VeggiePizza;
}());
exports.VeggiePizza = VeggiePizza;
