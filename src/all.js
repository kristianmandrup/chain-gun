import {
  addCount
} from './count'
import {
  addDate
} from './date'
import {
  addEach
} from './each'
import {
  addPrint
} from './print'
import {
  addLocal
} from './local'
import {
  addRecurse
} from './recurse'
import {
  addPut
} from './put'
import {
  addSet
} from './set'
import {
  addSoul
} from './soul'
import {
  addValue
} from './value'

const chains = {
  addCount,
  addDate,
  addEach,
  addPrint,
  addLocal,
  addPut,
  addRecurse,
  addSet,
  addSoul,
  addValue
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function add(Gun, ...names) {
  names.forEach(name => {
    let nameCap = capitalize(name)
    let fun = 'add' + nameCap
    chains[fun]({
      chain: Gun.chain,
      Gun
    })
  })
  return Gun
}

const allNames = [
  'date',
  'each',
  'print',
  'local',
  'put',
  'recurse',
  'set',
  'soul',
  'value'
]

export {
  addDate,
  addEach,
  addPrint,
  addLocal,
  addPut,
  addRecurse,
  addSet,
  addValue
}

export default function (Gun) {
  return add(Gun, ...allNames)
}