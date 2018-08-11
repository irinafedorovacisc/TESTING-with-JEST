const obj = require('./object');

describe('getProduct', () => {

    it('should return object with given properties', () => {
       const result = obj.getProduct(1);
       expect(result).toEqual({id: 1, price: 10});   
    });    

});
