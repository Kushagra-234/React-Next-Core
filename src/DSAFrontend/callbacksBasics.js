// function getUser(userId, callback) {
//   setTimeout(() => {
//     console.log("Fetched user");
//     callback(null, { id: userId, name: "Kushagra" });
//   }, 500);
// }

// function getOrders(userId, callback) {
//   setTimeout(() => {
//     console.log("Fetched orders");
//     callback(null, [100, 200, 300]);
//   }, 500);
// }

// function calculateTotal(orders, callback) {
//   setTimeout(() => {
//     console.log("Calculated total");
//     const total = orders.reduce((a, b) => a + b, 0);
//     callback(null, total);
//   }, 500);
// }

// function getInventory(callback) {
//   setTimeout(() => {
//     console.log("inventory created ");
//     callback();
//   }, 2000);
// }

// function createOrder(callback) {
//   setTimeout(() => {
//     console.log("order created");
//     callback();
//   }, 1000);
// }

// function executeOrder(callback) {
//   setTimeout(() => {
//     console.log("order executed");
//   }, 2000);
// }

// getInventory(() => {
//   createOrder(() => {
//     executeOrder(()=>{
//         console.log("all Done")
//     });
//   });
// });
// // createOrder();
// // executeOrder();

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

getUser(1, (err, user) => {
  getOrders(user.id, (err, orders) => {
    calculateTotal(orders, (err, total) => {
      console.log(`User ${user.name} has total order amount: ${total}`);
    });
  });
});

// ye to callback ka tareeka hai

function getUser(id) {
  return new Promise((resolve, reject) => {
    resolve({ id: userId, name: "Kushagra" });
  });
}

function getOrders(userId, callback) {
 return new Promise((resolve,reject)=>{
    resolve()

 })

  setTimeout(() => {
    console.log("Fetched orders");
    callback(null, [100, 200, 300]);
  }, 500);
}

getUser.then((res) => {
  getOrders();
});

// checkInventory(createOrder());

// checkInventory(() => {
//   createOrder();
// });
