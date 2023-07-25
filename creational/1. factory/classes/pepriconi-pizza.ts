import { Pizza } from "../interfaces/pizza.interface";

export class PepperoniPizza implements Pizza {
    prepare() {
      console.log('Preparing Pepperoni Pizza...');
    }
  
    bake() {
      console.log('Baking Pepperoni Pizza...');
    }
  
    cut() {
      console.log('Cutting Pepperoni Pizza...');
    }
  
    box() {
      console.log('Packing Pepperoni Pizza...');
    }
  }
  