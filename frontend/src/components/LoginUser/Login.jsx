import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { postLoginUser } from '../../features/auth/authSlice2'

function Login () {
  const dispatch = useDispatch()

  const { register, formState: { errors }, handleSubmit } = useForm({
    email: '',
    password: ''
  })

  const onSubmit = async (data) => {
    try {
      const response = await dispatch(postLoginUser(data))
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const styledLabel = 'text-sm   mb-0.5 mt-2 text-gray-600'
  const styledErros = 'text-xs text-red-500  mt-0.5  '
  const styledInput = 'form-control w-4/5 bg-whiteBackgraundForm2 mx-auto  px-2 py-1.5 text-gray-900 rounded border border-solid border-gray-300 focus:border-gray-200 fouces:outline-none'

  return (
    <div className='xl:container mx-auto mb-32 w-screen h-screen bg-whiteBackgroundForm flex justify-center items-center'>
      <div className='w-4/5 h-3/5 flex'>
        <div className='bg-whiteBackgraundForm2 w-3/6 h-full flex justify-center flex-col'>
          <div className='flex items-start w-4/5 mx-auto'>
            <h1 className='text-5x1 sm:text-7x1 text-black text-4xl font-bold px-1 py-3'>Login</h1>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='flex flex-col w-full  m-0 items-start p-auto'>

                <div className='flex items-start w-4/5 px-1 mx-auto'>
                  <label className={styledLabel}>Email Address</label>
                </div>

                <input className={styledInput} type='text' {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i })} />
                {errors.email?.type === 'required' && <div className='flex items-start w-4/5 px-1 mx-auto mt-1.5'> <p className={styledErros}>Este campo es obligatorio</p></div>}
                {errors.email?.type === 'pattern' && <div className='flex items-start w-4/5 px-1 mx-auto mt-1.5'><p className={styledErros}>Ingresa un email valido</p></div>}

              </div>
              <div className='flex flex-col w-full  m-0 items-start p-auto'>

                <div className='flex items-start w-4/5 px-1 mx-auto'>
                  <label className={styledLabel}>Your Password</label>
                </div>

                <input className={styledInput} type='password' {...register('password', { required: true })} />
                {errors.password?.type === 'required' && <div className='flex items-start w-4/5 px-1 mx-auto mt-1.5'> <p className={styledErros}>Este campo es obligatorio</p></div>}

              </div>
              <div className='flex mt-3'>
                <button type='Submit' className='cursor-pointer w-4/5 bg-greenCard text-white mx-auto  px-2 py-2 rounded border border-solid border-gray-300  fouces:outline-none'>
                  Login
                </button>
              </div>
            </form>
            <div className='flex items-center  justify-center mt-5'>
              <div className=' flex justify-center items-center '>
                <a className='cursor-pointer cursor-pinter text-xs text-gray-500 mx-3'>Forget Password?</a>
                <p className=' text-xs text-gray-500 mx-3'>Don't have an account? <Link className='text-greenCard cursor-pointer' to='/register'>Sign up</Link> </p>
              </div>

            </div>
          </div>
        </div>
        <div className='bg-greenCard w-3/6 h-full flex justify-center items-center'>
          <figure className='flex justify-center items-center'>
            <img
              className='w-3/5 h-3/5'
              src='https://png.pngtree.com/png-clipart/20230310/ourmid/pngtree-fresh-fruit-png-image_6642661.png'
              alt='imagen'
            />
          </figure>
        </div>
      </div>
    </div>
  )
}
export default Login
