var names = ['Andrew', 'Edward', 'Jen'];
//
// names.forEach(function(name) {
//   console.log(name);
// });
//
// // using arrows function -> simplify code even further, can be use in place of anonymous function
// // curly braces allow us to have a multiple statement, name is the argument that is passed in
// names.forEach((name) => {
//   console.log('arrow func', name);
// });
//
// names.forEach((name) => console.log(name)); // this gets even simpler

// var returnMe = (name) => name+'!'; // defined a simple expression, whatever you defined automatically will get return

// console.log(returnMe('Edward'));


// var person = {
//   name: 'Edward',
//   greet: function(){
//     names.forEach((name) => { /* this will refer to the parent object, it doesn't get updated*/
//       console.log(this.name + ' hi from ' + name);
//     });
//     // names.forEach(function(name){ // this gets updated
//     //   console.log(this.name + ' hi from '+ name); // this wont work because this deosn't refer to the object, but refer to something else
//     // });
//   }
// }
//
// person.greet();

// The .map function will take a callback(currentValue, index, the array object the current element belongs to), and "this" value(if none it will be undefined)
// array.map(function(currentVal,index,arr), thisValue)


/* challenge area */
function add(a, b){
  return a+b;
}

console.log(add(1,3));
console.log(add(9,0));


/* expression */
var adder = (a,b) => a+b;

console.log(adder(a,b));
