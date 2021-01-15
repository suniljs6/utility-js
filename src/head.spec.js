const head = require('./head');

describe('Head', () => {

    it('Head of 1,2,3 is 1', () => {
        expect(head([1,2,3])).toEqual(1);
    });

    it('Head of empty list is null', () => {
        expect(head([])).toEqual(undefined);
    });

})
