const strings = require('./string');

describe('greet', () => {

     it('should return the greeting message', () => {
        const result = strings.greet('Irina');
        expect(result).toMatch(/Irina/); 
        expect(result).toContain('Irina');  
     });    

});

