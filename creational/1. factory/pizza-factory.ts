import { CheesePizza } from "./classes/cheese-pizza";
import { PepperoniPizza } from "./classes/pepriconi-pizza";
import { VeggiePizza } from "./classes/veggi-pizza";
import { Pizza } from "./interfaces/pizza.interface";

export class PizzaFactory {
    createPizza(type: string): Pizza {
        if (type === 'cheese') {
            return new CheesePizza();
        } else if (type === 'pepperoni') {
            return new PepperoniPizza();
        } else if (type === 'veggie') {
            return new VeggiePizza();
        } else {
            throw new Error('Invalid pizza type.');
        }
    }
}
  