const arr = require('./arrays');

describe('getCurrencies', () => {

    it('should return supported Currencies', () => {
       const result = arr.getCurrencies();
       expect(result).toContain('USD');
       expect(result).toContain('AUD');
       expect(result).toContain('EUR');

       //better way
       expect(result).toEqual(expect.arrayContaining(['USD','AUD','EUR']));
    });    

});