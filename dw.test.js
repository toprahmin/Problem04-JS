const { TestScheduler } = require('jest');
const DogWalker = require('./DogWalker');

test("Test uno", () =>{
    let dw = new DogWalker();
    let expected = dw.numberOfWalksCalculator([1, 1, 3, 1, 2, 1, 3, 3, 3, 3]);  // 1 => 4, 3 => 5, 2 => 1
    let actual = 6;
    expect(expected).toEqual(actual);
});

test("Test dos", () =>{
    let dw = new DogWalker();
    let expected = dw.numberOfWalksCalculator([10, 20, 10, 10, 30, 50, 10, 20, 30]);
    let actual = 5;
    expect(expected).toEqual(actual);
});