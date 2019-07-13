import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthStore';
import AuthService from '../services/AuthService';


const validators = {
  email: v => v.length > 0,
  password: v => v.length >= 8
}

class Login extends React.Component {

  state = {
    email: {
      value: '',
      valid: false
    },
    password:  {
      value: '',
      valid: false
    },
    errors: {
      email: '',
      password: ''
    },
    touch: {},
    goToHome: false,
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

  handleBlur = ({name}) => {
    
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
    console.log(e)

    AuthService.authenticate({email: this.state.email, password: this.state.password}).then(
      response => {
        this.setState({goToHome: true})
        this.props.onUserChange(response.data)
      },
      error => {
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
    const {email, password, errors, touch } = this.state
    const hasErrors = Object.values(errors).some(el => el === true)

    if (this.state.goToHome) {
      return <Redirect to="/"/>
    }


    return (
      <MDBContainer className="mt-5 pt-5">
        <MDBRow>
          <MDBCol>
            <MDBCard>
              <MDBCardBody>
                <form 
                  className="needs-validation"
                  onSubmit={(e)=> console.log(e)}
                  noValidate
                >
                  <p className="h5 text-center mb-4">Sign in</p>
                  <div className="grey-text">
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
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">Provide a valid name!</div>
              <MDBInput
                value={this.state.fname}
                name="fname"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterNameEx"
                label="First name"
                required
              >
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
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
                      className={password.valid ? "is-valid" : "is-invalid"}
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide a valid password.
                    </div>
                  </div>
                  <div className="text-center">
                    <MDBBtn
                    color={`${hasErrors ? 'danger' : 'success'}`}
                    disabled={hasErrors}>
                      Login
                    </MDBBtn>
                  </div>
                </form>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

const LoginWithAuthContext = (loginProps) => {
  return (
    <AuthContext.Consumer>
      {(consumerProps) => (<Login {...consumerProps} {...loginProps} />)}
    </AuthContext.Consumer>
  );
}

export default LoginWithAuthContext 


