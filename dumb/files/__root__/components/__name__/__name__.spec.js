import React from 'react'
import {
  shallow,
} from 'enzyme'
import _ from 'lodash'

import <%= pascalEntityName %> from './<%= pascalEntityName %>'
import stylesClass from './<%= pascalEntityName %>.scss'
const styles = _.mapValues(stylesClass, (raw) => '.' + raw)

describe('<<%= pascalEntityName %> />', () => {
  let sandbox
  let props

  beforeEach(() => {
    sandbox = sinon.sandbox.create()

    sandbox.stub(console, 'error', (message) => {
      throw new Error(message)
    })

    props = {}
  })

  afterEach(() => {
    sandbox.restore()
  })
  it('with normal props it should render without errors', () => {
    const wrapper = shallow(<<%= pascalEntityName %> {...props} />)
    expect(wrapper).to.exist
  })
})
