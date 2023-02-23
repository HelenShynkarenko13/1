const { helloWorld } = require('./result'); 

describe('result', () => {
  test('should return HelloWorld', () => {
    const result = helloWorld(); 
    expect(result).toBe('HelloWorld'); 
  });
});
