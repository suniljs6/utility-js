const recursion_utility = require('./recursion_utility');


const reduce = (arr, func, additionalParam) => {
    
    let result = additionalParam ? additionalParam : '';
    let reducedResult = recursion_utility.getResult(arr, func, result);
    
    return reducedResult === '' ? undefined : reducedResult;

}

module.exports = reduce;