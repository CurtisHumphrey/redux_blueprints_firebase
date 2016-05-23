import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'

import styles from './<%= pascalEntityName %>.scss'

export class <%= pascalEntityName %> extends React.Component {
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

export default CSSModules(<%= pascalEntityName %>, styles)
