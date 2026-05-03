function getUser(userId, callback) {
  setTimeout(() => {
    console.log("Fetched user");
    callback(null, { id: userId, name: "Kushagra" });
  }, 500);
}

function getOrders(userId, callback) {
  setTimeout(() => {
    console.log("Fetched orders");
    callback(null, [100, 200, 300]);
  }, 500);
}

function calculateTotal(orders, callback) {
  setTimeout(() => {
    console.log("Calculated total");
    const total = orders.reduce((a, b) => a + b, 0);
    callback(null, total);
  }, 500);
}

// callback verrsion

getUser(1, (err, data) => {
  if (err) {
    throw new Error("No user ");
  }
  getOrders(userId, (err, orderData) => {
    if (err) {
      throw new Error("No user ");
    }
    calculateTotal(orderData,(err,total)=>{
        if (err) {
            throw new Error("No user ");
          } 
       console.log("order value is ")   
    })
  });
});
