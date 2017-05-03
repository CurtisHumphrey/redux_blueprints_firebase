import Immutable from 'seamless-immutable'
// import { createSelector } from 'reselect'
import {
  make_simple_selectors,
  make_reducer_n_actions,
} from 'redux_helpers'
import { standard_firebase_search } from 'redux/utils/search_helpers'

// import _ from 'lodash'

// -------
// Initial State
// --------

const initial_state = {
  <%= snakeEntityName %>_loading: true,
  <%= snakeEntityName %>: {},
  search_text: '',
}

// -------
// Selectors
// --------
const BASE = '<%= snakeEntityName %>_info'
export {BASE as BASE_SELECTOR_PATH}

const simple_selectors = make_simple_selectors(initial_state, BASE)

const items_from_search = standard_firebase_search({
  items_selector: simple_selectors.<%= snakeEntityName %>,
  keys: ['name'],
  search_text_selector: simple_selectors.search_text,
})

export const selectors = {
  ...simple_selectors,
  <%= snakeEntityName %>: items_from_search, // replaces simple
}

// ------------------------------------
// Reducer and Actions
// ------------------------------------
const action_types_prefix = '<%= snakeEntityName %>_info/'

const public_handlers = {
  reset: () => Immutable(initial_state),
  update_search: (state, {payload}) => state.merge({
    search_text: payload,
  }),
}

const private_handlers = {
  update_list: (state, {payload}) => state.replace({
    ...state,
    <%= snakeEntityName %>_loading: false,
    <%= snakeEntityName %>: payload,
  }, {deep: true}),
}

export const {reducer, private_actions, actions, ACTION_TYPES} = make_reducer_n_actions({
  public_handlers,
  private_handlers,
  action_types_prefix,
  initial_state,
  Immutable,
})
export default reducer
