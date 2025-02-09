import { Link } from 'react-router-dom'
import Signin from '../pages/Signin'

const Auth = () => {
  return (
    <div className='justify-center flex h-screen flex-col'>
      <div className=' justify-center flex'>
        <div>
            <div className='font-extrabold text-3xl'>
                Create an account
            </div>
            <div className='text-slate-400'>
                Already have an account? 
                <Link to='/signin' className='pl-1 underline'> LogIn </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
