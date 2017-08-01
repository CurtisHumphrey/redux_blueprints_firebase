import React from 'react'
import { PropTypes } from 'react'

import './<%= pascalEntityName %>.scss'

export class <%= pascalEntityName %> extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };
  static defaultProps = {
  };

  render () {
    return (
      <div>Loading</div>
    )
  }
}

export default <%= pascalEntityName %>
