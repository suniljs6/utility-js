const recursion_utility = require('./recursion_utility');

const map = (arr, func) => {

	if(func == 'identity') {
		func = x => x;
	} else if (func == 'cube') {
		func = x => x**3;
	}
	return recursion_utility.getResult(arr,func,'map');

}

module.exports = map;