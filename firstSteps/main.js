
//  hide inside scope
// closure


function showBalance(userName, amount) {
  let total = amount;
  function showUser() {
    console.log(`${userName} have total ${total}$`);
  }
  return showUser();
}

showBalance('Ted', 400);