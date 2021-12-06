
interface Point { 
  x: number
  y: number
}
interface Line {
  a: Point
  b: Point
}

const parseLine = (lineStr: string): Line => <Line> {
    a: <Point> { 
      x: parseInt((lineStr.match(/\d+/g) ?? [])[0]),
      y: parseInt((lineStr.match(/\d+/g) ?? [])[1]),
    },
    b: <Point> {
      x: parseInt((lineStr.match(/\d+/g) ?? [])[2]),
      y: parseInt((lineStr.match(/\d+/g) ?? [])[3]),
    },
  }

const horizontalOrVertical = (line: Line): boolean => 
  line.a.x === line.b.x || line.a.y === line.b.y

export const part1 = (inputs: Array<string>): string => { 
  const lines = inputs.map(parseLine).filter(horizontalOrVertical)
  
  return ''
}


export const part1Dud = (inputs: Array<string>): string => 
  inputs.map(parseLine).filter(horizontalOrVertical).reduce(
    (covered: Map<Point, number>, line: Line): Map<Point, number> => {
      console.log(line.a.x, line.a.y, line.b.x, line.b.y)
      return (line.a.x === line.b.x
        ? Array.from(
            {length: Math.abs(line.b.y-line.a.y)}, 
            (_val, i: number) => <Point> {x: line.a.x, y: Math.min(line.a.y, line.b.y) + i}
          )
        : Array.from(
            {length: Math.abs(line.b.x-line.a.x)}, 
            (_val, i: number) => <Point> {x: Math.min(line.a.x, line.b.x) + i, y: line.a.y}
          )
      ).reduce(
        (prevCovered: Map<Point, number>, point: Point): Map<Point, number> => 
          new Map([...prevCovered, [point, (prevCovered.get(point) ?? 0)+1]]) as Map<Point, number>, 
        covered
      )
    },
    new Map<Point, number>()
  ).toString()

export const part2 = (inputs: Array<string>): string => { return inputs[0] }
