const max = (arr) => {
    return getResult(arr, arr.length - 1);   
}

function maxUtility(x, y){
	return x ^ ((x ^ y) & -(x < y));

}

function getResult(arr, n) {
	if (n == 0) {
		return arr[0];
	}
	return maxUtility(arr[n], getResult(arr,n-1));
}

module.exports = max;