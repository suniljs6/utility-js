function maxMinUtility(x, y,flag){
	if(flag) {
		return x ^ ((x ^ y) & -(x < y));
	}
	return y ^ ((x ^ y) & -(x < y));

}

function getResult(arr, n,flag) {
	if (n == 0) {
		return arr[0];
	}
	return maxMinUtility(arr[n], getResult(arr,n-1),flag);
}


module.exports = {
	getResult: function(arr,n,flag) {
		return getResult(arr,n,flag);
	}
}