import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Logo, FormRow, Alert } from '../components'
import { useAppContext } from '../context/appContext'

const initialState = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  password: '',
  isMember: false,
}

const RegisterPage = () => {
  const [values, setValues] = useState(initialState)

  const { isLoading, displayAlert, registerUser, user, loginUser } =
    useAppContext()

  console.log(isLoading)

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
      (isMember && !firstName) ||
      (isMember && !lastName) ||
      (isMember && !phoneNumber)
    ) {
      displayAlert()
      return
    }
    const currentUser = { firstName, lastName, email, password, phoneNumber }

    if (isMember) {
      registerUser(currentUser)
    } else {
      loginUser(currentUser)
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
  }, [user, navigate])

  return (
    <section>
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Register' : 'Login'}</h3>
        <Alert />
        {values.isMember && (
          <FormRow
            labelText="First Name"
            name="firstName"
            type="text"
            value={values.firstName}
            handleChange={handleChange}
          />
        )}
        {values.isMember && (
          <FormRow
            labelText="Last Name"
            name="lastName"
            type="text"
            value={values.lastName}
            handleChange={handleChange}
          />
        )}
        {values.isMember && (
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
          {values.isMember ? 'Register' : 'Login'}
        </button>
        <p>
          {values.isMember ? 'Already a member' : 'Not member yet'}
          <button onClick={toggleMember}>
            {values.isMember ? 'Login' : 'Register'}
          </button>
        </p>
      </form>
    </section>
  )
}

export default RegisterPage
