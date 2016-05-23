import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import CSSModules from 'react-css-modules'
import { createStructuredSelector } from 'reselect'

import styles from './<%= pascalEntityName %>View.scss'

const selectors = createStructuredSelector(
  Object.assign({})
)
const actions = Object.assign({})

export class <%= pascalEntityName %>View extends React.Component {
  static propTypes = {
  };

  componentWillMount () {
    // get data
  }

  renderWaiting () {
    return (
      <div />
    )
  }

  render () {
    if (true) {
      return this.renderWaiting()
    }
    return (
      <div styleName='root'>
        <Helmet
          title={'SomethingNew'}
        />
      </div>
    )
  }
}

const <%= pascalEntityName %>ViewStyled = CSSModules(<%= pascalEntityName %>View, styles)
export {<%= pascalEntityName %>ViewStyled as <%= pascalEntityName %>View}

export default connect(selectors, actions)(<%= pascalEntityName %>ViewStyled)
