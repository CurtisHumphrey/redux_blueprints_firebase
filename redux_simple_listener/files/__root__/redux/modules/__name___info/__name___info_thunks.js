import {
  actions as simple_actions,
  private_actions,
  selectors,
} from './<%= snakeEntityName %>_info_simple'

// ------------------------------------
// Actions
// ------------------------------------
export const listen_to_<%= snakeEntityName %> = (listener_id) => (dispatch, getState) => {
  return listener_actions.setup_listen_to_list({
    ...private_actions,
    path: 'lists/<%= snakeEntityName %>',
    listener_id,
  })(dispatch, getState) // flipped for testing
}

export const stop_listening_to_<%= snakeEntityName %> = (listener_id) => (dispatch, getState) => {
  dispatch(listener_actions.stop_listening({
    listener_id,
    path: 'lists/<%= snakeEntityName %>',
  }))
}
