var async = require('async');

function doSomething(log, callback) {
  setTimeout(function () {
    console.log(log);
    callback();
  }, 2000);
};

// async.series [ Array of methods that accept callback ],
// function() { final callback }

var asyncMethods = [];

asyncMethods.push(function (p_callback) {
  doSomething("Get a user", p_callback);
});

asyncMethods.push(function (p_callback) {
  doSomething("Add Bob as a friend", p_callback);
});

asyncMethods.push(function (p_callback) {
  doSomething("Follow master wizard", p_callback);
});

asyncMethods.push(function (p_callback) {
  doSomething("Save changes to DB", p_callback);
});

async.series(asyncMethods, function() {
  console.log("All done!");
})


//Slow example:
// doSomething("Get a user", function() {
//   doSomething("Add Bob as a friend", function () {
//     doSomething("Save changes to the DB", function () {
//       console.log("All done!");
//     })
//   })
// });
