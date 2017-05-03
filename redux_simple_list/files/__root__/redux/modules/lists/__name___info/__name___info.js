import reducer, {
  actions as simple_actions,
  private_actions,
  selectors,
  BASE_SELECTOR_PATH,
  ACTION_TYPES,
} from './<%= snakeEntityName %>_info_simple'
import * as thunk_actions from './<%= snakeEntityName %>_info_thunks'

export const actions = Object.assign({}, simple_actions, thunk_actions)

export default reducer
export {
  selectors,
  BASE_SELECTOR_PATH,
  ACTION_TYPES,
  private_actions,
}
