import {
  createAction,
  handleActions,
} from 'redux-actions'
import Immutable from 'seamless-immutable'
import { createSelector } from 'reselect'

// ------------------------------------
// Action types
// ----------------
const action_types_prefix = '<%= snakeEntityName %>/'

export const ACTION_TYPES = {
  RESET: `${action_types_prefix}RESET`,
}

// ------------------------------------
// Actions
// ------------------------------------
const reset = createAction(ACTION_TYPES.RESET)

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

export const selectors = {
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [ACTION_TYPES.RESET]: (state) => {
    return Immutable(initial_state)
  },
}, Immutable(initial_state))

