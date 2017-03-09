import React from 'react'
import {
  shallow,
} from 'enzyme'
import proptype_error_catcher from 'react-proptype-error-catcher'
import _ from 'lodash'

import {
  <%= pascalEntityName %>,
  actions,
  selectors,
} from './<%= pascalEntityName %>'

// import stylesClass from './<%= pascalEntityName %>.scss'
// const styles = _.mapValues(stylesClass, (raw) => '.' + raw)

describe('<<%= pascalEntityName %> />', () => {
  let sandbox
  let props
  let prop_actions
  let prop_selectors

  beforeEach(() => {
    sandbox = sinon.sandbox.create()

    proptype_error_catcher(sandbox)

    prop_selectors = {
    }
    prop_actions = {
    }

    props = {
      ...prop_selectors,
      ...prop_actions,
    }
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('general', () => {
    it('with normal props it should render without errors', () => {
      const wrapper = shallow(<<%= pascalEntityName %> {...props} />)
      expect(wrapper).to.exist
    })
    it('redux actions for connect should have these keys', () => {
      if (_.keys(prop_actions).length) {
        expect(actions).to.contain.all.keys(prop_actions)
      }
    })
    it('redux selectors for connect should have these keys', () => {
      if (_.keys(prop_selectors).length) {
        expect(selectors).to.contain.all.keys(prop_selectors)
      }
    })
  })
})
