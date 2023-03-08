import PrimeFactors from "../libs/PrimeFactors";

describe("PrimeFactors", () => {
  it.each([
    { num: 2, expected: [2] },
    { num: 3, expected: [3] },
    { num: 4, expected: [2, 2] },
    { num: 5, expected: [5] },
    { num: 6, expected: [2, 3] },
    { num: 7, expected: [7] },
    { num: 8, expected: [2, 2, 2] },
    { num: 9, expected: [3, 3] },
    { num: 10, expected: [2, 5] },
    { num: 11, expected: [11] },
    { num: 12, expected: [2, 2, 3] },
    { num: 13, expected: [13] },
    { num: 14, expected: [2, 7] },
    { num: 15, expected: [3, 5] },
    { num: 16, expected: [2, 2, 2, 2] },
    { num: 17, expected: [17] },
    { num: 18, expected: [2, 3, 3] },
    { num: 19, expected: [19] },
    { num: 20, expected: [2, 2, 5] },
    { num: 120, expected: [2, 2, 2, 3, 5] },
    { num: 3240, expected: [2, 2, 2, 3, 3, 3, 3, 5] },
  ])("returns $expected when given $num", ({ num, expected }) => {
    expect(PrimeFactors.generate(num)).toEqual(expected);
  });
});
