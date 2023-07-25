"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaFactory = void 0;
var cheese_pizza_1 = require("./classes/cheese-pizza");
var pepriconi_pizza_1 = require("./classes/pepriconi-pizza");
var veggi_pizza_1 = require("./classes/veggi-pizza");
var PizzaFactory = /** @class */ (function () {
    function PizzaFactory() {
    }
    PizzaFactory.prototype.createPizza = function (type) {
        if (type === 'cheese') {
            return new cheese_pizza_1.CheesePizza();
        }
        else if (type === 'pepperoni') {
            return new pepriconi_pizza_1.PepperoniPizza();
        }
        else if (type === 'veggie') {
            return new veggi_pizza_1.VeggiePizza();
        }
        else {
            throw new Error('Invalid pizza type.');
        }
    };
    return PizzaFactory;
}());
exports.PizzaFactory = PizzaFactory;
