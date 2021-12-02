import { readInputs } from './helpers';
import * as d1 from './day1/solution';
import * as d2 from './day2/solution';
// import * as d3 from './day3/solution';
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

// export const part1 = (inputs: Array<string>): string => { return '' }
// export const part2 = (inputs: Array<string>): string => { return '' }

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

day2();


