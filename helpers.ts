import * as fs from 'fs'

export const readInputs = (path: string): Array<string> => 
  fs.readFileSync(path, {encoding:'utf8', flag:'r'}).split('\n')
