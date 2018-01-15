import React from 'react'
import PropTypes from 'prop-types'

import './<%= pascalEntityName %>.scss'

export class <%= pascalEntityName %> extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };
  static defaultProps = {
  };

  render () {
    return (
      <div>loading...</div>
    )
  }
}
export default <%= pascalEntityName %>
