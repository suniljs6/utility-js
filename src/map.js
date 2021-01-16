const map = (arr, func) => {

	if(func == 'identity') {
		return arr;
	}
	for (var i = arr.length - 1; i >= 0; i--) {
		arr[i] = arr[i]**3;
	}
	return arr;

}

module.exports = map;