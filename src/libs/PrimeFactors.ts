// export class PrimeFactors {
//     static generate(n: number): number[] {
//         let factors: number[] = [];
//         let divisor = 2;

//         while (n > 1) {
//             while (n % divisor === 0) {
//                 factors.push(divisor);
//                 n /= divisor;
//             }
//             divisor++;
//         }

//         return factors;
//     }
// }

const PrimeFactors = {
  generate: (n: number): number[] => {
    let factors: number[] = [];
    let divisor = 2;

    while (n > 1) {
      while (n % divisor === 0) {
        factors.push(divisor);
        n /= divisor;
      }
      divisor++;
    }

    return factors;
  },
};

export default PrimeFactors;
