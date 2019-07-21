import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthStore';
import AuthService from '../services/AuthService';
import HeaderNav from './misc/HeaderNav'

const validators = {
  username: v => v.length > 0,
  email: v => v.length > 0,
  password: v => v.length >= 8
}

class Register extends React.Component {

  state = {
    username: {
      value: '',
      valid: false
    },
    email: {
      value: '',
      valid: false
    },
    password: {
      value: '',
      valid: false
    },
    errors: {
      username:'',
      email: '',
      password: ''
    },
    touch: {},
    shouldRedirect: false,
    wrongCredentials: false
  }


  handleChange = (e) => {
    e.target.className += " was-validated";
    const { name, value } = e.target
    const isValid = validators[name](value)

    this.setState({
      [name]: value,
      errors: {
        ...this.state.errors,
        [name]: !isValid
      },
    })
  }

  handleBlur = ({ name }) => {

    this.setState({
      touch: {
        ...this.state.touch,
        [name]: true,
      }
    })
  }

  getValidationClassName = (attr) => {
    const { errors, touch } = this.state
    if (!touch[attr]) {
      return ''
    } else if (errors[attr]) {
      return 'is-invalid'
    } else {
      return 'is-valid'
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    AuthService.register({ username: this.state.username, email: this.state.email, password: this.state.password }).then(
      response => {      
        this.setState({ shouldRedirect: true })
      },
      error => {
        console.info(error)
        this.setState({
          wrongCredentials: true,
          errors: {
            ...this.state.errors,
            email: true,
            password: true,
          }
        })
      }
    )
  }

  render() {
    const {username, email, password, errors, touch } = this.state
    const hasErrors = Object.values(errors).some(el => el === true)

    if (this.state.shouldRedirect) {
      return <Redirect to="/login" />
    }
    
    return (
      <div>
      <HeaderNav/>
      <MDBContainer className="mt-5 pt-5" style={{'backgroundColor' : '#2bbbad', 'height':'94vh'}}>
        <MDBRow>
          <MDBCol>
            <MDBCard>
              <MDBCardBody>
                <form
                  className="needs-validation"
                  onSubmit={this.handleSubmit}
                  noValidate
                >
                  <p className="h5 text-center mb-4">Register</p>
                    <div className="grey-text">
                    <MDBInput
                        background
                        label="Type your username"
                        icon="user"
                        group
                        type="text"
                        success="right"
                        name="username"
                        onBlur={this.handleBlur}
                        value={username.value}
                        onChange={this.handleChange}
                        touch={touch.username}
                        error={errors.username}
                        required
                        autocomplete = 'off'
                      />
                      <div className="valid-feedback">Looks good!</div>
                      <div className="invalid-feedback">Provide a valid name!</div>

                      <MDBInput
                        background
                        label="Type your email"
                        icon="envelope"
                        group
                        type="email"
                        success="right"
                        name="email"
                        onBlur={this.handleBlur}
                        value={email.value}
                        onChange={this.handleChange}
                        touch={touch.email}
                        error={errors.email}
                        required
                        autocomplete = 'off'
                      />
                      <div className="valid-feedback">Looks good!</div>
                      <div className="invalid-feedback">Provide a valid email!</div>
                  
                      <MDBInput
                        background
                        label="Type your password"
                        icon="lock"
                        group
                        type="password"
                        name="password"
                        onBlur={this.handleBlur}
                        value={password.value}
                        onChange={this.handleChange}
                        touch={touch.password}
                        error={errors.password}
                        required
                      />
                      <div className="invalid-feedback">
                        Please provide a valid password.
                      </div>
                    </div>
                    <div className="text-center">
                    <MDBBtn
                      color={`${hasErrors ? 'danger' : 'success'}`}
                      disabled={hasErrors}
                      type='submit'>
                      Register
                    </MDBBtn>
                  </div>
                </form>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>

    );
  }
}


export default Register


