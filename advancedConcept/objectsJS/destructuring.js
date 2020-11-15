'use strict';

const restaurant = {
  name: 'Adriana',
  location: 'Bul... , Novi Sad , Serbia',
  categories: ['pizza', 'vegetarian', 'burgers'],
  mainMenu: ['pizza', 'pasta', 'breakfast'],
  starterMenu: ['lunch', 'beer', 'juice'],
  orderFood(menuIndex, startMenuIndex) {
    return [this.mainMenu[menuIndex], this.starterMenu[startMenuIndex]]
  }
}

// const [pizza, , burgers] = restaurant.categories;



let [first, second] = restaurant.categories;



[first, second] = [second, first];

const [order1, order2] = restaurant.orderFood(0, 0);
console.log(order1, order2);

const beerShop = {
  type: ['lager', 'ipa', 'red', 'black'],
  vine: ['black', 'white'],
  orderDrink(beerOrder, vineOrder) {
    return [this.type[beerOrder], this.vine[vineOrder]]
  }
}

const [beer, vine] = beerShop.orderDrink(2, 1);

console.log(`You order ${beer} beer and ${vine} vine`);