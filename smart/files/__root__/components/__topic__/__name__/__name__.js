import React from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { createStructuredSelector } from 'reselect'

import './<%= pascalEntityName %>.scss'

// export const selectors = {}
// export const actions = {}

// const mapStateToProps = createStructuredSelector(selectors)

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
// export default connect(mapStateToProps, actions)(<%= pascalEntityName %>)
export default <%= pascalEntityName %>
