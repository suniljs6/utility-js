var maxMinUtility = require('./max_min_utility')

const min = (arr) => {
    return maxMinUtility.getResult(arr, arr.length - 1,false);   
}

module.exports = min;