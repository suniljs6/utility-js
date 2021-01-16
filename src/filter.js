const filter = (arr, func) => {
	if(func == 'filterUpperCase') {
		func = x => x <= 'Z';
	}
	var result = [];
	for (var i = 0; i < arr.length ; i++) {
		if(func(arr[i])){
			result.push(arr[i]);
		}
	}
	return result;
}

module.exports = filter;