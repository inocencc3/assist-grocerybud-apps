import { printItem } from './modules/print-module.js';

let groceries = [];
groceries = [{
  itemId: 1,
  itemName: 'Egg'
},{
  itemId: 2,
  itemName: 'Orange'
}];

printItem(groceries);