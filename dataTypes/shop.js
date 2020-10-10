
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
  }
]

const showStore = () => store.forEach(item => console.log(`${item.item} cost ${item.price}$`))
showStore();

const shopCart = [];

const buyItem = (name) => {
  let num = store.findIndex(item => item.item == name);
  return shopCart.push(store[num])
}

console.log(buyItem('belt'));
console.log(buyItem('shoes'));
console.log(shopCart);