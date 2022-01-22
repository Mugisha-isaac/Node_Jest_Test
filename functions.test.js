
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


// less than and greater than

test('should be under 2000',()=>{
    expect(1000).toBeLessThan(2000);
})


test('should be greater than 2000',()=>{
    expect(3000).toBeGreaterThan(2000);
})

test('should be less than or equal to 2000',()=>{
    expect(2000).toBeLessThanOrEqual(2000);
})

// Regex

test('There is no I in Team',()=>{
    expect('team').not.toMatch(/I/);
})

// Arrays

test('Admin should be in usernames',()=>{
    const usernames = ['John','Peter','admin']
    expect(usernames).toContain('admin')
})


// working with async data

test('user fetched name should be Leanne Graham',()=>{
    expect.assertions(1);
    return functions.fetchUser().then(data =>{
        expect(data.name).toBe('Leanne Graham');
    })
})







// checking for truth and falsy values

// toBeNUll matches only to null
// toBeUndefined matches only to undefined
//toBeDefined opposite of toBeUndefined
// toBeTruthy matches to a statement which is true
// toBeFalsy matches to a statement which is false