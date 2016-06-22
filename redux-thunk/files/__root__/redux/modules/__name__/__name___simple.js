import {
  // createAction,
  handleActions,
} from 'redux-actions'
import Immutable from 'seamless-immutable'
// import { createSelector } from 'reselect'
import {
  make_simple_selectors,
  make_simple_actions,
  // make_simple_reducer,
  make_action_types,
} from 'redux/utils/redux_helpers'
// ------------------------------------
// Action types
// ----------------
const action_types_prefix = '<%= snakeEntityName %>/'

export const ACTION_TYPES = make_action_types(action_types_prefix, [
  'reset',
])

// ------------------------------------
// Actions
// ------------------------------------
export const private_actions = {
  ...make_simple_actions(ACTION_TYPES),
}
export const actions = {
}

// -------
// Initial State
// --------

const initial_state = {
}

// -------
// Selectors
// --------
const BASE = '<%= snakeEntityName %>'
export {BASE as BASE_SELECTOR_PATH}

const simple_selectors = make_simple_selectors(initial_state, BASE)

export const selectors = {
  ...simple_selectors,
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [ACTION_TYPES.reset]: (state) => {
    return Immutable(initial_state)
  },
}, Immutable(initial_state))

