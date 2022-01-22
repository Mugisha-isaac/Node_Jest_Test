
const functions = require('./functions');

test('adding 2 to 2 to get 4',()=>{
    expect(functions.add(2,2)).toBe(4);
})

test('adding 2 to 2 to not  get 5',()=>{
    expect(functions.add(2,2)).not.toBe(5);
})

test('returning null',()=>{
    expect(functions.isNULL()).toBeNull()
})

// toBeFalsy
test('returning falsy',()=>{
    expect(functions.checkValue(undefined)).toBeFalsy()
})

test('user should be MUGISHA ISAAC object',()=>{
    expect(functions.createUser()).toStrictEqual({first_name:"MUGISHA",last_name:"ISAAC"})
})




// checking for truth and falsy values

// toBeNUll matches only to null
// toBeUndefined matches only to undefined
//toBeDefined opposite of toBeUndefined
// toBeTruthy matches to a statement which is true
// toBeFalsy matches to a statement which is false