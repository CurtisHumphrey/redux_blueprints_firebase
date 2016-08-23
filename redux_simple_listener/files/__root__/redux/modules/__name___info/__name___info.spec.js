import reducer, {
  actions,
  private_actions,
  selectors as <%= snakeEntityName %>_info_selectors,
  BASE_SELECTOR_PATH,
} from './<%= snakeEntityName %>_info'
import {
  actions as listener_actions,
} from 'redux/modules/firebase_listener'

import full_state_selectors from 'redux/test_helpers/full_state_selectors'
import _ from 'lodash'

const selectors = full_state_selectors(<%= snakeEntityName %>_info_selectors, BASE_SELECTOR_PATH)

describe('<%= snakeEntityName %>_info redux', () => {
  let sandbox
  let state
  let dispatch
  let getState

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    dispatch = sandbox.stub()
    state = reducer(undefined, {})
    getState = () => ({[BASE_SELECTOR_PATH]: state})
  })
  afterEach(() => {
    sandbox.restore()
  })

  it('should have this initial state', () => {
    state = reducer(undefined, {})
    expect(selectors.<%= snakeEntityName %>(state)).to.eql({})
  })

  describe('private_actions', () => {
    it('should have an update action', () => {
      const payload = {
        'keyA': 'data1',
        'keyB': 'data2',
      }

      state = reducer(state, private_actions.update(payload))
      state = reducer(state, private_actions.update({keyA: 'new'}))
      expect(selectors.<%= snakeEntityName %>(state)).to.eql({
        ...payload,
        keyA: 'new',
      })
    })
    it('should have a remove_one action', () => {
      const payload = {
        'keyA': 'data1',
        'keyB': 'data2',
      }

      state = reducer(state, private_actions.update(payload))
      state = reducer(state, private_actions.remove_one('keyA'))
      expect(selectors.<%= snakeEntityName %>(state)).to.eql({
        'keyB': 'data2',
      })
    })
  })

  describe('public actions', () => {
    const path = 'lists/<%= snakeEntityName %>'

    it('should have a listen_to_<%= snakeEntityName %> action that calls firebase_listener.setup_listen_to_list', () => {
      const listener_id = 'id'
      const setup = sandbox.stub(listener_actions, 'setup_listen_to_list', () => () => listener_id)

      const id = actions.listen_to_<%= snakeEntityName %>()(dispatch, getState)
      expect(id).to.eql(listener_id)
      expect(setup.firstCall.args[0]).to.have.properties({
        update: private_actions.update,
        remove_one: private_actions.remove_one,
        path,
      })
    })
    it('should have a listen_to_recipes_meta that accepts a listener_id', () => {
      const listener_id = 'id'
      const setup = sandbox.stub(listener_actions, 'setup_listen_to_list', () => () => listener_id)

      actions.actions.listen_to_<%= snakeEntityName %>(listener_id)(dispatch, getState)
      expect(setup.firstCall.args[0]).to.have.properties({
        listener_id,
      })
    })
    it('should have a stop_listening_to_<%= snakeEntityName %> action that calls firebase_listener.stop_listening', () => {
      const stop = sandbox.stub(listener_actions, 'stop_listening', () => () => {})
      const listener_id = 'k1'
      actions.stop_listening_to_<%= snakeEntityName %>(listener_id)(dispatch, getState)
      expect(stop.firstCall.args[0]).to.eql({
        listener_id,
        path,
      })
    })
  })
})
