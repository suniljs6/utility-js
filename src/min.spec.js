const min = require('./min');

describe('min', () => {

    it('min of [1,2,3] is [3]', () => {
        expect(min([1,2,3])).toEqual(1);
    });

    it('min of [1] is [1]', () => {
        expect(min([1])).toEqual(1);
    }); 

})
