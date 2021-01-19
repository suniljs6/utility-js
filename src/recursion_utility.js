const tail = require('./tail');

function recursive(arr,func,flag,result){
	if(arr.length > 0){
		if(flag == 'filter'){
			if(func(arr[0])){
				result.push(arr[0]);
			}
		} else if(flag == 'map') {
			result.push(func(arr[0]));
		}
		recursive(tail(arr),func,flag,result);
	}

}

function getResult(arr,func,flag){
	let result = [];
	recursive(arr,func,flag,result);
	return result;
}

module.exports = {
	getResult: function(arr,func,flag) {
		return getResult(arr,func,flag);
	}
}