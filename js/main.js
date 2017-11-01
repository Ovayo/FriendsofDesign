var user = {
	firstName: 'Ovayo',
	lastName: 'Monti',
	emailAddress: 'montiovayo@gmail.com',
	age: 31,
	children: [{
		name: 'Ave',
		childlastName: 'Monti',
		age: 3
	}, {
		name: 'Aphelele',
		childlastName: 'Monti',
		age: 23
	}
	, {
		name: 'Aviwe',
		childlastName: 'Monti',
		age: 29
	}]
};

console.log(user.firstName); //'Ovayo'
console.log(user.lastName);  //'Monti'

console.log(user.children);         //[{name: 'Ave', age: 3}, {name: 'Aphelele', age: 23}, {name: 'Aviwe', age: 29}]
console.log(user.children[0]);      //{name: 'Ave', age: 3}
console.log(user.children[1].name); //'Aphelele'

console.log(user.firstName + user.lastName); //'OvayoMonti'

console.log(user.firstName + ' ' + user.lastName); //'Ovayo Monti'
console.log(`${user.firstName} ${user.lastName}`); //'Ovayo Monti'

console.log(1 + 1);   //2
console.log('1 + 1'); //'1 + 1'
console.log(`${0 + 1} + ${101 - 100}`); //'1 + 1'

user.childName = user.children.name + ' ' + user.children.childlastName;
user.name = user.firstName + ' ' + user.lastName;

function greetUser(firstName) {
	if(firstName) {
		alert('Hello, ' + firstName);
	} else {
		console.log('No firstName was specified');
	}
}

function sumNumber(number=0) {
	alert(127 + number);
}

function percentageNumber(thisIs, percentOf) {
	return (thisIs / percentOf) * 100
}

var price = 134754.65,
    AgeMin = 50,
    AgeMax = 65,
    taxBreakOnAgeMin = 10,
    taxBreakOnAgeMax = 20,
    taxBreakOnChildren = 10;

var discount = 0,
		totalPrice = price;

// if ( (user.age >= oldAge) && () user.children.length > 0 ) {
// 	var totalPrice = price - taxBreakOnAge - taxBreakOnChildren
// } else if (user.age >= oldAge) {
// 	var totalPrice = price - taxBreakOnAge
// } else {
// 	var totalPrice = price
// }

// if (user.age >= AgeMax) {
// 	totalPrice = totalPrice - taxBreakOnAgeMax;
// }

// if (user.age >= AgeMin && user.age < AgeMax) {
// 	totalPrice = totalPrice - taxBreakOnAgeMin;
// }

if (user.age >= AgeMax) {
	totalPrice = totalPrice - taxBreakOnAgeMax;
} else if (user.age >= AgeMin) {
	totalPrice = totalPrice - taxBreakOnAgeMin;
}

alert(totalPrice + ' a saving of ' + (price - totalPrice));

totalPrice = totalPrice - ( user.children.length * taxBreakOnChildren )

alert(totalPrice + ' a saving of ' + (price - totalPrice));

// if (user.children.length > 0) {
// 	totalPrice = totalPrice - taxBreakOnChildren;
// }

// if(user.lastName == 'Monti') {
// 	alert('Xhosa');
// } else if ( user.lastName == 'Mkhiza') {
// 	alert('Youre High');
// } else {
// 	alert('Sober');
// }

function lang(eng) {
	if(user.lastName == 'Monti') {
		alert('Hi');
	} else if ( user.lastName == 'Mkhize') {
		alert('Hello');
	} else {
		alert('Bye');
	}
}

// switch statement session
switch(user.age) {
  case 30:
  	console.log('30');
    break;
  case 31:
  	console.log('31');
    break;
  case 35:
  	console.log('35');
    break;
  default:
  	console.log('Not 30, 31 or 35')
}

alert('About to break')

//While Loops Session
var siblings = [
	'Ave',
	'Aphelele',
	'Aviwe'
];

// var count = 0;
// while(count < invoiceItems) {
// 	console.log(count);

// 	// currentValue = currentValue + 1
// 	// currentValue += 1
// 	count++
// }

for(i=0;i<siblings.length;i++) {
	console.log( siblings + ' are ' + user.name  + "'s" + ' Kids ' );
}


// for(i=0;i<user.children.length;i++) {
// 	console.log( user.children[i].name + ' are ' + user.name  + "'s" + ' Kids ' );
// }




