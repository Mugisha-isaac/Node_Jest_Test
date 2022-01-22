
const functions = require('./functions');

test('adding 2 to 2 to get 4',()=>{
    expect(functions.add(2,2)).toBe(4);
})