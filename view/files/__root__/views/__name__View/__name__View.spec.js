import React from 'react'
import {
  shallow,
} from 'enzyme'

import { <%= pascalEntityName %>View } from './<%= pascalEntityName %>View'

import _ from 'lodash'
import stylesClass from './<%= pascalEntityName %>View.scss'
const styles = _.mapValues(stylesClass, (raw) => '.' + raw)

describe('<%= pascalEntityName %>', () => {
  let sandbox
  let props

  beforeEach(() => {
    sandbox = sinon.sandbox.create()

    sandbox.stub(console, 'error', (message) => {
      throw new Error(message)
    })

    props = {
    }
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('with normal props it should render without errors', () => {
    const wrapper = shallow(<<%= pascalEntityName %>View {...props} />)
    expect(wrapper).to.exist
  })
})
