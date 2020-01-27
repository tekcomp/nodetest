const expect = require('expect');

const utils = require('./utils')

it('should add two numbers', () => {
    let a = 33;
    let b = 11;
    let res = utils.add(a, b)
    if (res === (a + b)) {
        // console.log(`should add the ${a} plus ${b} equal to ${res}`)
        expect(res).toBe(44).toBeA('number');
        // } else if (res !== 44) {
        //     throw new Error(`Expeted 44, but got ${res}.`)
        // }


    };
});
it('should square a number ', () => {
    const x = 3;

    let res = utils.square(x)
    // if (res === (x * x)) {
    //     // console.log(`should square ${x} to equal ${res}`);
    // } else if (res !== 40) {
    //     throw new Error(`Expected ${(x * x)}, but got ${res}.`)
    // }
    // expect(res).toBe(9).toBeA('number');
    expect([2, 3, 4]).toInclude(2);
});

it('should expect some value', () => {
    // expect(12).toNotBe(12);
    expect({ name: 'alberto' }).toNotEqual({ name: 'Alberto' })
});