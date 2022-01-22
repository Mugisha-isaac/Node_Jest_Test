
const reverseString = require('./reversestring');

test('reverseString exists',()=>{
   expect(reverseString).toBeDefined()
})

test('string is reversed',()=>{
    expect(reverseString('hello')).toEqual('olleh')
})