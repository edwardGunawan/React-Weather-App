// /* there is a problem in this because it calls for two times callback */
// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('city not found'); // we pass in the string if there is error
// }
//
// /* call this callback */
// getTempCallback('philadelphia',function(err, temp){ // two function error and temp
//   if(err){
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
//
// });
//
// /* this is where the promies place takes place */
// function getTempPromise(location){
//   return new Promise(function(resolve, reject){
//     resolve (79);
//     reject('City not found');
//   });
// }
//
// /* then let us specify a success an error callback of two error function that
// can call only one time , callback will get fired if there is a resolve or reject*/
// getTempPromise().then(function(temp){
//   console.log('promise success', temp);
// }, function(err){
//   console.log('promise error', err);
// });


// challenge area

/* so in this case resolve and reject is a callback function that will be called
only once, and in the call back then function, it will call on either err or the if
its success */
function addPromise(a, b){
  return new Promise(function(resolve,reject){
    if(typeof a === 'number' && typeof b=== 'number') {
      resolve(a+b);
    } else {
      reject('both are not number');
    }
  });
}

addPromise('philadelphia').then(function(answer){
  console.log('The add of your number is', answer);
}, function(err){
  console.log('error',err);
})
