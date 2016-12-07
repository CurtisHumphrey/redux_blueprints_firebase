import React from 'react'
import { PropTypes } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import CSSModules from 'react-css-modules'
import { createStructuredSelector } from 'reselect'

import styles from './<%= pascalEntityName %>View.scss'

export const selectors = {}
export const actions = {}

const mapStateToProps = createStructuredSelector(selectors)

class <%= pascalEntityName %>View extends React.PureComponent {
  static propTypes = {
    styles: PropTypes.any,
  };

  componentWillMount () {
    // get data
  }

  renderWaiting () {
    return (
      <div>Loading data...</div>
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
          meta={[{
            name: 'description',
            content: 'content',
          }]}
        />
      </div>
    )
  }
}

const <%= pascalEntityName %>ViewStyled = CSSModules(<%= pascalEntityName %>View, styles)
export {<%= pascalEntityName %>ViewStyled as <%= pascalEntityName %>View}

export default connect(mapStateToProps, actions)(<%= pascalEntityName %>ViewStyled)
