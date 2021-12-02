export const part1 = (inputs: Array<string>): string => 
  inputs.filter((value: string, i: number, array: Array<string>) => 
    i > 0 ? parseInt(value) > parseInt(array[i-1]) : false 
  ).length.toString();


