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

const printPoint = (point: Point): string => `${point.x} ${point.y}`

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

export const part2 = (inputs: Array<string>): string => { 
  const lines = inputs.map(parseLine)
  const pointHist = new Map<string, number>()

  lines.forEach((line: Line) => {
    // verical line
    if (line.a.x === line.b.x) {
      const [minY, maxY] = [Math.min(line.a.y, line.b.y), Math.max(line.a.y, line.b.y)]
      for (let y = minY; y <= maxY; y++) {
        const point = <Point> {x: line.a.x, y: y}
        pointHist.set(printPoint(point), (pointHist.get(printPoint(point)) ?? 0) + 1)
      }
    } else if (line.a.y === line.b.y) {
      const [minX, maxX] = [Math.min(line.a.x, line.b.x), Math.max(line.a.x, line.b.x)]
      for (let x = minX; x <= maxX; x++) {
        const point = <Point> {x: x, y: line.a.y}
        pointHist.set(printPoint(point), (pointHist.get(printPoint(point)) ?? 0) + 1)
      }
    } else {
      const [leftPoint, rightPoint] = [line.a, line.b].sort((a, b) => a.x - b.x)
      const descending = leftPoint.y > rightPoint.y
      let flag = false
      for (
        let [x, y] = [leftPoint.x, leftPoint.y]; 
        descending ? y >= rightPoint.y : y <= rightPoint.y; 
        (descending ? y-- : y++) && x++
      ) {
        flag = true
        const point = <Point> {x, y}
        pointHist.set(printPoint(point), (pointHist.get(printPoint(point)) ?? 0) + 1)
      }

      if (flag === false) {
        console.log(printPoint(leftPoint), printPoint(rightPoint))
      }
    }
  })

  let sum = 0
  for (const freq of pointHist.values()) {
    if (freq > 1) sum += 1
  }
  
  return  sum.toString()
}

  
export const part1 = (inputs: Array<string>): string => { 
  const lines = inputs.map(parseLine).filter(horizontalOrVertical)
  const pointHist = new Map<string, number>()

  lines.forEach((line: Line) => {
    // verical line
    if (line.a.x === line.b.x) {
      const [minY, maxY] = [Math.min(line.a.y, line.b.y), Math.max(line.a.y, line.b.y)]
      for (let y = minY; y <= maxY; y++) {
        const point = <Point> {x: line.a.x, y: y}
        pointHist.set(printPoint(point), (pointHist.get(printPoint(point)) ?? 0) + 1)
      }
    } else {
      const [minX, maxX] = [Math.min(line.a.x, line.b.x), Math.max(line.a.x, line.b.x)]
      for (let x = minX; x <= maxX; x++) {
        const point = <Point> {x: x, y: line.a.y}
        pointHist.set(printPoint(point), (pointHist.get(printPoint(point)) ?? 0) + 1)
      }
    }
  })

  let sum = 0
  for (const freq of pointHist.values()) {
    if (freq > 1) sum += 1
  }
  
  return  sum.toString()
}
