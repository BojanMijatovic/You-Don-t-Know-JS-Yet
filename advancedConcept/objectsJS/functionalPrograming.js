
const hotel = {
  name: 'Hilton',
  address: 'Novi Sad',
  freeRooms: 100,
  priceRent: 45,

  //  rent rooms
  rentRoom(room, daysToStay, clientCash) {
    if (this.freeRooms < room) {
      return console.log(`Sorry we are full`);
    }

    // price single room
    let price = () => {
      let cash = daysToStay * this.priceRent;
      if (clientCash < cash) {
        return console.log(`Sorry you need more $, price is ${cash}`);
      }
      return console.log(`The price is ${cash}$ for ${daysToStay} days to stay per room`);
    }
    this.freeRooms -= room;
    return price();
  },

  //  free rooms
  showFreeRooms() {
    return `How we have ${this.freeRooms} for rent`
  },

  showHotel() {
    return console.log(`Hotel ${this.name} is in ${this.address} with capacity off 100 rooms`);
  }
}



console.log(hotel);

hotel.rentRoom(2, 4, 500);
console.log(hotel);