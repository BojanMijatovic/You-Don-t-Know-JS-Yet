
const store = [
  {
    item: 'pants',
    price: 20
  },
  {
    item: 'belt',
    price: 5
  },
  {
    item: 't-shirt',
    price: 11
  },
  {
    item: 'shoes',
    price: 33
  },
  {
    item: 'sox',
    price: 2
  },
  {
    item: 'tie',
    price: 14
  }
]

// show items on store
const showStore = () => store.forEach(item => console.log(`${item.item} cost ${item.price}$`));

const shopCart = [];

// buy items and add to cart  
const buyItem = (name) => {
  let num = store.findIndex(item => item.item == name);
  return shopCart.push(store[num])
}

//  show cart
const showCart = () => shopCart.map((item, id) => console.log(`${id + 1} ${item.item} ${item.price}$`))

// total money spend in cart
const totalCart = () => {
  let total = shopCart.map(item => item.price += item.price);
  let totalAmount = total.reduce((prev, acc) => prev + acc);
  return console.log(`Your total in cart is ${totalAmount}$`);
}

//  filter shop
const filterShop = (searchItem) => {
  // create new arr with searchItem parameter
  let items = store.filter(itemToFind => itemToFind.item.toLowerCase().includes(searchItem.toLowerCase()));
  return items.forEach(item => console.log(`You have ${item.item} with price of ${item.price}$`))
};

//  sort items by min price
const sortItemsByMinPrice = () => {
  return store.sort((minPrice, maxPrice) => {
    if (minPrice.price > maxPrice.price) {
      return 1;
    } if (minPrice.price < maxPrice.price) {
      return -1;
    } else {
      return 0
    }
  })
}

//  sort items by max price
const sortItemsByMaxPrice = () => {
  return store.sort((minPrice, maxPrice) => {
    if (minPrice.price < maxPrice.price) {
      return 1;
    } if (minPrice.price > maxPrice.price) {
      return -1;
    } else {
      return 0
    }
  })
}

//  remove item from Cart
const removeFormCart = (removeItem) => {
  let itemIndex = shopCart.findIndex(item => item.item == removeItem);
  if (itemIndex > -1) {
    shopCart.splice(itemIndex, 1);
  }
}


// showStore();

buyItem('sox');
buyItem('belt');
buyItem('tie');
buyItem('pants');
console.log(shopCart);

// showCart();


// filterShop('t');

// removeFormCart('belt');
console.log(shopCart);

totalCart();
// console.log(sortItemsByMinPrice());
console.log(sortItemsByMaxPrice());


