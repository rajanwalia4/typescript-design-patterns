import { Pizza } from "../interfaces/pizza.interface";

export class VeggiePizza implements Pizza {
    prepare() {
      console.log('Preparing Veggie Pizza...');
    }
  
    bake() {
      console.log('Baking Veggie Pizza...');
    }
  
    cut() {
      console.log('Cutting Veggie Pizza...');
    }
  
    box() {
      console.log('Packing Veggie Pizza...');
    }
}