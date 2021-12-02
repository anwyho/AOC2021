type Direction = 'up' | 'down' | 'forward'
type Units = number
interface Input {
  direction: Direction;
  units: Units;
}

type Horizontal = number
type Depth = number
type Aim = number

export const part1 = (inputs: Array<string>): string => 
  inputs
    .map((input: string): Input => {
      return { 
        direction: input.split(' ')[0] as Direction,
        units: parseInt(input.split(' ')[1]),
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

export const part2 = (inputs: Array<string>): string => 
  inputs
    .map((input: string): Input => {
      return { 
        direction: input.split(' ')[0] as Direction,
        units: parseInt(input.split(' ')[1]),
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