import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'
import CSSModules from 'react-css-modules'

import styles from './<%= pascalEntityName %>.scss'

const selectors = {}

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
export default connect(createStructuredSelector(selectors))(<%= pascalEntityName %>Styled)
