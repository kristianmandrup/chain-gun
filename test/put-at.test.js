import Gun from 'gun/gun'
import test from 'ava'

import chain from '../src'
chain(Gun)

const gun = Gun();

test('putAt simple', async t => {
  let cols = gun.get('colors')
  cols.put({
    violet: true,
    red: true,
    green: false
  })

  let _path = 'violet'

  cols.putAt(_path, {
    light: true
  })

  cols.valueAt(_path, (color) => {
    t.is(color, true)
    t.is(cols.paths()[0], _path)
  })
})

test('putAt nodes', async t => {
  let mark = gun.get('mark')
  let amber = gun.get('amber')

  amber.put({
    name: 'amber',
    gender: 'female'
  })

  mark.put({
    name: 'mark',
    gender: 'male',
  })

  mark.path('wife').put(amber)
  mark.path('self').put(mark)

  let _path = 'spouse'

  mark.putAt(_path, amber)
  mark.valueAt(_path, (spouse) => {
    t.is(spouse.name, 'amber')
  })
})