import React, { Fragment } from 'react'
import { connect } from 'react-redux'

function NotFound(props) {
  return (
    <Fragment>
      <div>Not Found (404)</div>
    </Fragment>
  )
}

function mapState(state) {
  // const {} = state
  return state
}
const actions = {}

export default connect(mapState, actions)(NotFound)
