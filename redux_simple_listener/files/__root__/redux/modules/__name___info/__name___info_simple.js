import Immutable from 'seamless-immutable'
// import { createSelector } from 'reselect'
import {
  make_simple_selectors,
  make_reducer_n_actions,
  make_simple_reducer,
} from 'redux_helpers'
import {
  default_handlers,
} from 'redux/modules/firebase_listener'
// import _ from 'lodash'

// -------
// Initial State
// --------

const initial_state = {
  <%= snakeEntityName %>: {},
  <%= snakeEntityName %>_loaded: false,
}

// -------
// Selectors
// --------
const BASE = '<%= snakeEntityName %>_info'
export {BASE as BASE_SELECTOR_PATH}

const simple_selectors = make_simple_selectors(initial_state, BASE)

export const selectors = {
  ...simple_selectors,
}

// ------------------------------------
// Reducer and Actions
// ------------------------------------
const action_types_prefix = '<%= snakeEntityName %>_info/'

const public_handlers = {
}

const private_handlers = {
  'update': default_handlers.update('<%= snakeEntityName %>'),
  'remove_one': default_handlers.remove_one('<%= snakeEntityName %>'),
  'set_loaded': make_simple_reducer('<%= snakeEntityName %>_loaded'),
}

export const {reducer, private_actions, actions, ACTION_TYPES} = make_reducer_n_actions({
  public_handlers,
  private_handlers,
  action_types_prefix,
  initial_state,
  Immutable,
})
export default reducer

