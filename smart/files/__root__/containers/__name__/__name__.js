import React from 'react'
import { PropTypes } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import { createStructuredSelector } from 'reselect'

import styles from './<%= pascalEntityName %>.scss'

export const selectors = {}
export const actions = {}

const mapStateToProps = createStructuredSelector(selectors)

class <%= pascalEntityName %> extends React.Component {
  static propTypes = {
  };
  static defaultProps = {
  };

  render () {
    return (
      <div></div>
    )
  }
}
const <%= pascalEntityName %>Styled = CSSModules(<%= pascalEntityName %>, styles)
export {<%= pascalEntityName %>Styled as <%= pascalEntityName %>}
export default connect(mapStateToProps, actions)(<%= pascalEntityName %>Styled)
