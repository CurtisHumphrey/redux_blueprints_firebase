import reducer, {
  actions,
  selectors as <%= snakeEntityName %>_selectors,
  BASE_SELECTOR_PATH,
} from './<%= snakeEntityName %>'
import full_state_selectors from 'redux/test_helpers/full_state_selectors'
import _ from 'lodash'

const selectors = full_state_selectors(<%= snakeEntityName %>_selectors, BASE_SELECTOR_PATH)

describe('<%= snakeEntityName %> redux', () => {
  let initial_state
  let state

  beforeEach(() => {
    initial_state = {
    }
  })

  it('should have this initial state', () => {
    state = reducer(undefined, {})
    expect(state).to.eql(initial_state)
  })
})
