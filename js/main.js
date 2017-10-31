var user = {
	firstName: 'Ovayo',
	lastName: 'Monti',
	emailAddress: 'montiovayo@gmail.com',
	age: 31,
	children: [{
		name: 'One',
		age: 3
	}, {
		name: 'Two',
		age: 4
	}
	, {
		name: 'Three',
		age: 5
	}]
};

console.log(user.firstName); //'Ovayo'
console.log(user.lastName);  //'Monti'

console.log(user.children);         //[{name: 'One', age: 3}, {name: 'Two', age: 4}, {name: 'Three', age: 5}]
console.log(user.children[0]);      //{name: 'One', age: 3}
console.log(user.children[1].name); //'Two'

console.log(user.firstName + user.lastName); //'OvayoMonti'

console.log(user.firstName + ' ' + user.lastName); //'Ovayo Monti'
console.log(`${user.firstName} ${user.lastName}`); //'Ovayo Monti'

console.log(1 + 1);   //2
console.log('1 + 1'); //'1 + 1'
console.log(`${0 + 1} + ${101 - 100}`); //'1 + 1'


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

function lang(xhosa) {
	if(user.lastName == 'Monti') {
		alert('Molo');
	} else if ( user.lastName == 'Mkhize') {
		alert('Sawbona');
	} else {
		alert('Bye');
	}
}
// switch(user.age) {
//   case 30:
//   	alert('30');
//     break;
//   case 31:
//   	alert('31');
//     break;
//   case 35:
//   	alert('35');
//     break;
//   default:
// }
