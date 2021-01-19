const map = (arr, func) => {

	if(func == 'identity') {
		func = x => x;
	} else if (func == 'cube') {
		func = x => x**3;
	}
	for (var i = arr.length - 1; i >= 0; i--) {
		arr[i] = func(arr[i])
	}
	return arr;

}

module.exports = map;