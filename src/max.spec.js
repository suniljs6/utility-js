const max = require('./max');

describe('max', () => {

    it('max of [1,2,3] is [3]', () => {
        expect(max([1,2,3])).toEqual(3);
    });

    it('max of [1] is [1]', () => {
        expect(max([1])).toEqual(1);
    }); 

})
