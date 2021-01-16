const map = require('./map');

describe('map', () => {

    it('map of [1,2,3], identity is [1,2,3]', () => {
        expect(map([1,2,3],'identity')).toEqual([1,2,3]);
    });

    it('map of [1,2,3], cube is [1,8,27]', () => {
        expect(map([1,2,3],'cube')).toEqual([1,8,27]);
    });

    it('map of [], cube is []', () => {
        expect(map([],'cube')).toEqual([]);
    });

})
