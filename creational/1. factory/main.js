"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pizza_factory_1 = require("./pizza-factory");
var pizzaFactory = new pizza_factory_1.PizzaFactory();
var cheesePizza = pizzaFactory.createPizza('cheese');
cheesePizza.prepare();
cheesePizza.bake();
cheesePizza.cut();
cheesePizza.box();
var pepperoniPizza = pizzaFactory.createPizza('pepperoni');
pepperoniPizza.prepare();
pepperoniPizza.bake();
pepperoniPizza.cut();
pepperoniPizza.box();
var veggiePizza = pizzaFactory.createPizza('veggie');
veggiePizza.prepare();
veggiePizza.bake();
veggiePizza.cut();
veggiePizza.box();
