import { readInputs } from './helpers';
import * as d1 from './day1/solution';

const day1 = (): void => {
  const inputs = readInputs('./day1/inputs.txt');
  console.log(d1.part1(inputs))
  console.log(d1.part2(inputs))
}

day1();


