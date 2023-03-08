import { FizzBuzz } from "../libs/FizzBuzz";

describe("FizzBuzz", () => {
  
  it.each([
    { num: 1, expected: "1" },
    { num: 2, expected: "2" },
    { num: 3, expected: "Fizz" },
    { num: 4, expected: "4" },
    { num: 5, expected: "Buzz" },
    { num: 10, expected: "Buzz" },
    { num: 12, expected: "Fizz" },
    { num: 15, expected: "FizzBuzz" },
  ])("returns $expected when given $num", ({ num, expected }) => {
    expect(FizzBuzz.of(num)).toBe(expected);
  });
});
