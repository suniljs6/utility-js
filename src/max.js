var maxMinUtility = require('./max_min_utility')

const max = (arr) => {
    return maxMinUtility.getResult(arr, arr.length - 1,true);   
}

module.exports = max;