//We've defined a function, countOnline; use a for...in statement within this function to loop through the users in the users object and return the number of users whose online property is set to true.

//original
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  // change code below this line

  // change code above this line
}

console.log(countOnline(users));



//SOlution
let n = 0;
	for (let user in obj) if (obj[user].online) n++;
	return n;
//ALternativesolution
function countOnline(obj) {
  // change code below this line
  let usersOnline = 0;
	for (let somevariable in obj) if (obj[somevariable].online) usersOnline++;
	return usersOnline;
  }

//To generate a list of all the keys in this object, see below
return Object.keys(users)
