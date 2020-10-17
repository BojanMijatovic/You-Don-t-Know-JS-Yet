
const hotel = {
  name: 'Hilton',
  address: 'Novi Sad',
  freeRooms: 100,
  priceRent: 45,
  rooms: [],

  rentRoom(clientName, clientId, clientMoney, daysToStay) {
    let moneyForMoreDays = daysToStay * this.priceRent;
    let change = clientMoney - (daysToStay * this.priceRent);

    if (clientMoney < this.priceRent || moneyForMoreDays > clientMoney) {
      return console.log(`Sorry ${clientName} you need more money for rent apartment to stay for one night`);
    }

    if (change) {
      console.log(`Your change is ${change}$`);
      return this.rooms.push({ clientName, clientId })
    }

  },

  //  show Clients list
  showClients() {
    return this.rooms.map((client, id) => console.log(`${id + 1} ${client.clientName} with id ${client.clientId}`))
  },

  // show capacity 
  showCapacity() {
    return console.log(`We have more ${this.freeRooms -= this.rooms.length} free rooms`);
  },

  //show hotel name 
  showHotel() {
    return console.log(`Hotel ${this.name} is in ${this.address} with capacity off 100 rooms`);
  },

  findClient(client) {
    const clientId = this.rooms.filter(room => room.clientName.includes(client))
    return clientId.forEach(customer => console.log(` You have ${customer.clientName} with id ${customer.clientId}`))
  }
}

hotel.rentRoom('alex', '12', 12, 1);
hotel.rentRoom('fred', '44', 100, 3);
hotel.rentRoom('nick', '44', 700, 3);
hotel.rentRoom('nicole', '4888', 700, 3);
hotel.rentRoom('ted', '123', 500, 3);
console.log(hotel);
// hotel.showCapacity();
hotel.showClients();
console.log(hotel.findClient('n'));