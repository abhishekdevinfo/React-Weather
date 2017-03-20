// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }

// getTempCallback('Delhi', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp)
//   }
// });

// //--------------------

// //                Promise

// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     },1000);
//   });
// }

// getTempPromise('Delhi').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// });


function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      var c = a + b;
      resolve(c);
    } else {
      reject('These are not numbers');
    }
  });  
}

addPromise(1, 2).then(function (result) {
  console.log("Total ", result);
}, function (err) {
  console.log('Error ', err);
});
