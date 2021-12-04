type Direction = 'up' | 'down' | 'forward'
type Units = number
interface Input {
  direction: Direction;
  units: Units;
}

type Horizontal = number
type Depth = number
type Aim = number

export const part1Expansion = (inputs: Array<string>): string => 
  inputs
    .map((input: string): Input => {
      return { 
        direction: input.split(' ')[0] as Direction,
        units: parseInt(input.split(' ')[1]) as Units,
      }
    })
    .reduce(
      (acc: [Horizontal, Depth], { direction, units }: Input): [Horizontal, Depth] => 
        direction === 'up' ? [acc[0], acc[1] - units]
        : direction === 'down' ? [acc[0], acc[1] + units]
        : [acc[0] + units, acc[1]],
      [0, 0] as [Horizontal, Depth]
    )
    .reduce((h: Horizontal, d: Depth): number => h * d)
    .toString()

export const part2Expansion = (inputs: Array<string>): string => 
  inputs
    .map((input: string): Input => {
      return { 
        direction: input.split(' ')[0] as Direction,
        units: parseInt(input.split(' ')[1]) as Units,
      }
    })
    .reduce(
      (acc: [Horizontal, Depth, Aim], { direction, units }: Input): [Horizontal, Depth, Aim] => 
        direction === 'up'
          ? [acc[0], acc[1], (acc[2] + units) as Aim]
        : direction === 'down'
          ? [acc[0], acc[1], (acc[2] - units) as Aim]
        : [
            (acc[0] - units) as Horizontal,
            (acc[1] + acc[2]*units) as Depth,
            acc[2]
          ],
      [0, 0, 0] as [Horizontal, Depth, Aim]
    )
    .slice(0,2)
    .reduce((depth: Depth, horizontal: Horizontal): number => depth*horizontal)
    .toString()

// @ts-ignore
export const part1 = ins => ins.reduce((acc, input) => input.split(' ')[0] === 'up' ? [acc[0], acc[1] - parseInt(input.split(' ')[1])] : input.split(' ')[0] === 'down' ? [acc[0], acc[1] + parseInt(input.split(' ')[1])] : [acc[0] + parseInt(input.split(' ')[1]), acc[1]], [0, 0]).reduce((h, d) => h * d).toString()

// @ts-ignore
export const part2 = (inputs: Array<string>): string => inputs.reduce((acc, input) => input.split(' ')[0] === 'up' ? [acc[0], acc[1], acc[2]+parseInt(input.split(' ')[1])] : input.split(' ')[0] === 'down' ? [acc[0], acc[1], acc[2]-parseInt(input.split(' ')[1])] : [acc[0]-parseInt(input.split(' ')[1]), acc[1]+acc[2]*parseInt(input.split(' ')[1]), acc[2]], [0, 0, 0]).slice(0,2).reduce((depth, horizontal) => depth*horizontal).toString()
