import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormRow } from '../components/Global'
import { Logo, Alert } from '../components/Global'

import { useAuthContext } from '../context/authContext'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/RegisterPage'

const initialState = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  password: '',
  isMember: true,
}

const RegisterPage = () => {
  const [values, setValues] = useState(initialState)

  const { registerUser, isLoading, user, loginUser } = useAuthContext()
  const { displayAlert } = useAppContext()

  const navigate = useNavigate()

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { firstName, lastName, phoneNumber, email, password, isMember } =
      values
    if (
      !email ||
      !password ||
      (!isMember && !firstName) ||
      (!isMember && !lastName) ||
      (!isMember && !phoneNumber)
    ) {
      displayAlert()
      return
    }
    const currentUser = { firstName, lastName, email, password, phoneNumber }

    if (isMember) {
      loginUser(currentUser)
    } else {
      registerUser(currentUser)
    }
  }

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 2000)
    }
  }, [navigate, user])

  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <div className="header-form">
          <Logo />
          <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        </div>
        <Alert />

        {!values.isMember && (
          <FormRow
            labelText="First Name"
            name="firstName"
            type="text"
            value={values.firstName}
            handleChange={handleChange}
          />
        )}
        {!values.isMember && (
          <FormRow
            labelText="Last Name"
            name="lastName"
            type="text"
            value={values.lastName}
            handleChange={handleChange}
          />
        )}

        {!values.isMember && (
          <FormRow
            labelText="Phone number"
            name="phoneNumber"
            type="text"
            value={values.phoneNumber}
            handleChange={handleChange}
          />
        )}

        <FormRow
          labelText="Email"
          name="email"
          type="email"
          value={values.email}
          handleChange={handleChange}
        />

        <FormRow
          labelText="Password"
          name="password"
          type="password"
          value={values.password}
          handleChange={handleChange}
        />

        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {values.isMember ? 'Login' : 'Register'}
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default RegisterPage
