import { Console } from 'console'
import fs from 'fs'

const jsonDATA = JSON.parse(fs.readFileSync('1-json.json').toString())
jsonDATA.name = 'Aidas'
jsonDATA.age = 24

const stringyJSON = JSON.stringify(jsonDATA)
fs.writeFileSync('2-json.json', stringyJSON)

