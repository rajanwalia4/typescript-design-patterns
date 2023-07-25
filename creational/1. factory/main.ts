import { PizzaFactory } from "./pizza-factory";
const pizzaFactory = new PizzaFactory();

const cheesePizza = pizzaFactory.createPizza('cheese');
cheesePizza.prepare();
cheesePizza.bake();
cheesePizza.cut();
cheesePizza.box();

const pepperoniPizza = pizzaFactory.createPizza('pepperoni');
pepperoniPizza.prepare();
pepperoniPizza.bake();
pepperoniPizza.cut();
pepperoniPizza.box();

const veggiePizza = pizzaFactory.createPizza('veggie');
veggiePizza.prepare();
veggiePizza.bake();
veggiePizza.cut();
veggiePizza.box();
