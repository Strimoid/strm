import { useFormik } from 'formik'
import { useState } from 'react'
import Router from 'next/router'
import Config from '../config'
import Cookies from 'js-cookie'

export default function SignIn () {
  const [error, setError] = useState(null)
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: async values => {
      setError(null)

      const response = await fetch(`${Config.apiUri}/tokens`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      })

      if (response.status === 200) {
        const { token } = await response.json()

        Cookies.set('token', token, { expires: 1 })
        Router.push('/')
      } else {
        setError('Invalid username or password')
      }
    }
  })
  return (
    <form onSubmit={formik.handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 my-8 w-full max-w-xs mx-auto'>
      <div class='mb-4'>
        <label class='block text-gray-700 text-sm font-bold mb-2' for='username'>
                    Username
        </label>
        <input onChange={formik.handleChange} class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='username' type='text' placeholder='Username' />
      </div>
      <div class='mb-4'>
        <label class='block text-gray-700 text-sm font-bold mb-2' for='password'>
                    Password
        </label>
        <input onChange={formik.handleChange} class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='password' type='password' placeholder='Password' />
      </div>
      <div className='text-red-500 italic'>
        {error}
      </div>
      <div class='flex items-center justify-between mt-4'>
        <a class='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800' href='#'>
                    Forgot password?
        </a>

        <button className='btn btn-primary font-bold focus:outline-none focus:shadow-outline' type='submit'>
                    Sign in
        </button>
      </div>
    </form>
  )
}
