// @ts-ignore
export const part1 = ins => ins.filter((_v, i, arr) => i >= 1 && parseInt(arr[i-1]) < parseInt(arr[i])).length.toString() 

// @ts-ignore
export const part2 = ins => ins.filter((_v, i, arr) => i >= 3 && arr.slice(i-3,i).reduce((acc, s) => acc + parseInt(s), 0) < arr.slice(i-2,i+1).reduce((acc, s) => acc + parseInt(s), 0)).length.toString()

const sumStrings = (strs: Array<string>): number => 
  strs.reduce((acc: number, s: string) => acc + parseInt(s), 0)

export const part1Expansion = (inputs: Array<string>): string =>
  inputs.filter((_value: string, i: number, array: Array<string>) =>
    i >= 1 && parseInt(array[i-1]) < parseInt(array[i])
  ).length.toString()

export const part2Expansion = (inputs: Array<string>): string =>
  inputs.filter((_value: string, i: number, array: Array<string>) =>
    i >= 3 && sumStrings(array.slice(i-3,i)) < sumStrings(array.slice(i-2,i+1))
  ).length.toString()
