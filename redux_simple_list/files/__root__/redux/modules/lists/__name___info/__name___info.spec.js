import reducer, {
  ACTION_TYPES,
  actions,
  private_actions,
  selectors as <%= snakeEntityName %>_info_selectors,
  BASE_SELECTOR_PATH,
} from './<%= snakeEntityName %>_info'

import full_state_selectors from 'redux/test_helpers/full_state_selectors'
import {firebase_actions} from 'redux-firebase'

const selectors = full_state_selectors(<%= snakeEntityName %>_info_selectors, BASE_SELECTOR_PATH)

const list_data = {}

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
    expect(selectors.<%= snakeEntityName %>(state)).to.eql([])
    expect(selectors.<%= snakeEntityName %>_loading(state)).to.be.true
  })
  describe('private_actions', () => {
    it('should have an update_list', () => {
      state = reducer(undefined, private_actions.update_list(list_data))

      expect(selectors.<%= snakeEntityName %>_loading(state)).to.be.false
      expect(selectors.<%= snakeEntityName %>(state).length).to.eql(Object.keys(list_data).length)
    })
  })
  describe('public actions', () => {
    describe('loading', () => {
      const load_action = firebase_actions.on({
        path: 'recipe_parts/<%= snakeEntityName %>',
        update_action: ACTION_TYPES.update_list,
      })
      it('should have a load_<%= snakeEntityName %> that calls firebase/on', () => {
        actions.load_<%= snakeEntityName %>()(dispatch, getState)
        expect(dispatch).to.be.calledWith(load_action)
      })
      it('should have a load_<%= snakeEntityName %> that does not calls firebase/on if already loaded', () => {
        state = reducer(undefined, private_actions.update_list(list_data))
        actions.load_<%= snakeEntityName %>()(dispatch, getState)
        expect(dispatch).to.not.be.calledWith(load_action)
      })
    })
    describe('search', () => {
      it('should have a update_search that changes <%= snakeEntityName %>', () => {
        state = reducer(undefined, private_actions.update_list(list_data))
        state = reducer(state, actions.update_search('bake'))

        expect(selectors.<%= snakeEntityName %>(state).length).to.be.below(Object.keys(list_data).length)
        expect(selectors.<%= snakeEntityName %>(state)[0].name).to.be.eql('bake')
      })
      it('if update_search is "" actions should return full list', () => {
        state = reducer(undefined, private_actions.update_list(list_data))
        state = reducer(state, actions.update_search('bake'))
        state = reducer(state, actions.update_search(''))

        expect(selectors.<%= snakeEntityName %>(state).length).to.eql(Object.keys(list_data).length)
      })
    })
  })
})
