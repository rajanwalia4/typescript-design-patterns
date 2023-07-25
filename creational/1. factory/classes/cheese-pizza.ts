import { Pizza } from "../interfaces/pizza.interface";

export class CheesePizza implements Pizza {
    prepare() {
      console.log('Preparing Cheese Pizza...');
    }
  
    bake() {
      console.log('Baking Cheese Pizza...');
    }
  
    cut() {
      console.log('Cutting Cheese Pizza...');
    }
  
    box() {
      console.log('Packing Cheese Pizza...');
    }
  }
  