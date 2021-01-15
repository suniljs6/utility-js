const tail = require('./tail');

describe('tail', () => {

    it('Tail of [1,2,3] is [2,3]', () => {
        expect(tail([1,2,3])).toEqual([2,3]);
    });

    it('Tail of [1] is []', () => {
        expect(tail([1])).toEqual([]);
    });

	it('Tail of [] is []', () => {
        expect(tail([])).toEqual([]);
    });    

})
