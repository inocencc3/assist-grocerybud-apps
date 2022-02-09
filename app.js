import { printItem2 as renderBasket } from './modules/print.js';
import { addBasket, editBasket } from './modules/add.js';

export let groceries = [];
groceries = [{
  itemId: 1,
  itemName: 'Egg'
},{
  itemId: 2,
  itemName: 'Orange'
}];

let blankArray = [];

renderBasket(groceries);


