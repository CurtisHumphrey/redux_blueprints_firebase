import React from 'react'
import{ PropTypes } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import CSSModules from 'react-css-modules'
import { createStructuredSelector } from 'reselect'

import styles from './<%= pascalEntityName %>View.scss'

export const selectors = {}
export const actions = {}

const mapStateToProps = createStructuredSelector(selectors)

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
          title={'<%= pascalEntityName %>'}
        />
      </div>
    )
  }
}

const <%= pascalEntityName %>ViewStyled = CSSModules(<%= pascalEntityName %>View, styles)
export {<%= pascalEntityName %>ViewStyled as <%= pascalEntityName %>View}

export default connect(mapStateToProps, actions)(<%= pascalEntityName %>ViewStyled)
