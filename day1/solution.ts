const sumStrings = (strs: Array<string>): number => 
  strs.reduce((acc, s) => acc + parseInt(s), 0)

export const part1 = (inputs: Array<string>): string => 
  inputs.filter((_value: string, i: number, array: Array<string>) => 
    i >= 1 ? parseInt(array[i-1]) < parseInt(array[i]) : false
  ).length.toString() 

export const part2 = (inputs: Array<string>): string => 
  inputs.filter((_value: string, i: number, array: Array<string>) => 
    i >= 3
      ? sumStrings(array.slice(i-3,i)) < sumStrings(array.slice(i-2,i+1))
      : false
  ).length.toString()
