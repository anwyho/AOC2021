// solutions.ts template
export const part1 = (inputs: Array<string>): string => { return inputs[0] }
export const part2 = (inputs: Array<string>): string => { return inputs[0] }

import * as fs from 'fs'
const readInputs = (path: string): Array<string> => 
  fs.readFileSync(path, {encoding:'utf8', flag:'r'}).split('\n')


import * as d1 from './day1/solution'
const day1 = (): void => {
  const inputs = readInputs('./day1/inputs.txt')
  console.log(d1.part1(inputs))
  console.log(d1.part2(inputs))
}

import * as d2 from './day2/solution'
const day2 = (): void => {
  const inputs = readInputs('./day2/inputs.txt')
  console.log(d2.part1(inputs))
  console.log(d2.part2(inputs))
}

import * as d3 from './day3/solution'
const day3 = (): void => {
  const inputs = readInputs('./day3/inputs.txt')
  console.log(d3.part1(inputs))
  console.log(d3.part2(inputs))
}

import * as d4 from './day4/solution'
const day4 = (): void => {
  const inputs = readInputs('./day4/inputs.txt')
  console.log(d4.part1(inputs))
  console.log(d4.part2(inputs))
}

// import * as d5 from './day5/solution'
// const day5 = (): void => {
//   const inputs = readInputs('./day5/inputs.txt')
//   console.log(d5.part1(inputs))
//   console.log(d5.part2(inputs))
// }

// import * as d6 from './day6/solution'
// const day6 = (): void => {
//   const inputs = readInputs('./day6/inputs.txt')
//   console.log(d6.part1(inputs))
//   console.log(d6.part2(inputs))
// }

// import * as d7 from './day7/solution'
// const day7 = (): void => {
//   const inputs = readInputs('./day7/inputs.txt')
//   console.log(d7.part1(inputs))
//   console.log(d7.part2(inputs))
// }

// import * as d8 from './day8/solution'
// const day8 = (): void => {
//   const inputs = readInputs('./day8/inputs.txt')
//   console.log(d8.part1(inputs))
//   console.log(d8.part2(inputs))
// }

// import * as d9 from './day9/solution'
// const day9 = (): void => {
//   const inputs = readInputs('./day9/inputs.txt')
//   console.log(d9.part1(inputs))
//   console.log(d9.part2(inputs))
// }

// import * as d10 from './day10/solution'
// const day10 = (): void => {
//   const inputs = readInputs('./day10/inputs.txt')
//   console.log(d10.part1(inputs))
//   console.log(d10.part2(inputs))
// }

// import * as d11 from './day11/solution'
// const day11 = (): void => {
//   const inputs = readInputs('./day11/inputs.txt')
//   console.log(d11.part1(inputs))
//   console.log(d11.part2(inputs))
// }

// import * as d12 from './day12/solution'
// const day12 = (): void => {
//   const inputs = readInputs('./day12/inputs.txt')
//   console.log(d12.part1(inputs))
//   console.log(d12.part2(inputs))
// }

// import * as d13 from './day13/solution'
// const day13 = (): void => {
//   const inputs = readInputs('./day13/inputs.txt')
//   console.log(d13.part1(inputs))
//   console.log(d13.part2(inputs))
// }

// import * as d14 from './day14/solution'
// const day14 = (): void => {
//   const inputs = readInputs('./day14/inputs.txt')
//   console.log(d14.part1(inputs))
//   console.log(d14.part2(inputs))
// }

// import * as d15 from './day15/solution'
// const day15 = (): void => {
//   const inputs = readInputs('./day15/inputs.txt')
//   console.log(d15.part1(inputs))
//   console.log(d15.part2(inputs))
// }

// import * as d16 from './day16/solution'
// const day16 = (): void => {
//   const inputs = readInputs('./day16/inputs.txt')
//   console.log(d16.part1(inputs))
//   console.log(d16.part2(inputs))
// }

// import * as d17 from './day17/solution'
// const day17 = (): void => {
//   const inputs = readInputs('./day17/inputs.txt')
//   console.log(d17.part1(inputs))
//   console.log(d17.part2(inputs))
// }

// import * as d18 from './day18/solution'
// const day18 = (): void => {
//   const inputs = readInputs('./day18/inputs.txt')
//   console.log(d18.part1(inputs))
//   console.log(d18.part2(inputs))
// }

// import * as d19 from './day19/solution'
// const day19 = (): void => {
//   const inputs = readInputs('./day19/inputs.txt')
//   console.log(d19.part1(inputs))
//   console.log(d19.part2(inputs))
// }

// import * as d20 from './day20/solution'
// const day20 = (): void => {
//   const inputs = readInputs('./day20/inputs.txt')
//   console.log(d20.part1(inputs))
//   console.log(d20.part2(inputs))
// }

// import * as d21 from './day21/solution'
// const day21 = (): void => {
//   const inputs = readInputs('./day21/inputs.txt')
//   console.log(d21.part1(inputs))
//   console.log(d21.part2(inputs))
// }

// import * as d22 from './day22/solution'
// const day22 = (): void => {
//   const inputs = readInputs('./day22/inputs.txt')
//   console.log(d22.part1(inputs))
//   console.log(d22.part2(inputs))
// }

// import * as d23 from './day23/solution'
// const day23 = (): void => {
//   const inputs = readInputs('./day23/inputs.txt')
//   console.log(d23.part1(inputs))
//   console.log(d23.part2(inputs))
// }

// import * as d24 from './day24/solution'
// const day24 = (): void => {
//   const inputs = readInputs('./day24/inputs.txt')
//   console.log(d24.part1(inputs))
//   console.log(d24.part2(inputs))
// }

// import * as d25 from './day25/solution'
// const day25 = (): void => {
//   const inputs = readInputs('./day25/inputs.txt')
//   console.log(d25.part1(inputs))
//   console.log(d25.part2(inputs))
// }


// day1()
// day2()
// day3()
day4()
// day5()
// day6()
// day7()
// day8()
// day9()
// day10()
// day11()
// day12()
// day13()
// day14()
// day15()
// day16()
// day17()
// day18()
// day19()
// day20()
// day21()
// day22()
// day23()
// day24()
// day25()