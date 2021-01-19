const recursion_utility = require('./recursion_utility');

const filter = (arr, func) => {
	if(func == 'filterUpperCase') {
		func = x => x <= 'Z';
	}
	return recursion_utility.getResult(arr,func,'filter');
}

module.exports = filter;