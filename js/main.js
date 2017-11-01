var user = {
	firstName: 'Ovayo',
	lastName: 'Monti',
	emailAddress: 'montiovayo@gmail.com',
	age: 31,
	salary: 15000,
	children: [{
		name: 'Ave',
		age: 3,
		amount: 1000
	}, {
		name: 'Aphelele',
		age: 18,
		amount: 1500
	}, {
		name: 'Aviwe',
		age: 29,
		amount: 2000
	}]
};

function percentageNumber(number, percent) {
	return (percent / 100) * number
}

function maintenanceDeduction(user) {
	// Loop through the user's children
	   // If child is younger than 18,
	   // add the amount to the total maintenance amount
	// Return the total maintenance amount

	if(!user) {
		return;
	}

	var maintenanceAmount = 0;

	if(user.children && typeof(user.children) == 'object') {
		console.log('--- Inclusion on if');
		for(i=0;i<user.children.length;i++) {
			console.log('--- Within loop. Index: ' + i);
			var child = user.children[i];

			if(child.age && child.amount) {
				if(child.age < 18) {
					maintenanceAmount += child.amount
				}
			}

			console.log(child);
		}
	} else {
		console.log('--- Exclusion on if');
	}

	return maintenanceAmount;
}

function calculateDeductions(user) {
	return maintenanceDeduction(user) + percentageNumber(user.salary, 14)
}

var salary = user.salary,
		deductions = calculateDeductions(user),
		salaryAfterDeductions = salary - deductions;

alert('Get ready');

var salaryDiv = document.getElementById('userSalary');

salaryDiv.innerHTML = salary;
