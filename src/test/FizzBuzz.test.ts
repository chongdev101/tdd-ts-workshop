import { FizzBuzz } from "../libs/FizzBuzz";

describe("FizzBuzz", () => {
  it("returns 1 when given 1", () => {
    expect(FizzBuzz.of(1)).toBe("1");
  });

  it("returns 2 when given 2", () => {
    expect(FizzBuzz.of(2)).toBe("2");
  });

  it("returns Fizz when given 3", () => {
    expect(FizzBuzz.of(3)).toBe("Fizz");
  });

  it("returns 4 when given 4", () => {
    expect(FizzBuzz.of(4)).toBe("4");
  });

  it("returns Buzz when given 5", () => {
    expect(FizzBuzz.of(5)).toBe("Buzz");
  });

  it("returns Buzz when given 10", () => {
    expect(FizzBuzz.of(10)).toBe("Buzz");
  });

  it("returns Fizz when given 12", () => {
    expect(FizzBuzz.of(12)).toBe("Fizz");
  });

  it("returns FizzBuzz when given 15", () => {
    expect(FizzBuzz.of(15)).toBe("FizzBuzz");
  });
});
