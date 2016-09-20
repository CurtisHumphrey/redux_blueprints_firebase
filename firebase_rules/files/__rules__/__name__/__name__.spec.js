import targaryen from 'targaryen'
import rules from '../../rules.json'

// const {
//   // unauthenticated,
//   // anonymous,
// } = targaryen.users
const chef_one = targaryen.users.password

const root_path = '<%= snakeEntityName %>'
const admin = {uid: 'password:2'}

import {

} from './<%= snakeEntityName %>_examples'

describe('rules for /<%= snakeEntityName %>', () => {
  beforeEach(() => {
    targaryen.setFirebaseData({})
    targaryen.setFirebaseRules(rules)
  })

  it('anyone logged in should be able to read from root', () => {
    expect(chef_one).can.read.path(root_path)
  })
  it('no one can write to root', () => {
    expect(admin).cannot.write(true).to.path(root_path)
  })
  it('no one can delete root', () => {
    expect(admin).cannot.write(null).to.path(root_path)
  })
})
