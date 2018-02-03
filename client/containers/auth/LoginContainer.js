import React, { Component } from 'react'
import { connect } from 'react-redux'
import Spinner from 'react-spinkit'
import LoginForm from '../../components/auth/LoginForm'
import { loggin } from '../../actions/authActions'

class LogingContainer extends Component {

  submitForm = (formData) => {
    this.props.logginActions(formData)
  }
  render() {
    return (
      this.props.isFetching
      ? <Spinner name='double-bounce' />
      : <LoginForm onSubmit={this.submitForm} />
    )
  }
}

const mapStateToProps = state => ({
  isFetching: state.auth.isFetching,
  error: state.auth.error
})

export default connect(mapStateToProps, { logginActions: loggin })(LogingContainer)
