import {
  ACTION_TYPES,
  // actions as simple_actions,
  // private_actions,
  selectors,
} from './<%= snakeEntityName %>_info_simple'
import {firebase_actions} from 'redux-firebase'

export const load_<%= snakeEntityName %> = () => (dispatch, getState) => {
  if (!selectors.<%= snakeEntityName %>_loading(getState())) return

  dispatch(firebase_actions.on({
    path: 'recipe_parts/<%= snakeEntityName %>',
    update_action: ACTION_TYPES.update_list,
  }))
}
