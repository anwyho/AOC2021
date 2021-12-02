import { readInputs } from './helpers';
import { part1 } from './day1/solution';

const day1 = (): void => {
  const day1Inputs = readInputs('./day1/inputs.txt');
  console.log(day1Inputs)
  const part1Result = part1(day1Inputs);
  console.log(part1Result)
}

day1();


