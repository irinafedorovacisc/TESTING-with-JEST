const num = require('./numbers');

describe('absolute', () => {

     it('should return positive if input is positive', () => {
        const result = num.absolute(1);
        expect(result).toBe(1);   
     });
     
     it('should return positive if input is negative', () => {
         const result = num.absolute(-1);
         expect(result).toBe(1);     
      });
     
      it('should return 0 if input is 0', () => {
         const result = num.absolute(0);
         expect(result).toBe(0);    
      });

});

