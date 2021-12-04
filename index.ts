import * as fs from 'fs'

import * as d1 from './day1/solution';
import * as d2 from './day2/solution';
import * as d3 from './day3/solution';
// import * as d4 from './day4/solution';
// import * as d5 from './day5/solution';
// import * as d6 from './day6/solution';
// import * as d7 from './day7/solution';
// import * as d8 from './day8/solution';
// import * as d9 from './day9/solution';
// import * as d10 from './day10/solution';
// import * as d11 from './day11/solution';
// import * as d12 from './day12/solution';
// import * as d13 from './day13/solution';
// import * as d14 from './day14/solution';
// import * as d15 from './day15/solution';
// import * as d16 from './day16/solution';
// import * as d17 from './day17/solution';
// import * as d18 from './day18/solution';
// import * as d19 from './day19/solution';
// import * as d20 from './day20/solution';
// import * as d21 from './day21/solution';
// import * as d22 from './day22/solution';
// import * as d23 from './day23/solution';
// import * as d24 from './day24/solution';
// import * as d25 from './day25/solution';


// solutions.ts template
export const part1 = (inputs: Array<string>): string => { return inputs[0] }
export const part2 = (inputs: Array<string>): string => { return inputs[0] }

const readInputs = (path: string): Array<string> => 
  fs.readFileSync(path, {encoding:'utf8', flag:'r'}).split('\n')

const day1 = (): void => {
  const inputs = readInputs('./day1/inputs.txt');
  console.log(d1.part1(inputs))
  console.log(d1.part2(inputs))
}

const day2 = (): void => {
  const inputs = readInputs('./day2/inputs.txt');
  console.log(d2.part1(inputs))
  console.log(d2.part2(inputs))
}

const day3 = (): void => {
  const inputs = readInputs('./day3/inputs.txt');
  console.log(d3.part1(inputs))
  console.log(d3.part2(inputs))
}

day3();

// const day4 = (): void => {
//   const inputs = readInputs('./day4/inputs.txt');
//   console.log(d4.part1(inputs))
//   console.log(d4.part2(inputs))
// }

// const day5 = (): void => {
//   const inputs = readInputs('./day5/inputs.txt');
//   console.log(d5.part1(inputs))
//   console.log(d5.part2(inputs))
// }

// const day6 = (): void => {
//   const inputs = readInputs('./day6/inputs.txt');
//   console.log(d6.part1(inputs))
//   console.log(d6.part2(inputs))
// }

// const day7 = (): void => {
//   const inputs = readInputs('./day7/inputs.txt');
//   console.log(d7.part1(inputs))
//   console.log(d7.part2(inputs))
// }

// const day8 = (): void => {
//   const inputs = readInputs('./day8/inputs.txt');
//   console.log(d8.part1(inputs))
//   console.log(d8.part2(inputs))
// }

// const day9 = (): void => {
//   const inputs = readInputs('./day9/inputs.txt');
//   console.log(d9.part1(inputs))
//   console.log(d9.part2(inputs))
// }

// const day10 = (): void => {
//   const inputs = readInputs('./day10/inputs.txt');
//   console.log(d10.part1(inputs))
//   console.log(d10.part2(inputs))
// }

// const day11 = (): void => {
//   const inputs = readInputs('./day11/inputs.txt');
//   console.log(d11.part1(inputs))
//   console.log(d11.part2(inputs))
// }

// const day12 = (): void => {
//   const inputs = readInputs('./day12/inputs.txt');
//   console.log(d12.part1(inputs))
//   console.log(d12.part2(inputs))
// }

// const day13 = (): void => {
//   const inputs = readInputs('./day13/inputs.txt');
//   console.log(d13.part1(inputs))
//   console.log(d13.part2(inputs))
// }

// const day14 = (): void => {
//   const inputs = readInputs('./day14/inputs.txt');
//   console.log(d14.part1(inputs))
//   console.log(d14.part2(inputs))
// }

// const day15 = (): void => {
//   const inputs = readInputs('./day15/inputs.txt');
//   console.log(d15.part1(inputs))
//   console.log(d15.part2(inputs))
// }

// const day16 = (): void => {
//   const inputs = readInputs('./day16/inputs.txt');
//   console.log(d16.part1(inputs))
//   console.log(d16.part2(inputs))
// }

// const day17 = (): void => {
//   const inputs = readInputs('./day17/inputs.txt');
//   console.log(d17.part1(inputs))
//   console.log(d17.part2(inputs))
// }

// const day18 = (): void => {
//   const inputs = readInputs('./day18/inputs.txt');
//   console.log(d18.part1(inputs))
//   console.log(d18.part2(inputs))
// }

// const day19 = (): void => {
//   const inputs = readInputs('./day19/inputs.txt');
//   console.log(d19.part1(inputs))
//   console.log(d19.part2(inputs))
// }

// const day20 = (): void => {
//   const inputs = readInputs('./day20/inputs.txt');
//   console.log(d20.part1(inputs))
//   console.log(d20.part2(inputs))
// }

// const day21 = (): void => {
//   const inputs = readInputs('./day21/inputs.txt');
//   console.log(d21.part1(inputs))
//   console.log(d21.part2(inputs))
// }

// const day22 = (): void => {
//   const inputs = readInputs('./day22/inputs.txt');
//   console.log(d22.part1(inputs))
//   console.log(d22.part2(inputs))
// }

// const day23 = (): void => {
//   const inputs = readInputs('./day23/inputs.txt');
//   console.log(d23.part1(inputs))
//   console.log(d23.part2(inputs))
// }

// const day24 = (): void => {
//   const inputs = readInputs('./day24/inputs.txt');
//   console.log(d24.part1(inputs))
//   console.log(d24.part2(inputs))
// }

// const day25 = (): void => {
//   const inputs = readInputs('./day25/inputs.txt');
//   console.log(d25.part1(inputs))
//   console.log(d25.part2(inputs))
// }
