
const reverseString = require('./reversestring');

test('reverseString exists',()=>{
   expect(reverseString).toBeDefined()
})

test('string is reversed',()=>{
    expect(reverseString('hello')).toEqual('olleh')
})

test('string is reversed with uppercase',()=>{
    expect(reverseString('HELLO')).toEqual('olleh')
})