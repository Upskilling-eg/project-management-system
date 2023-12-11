
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';



export default function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  const onSubmit = async(data) =>{
    console.log(data);
  }

  return (
    <div className=' vh-100 auth-container d-flex justify-content-center align-items-center'>
      <div className='login-wrapper w-50 h-50'>
      
      <form onSubmit={handleSubmit(onSubmit)} 
              action="" className="m-auto w-75 my-5">
                <p className='text-white'>welcome to PMS</p>
                <h2 className='title mb-5'>Login</h2>
              <div className="form-group my-3">
                <label className='label-title mb-2'>E-mail</label>
                    <input 
                      {...register("email",
                      { required: true,
                        pattern:/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                      })}
                      type="email"
                      name="email"
                      className="form-control custom-input" 
                      placeholder="Enter your E-mail"/>

                     {errors.email && errors.email.type === "required" && (<span className='text-danger '>Email is required</span>)}

                     {errors.email && errors.email.type === "pattern" && (<span className='text-danger '>Email is invalid</span>)}
              </div>
              <div className="form-group my-3">
                <label className='label-title mb-2'>Password</label>
                    <input 
                    {...register("password",
                     { required: true,
                      pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
                     })}
                     type="password"
                     name="password"                 
                     className="form-control custom-input"  placeholder="Password"/>
                    {errors.password && errors.password.type === "required" && (<span className='text-danger'>Password is required</span>)}
                    {errors.password && errors.password.type === "pattern" && (<span className='text-danger '>password is invalid</span>)}
                </div>
                <div className="form-group my-3 d-flex justify-content-end">
                    {/* <span>Register Now?</span> */}
                    <Link to='/'
                    // to='/request-reset-pass'
                     className='text-white text-decoration-none'>Forgot Password?</Link>
                </div>
                <div className="form-group my-3">
                  <button type="submit" className="btn w-100">
                    Login
                  </button>
                </div>           
        </form>
      </div>
      
    </div>
    
  )
}

