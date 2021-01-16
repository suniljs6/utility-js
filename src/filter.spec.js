const filter = require('./filter');

describe('filter', () => {

    it('filter of [1,2,3] with x=> true is []', () => {
        expect(filter([],x => true)).toEqual([]);
    });

    it('filter of [1,2,3], with x=> true is [1,2,3]', () => {
        expect(filter([1,2,3],x => true )).toEqual([1,2,3]);
    });

    it('filter of [1,2,3], with x=> false is []', () => {
        expect(filter([1,2,3],x => false )).toEqual([]);
    });

    it('filter of [1,2,3], with x=> x>1 is [2,3]', () => {
        expect(filter([1,2,3],x => x > 1 )).toEqual([2,3]);
    });

	it('filter of ["a","B","c","D"], with filterUpperCase is [B,D]', () => {
        expect(filter(["a","B","c","D"], 'filterUpperCase' )).toEqual(['B','D']);
    });    

})