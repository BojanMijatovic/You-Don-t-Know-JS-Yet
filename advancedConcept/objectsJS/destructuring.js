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