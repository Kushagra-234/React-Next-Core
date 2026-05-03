function login(username, password, callback) {
  setTimeout(() => {
    console.log("User logged in");
    callback(null, { userId: 101, username });
  }, 500);
}

function getProfile(userId, callback) {
  setTimeout(() => {
    console.log("Fetched profile");
    callback(null, { userId, name: "Kushagra", age: 23 });
  }, 500);
}

function getPosts(userId, callback) {
  setTimeout(() => {
    console.log("Fetched posts");
    callback(null, ["post1", "post2", "post3"]);
  }, 500);
}

// output;
// User Kushagra has 3 posts

login("kushagra", "1234", (err, user) => {
  getProfile(user.userId, (err, userDetails) => {
    getPosts(userDetails.userId, (err, postData) => {
      console.log();
    });
  });
});

// function loginPromised(username, password, callback) {
//   return new Promise((resolve, reject) => {
//     resolve(callback);
//   });
// }

// function getProfile(userId, callback) {
//   return new Promise((resolve, reject) => {
//     resolve(callback);
//   });
// }

// loginPromised()

function loginPromised(username, password) {
  return new Promise((resolve, reject) => {
    login(username, password, (err, data) => {
      if (err) {
        reject("Error");
      }

      resolve(data);
    });
  });
}

const nayaPromise = new Promise((resolve, reject) => {
  resolve("Hey");
});

nayaPromise.then((data) => {
  console.log(data);
});
