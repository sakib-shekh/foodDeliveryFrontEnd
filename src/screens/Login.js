import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='container my-3'>
    <h2>Login</h2>
    <form>
    <div className="form-outline mb-4">
      <input type="email" id="form2Example1" className="form-control" autoComplete='on' />
      <label className="form-label" htmlFor="form2Example1">Email address</label>
    </div>
  

    <div className="form-outline mb-4">
      <input type="password" id="form2Example2" className="form-control" autoComplete='on' />
      <label className="form-label" htmlFor="form2Example2">Password</label>
    </div>
  

    <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>
  

    <div className="text-center">
      <p>Not a member? <Link to="#">Register</Link></p>
    </div>
  </form>
    </div>
  )
}

export default Login
