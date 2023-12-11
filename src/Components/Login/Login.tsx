
import { useForm , SubmitHandler} from 'react-hook-form';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/pms.png'


export default function Login() {
  type FormValues = {
    email: string,
    password: string
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  
  const onSubmit: SubmitHandler<FormValues> = async(data) =>{
    console.log(data);
  }

  return (
    <div className=' vh-100 auth-container d-flex justify-content-center align-items-center flex-column'>
        <div className="text-center mb-2">
            <img src={logo} alt="" className='img-fluid' />
        </div>
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




// import { jwtDecode } from "jwt-decode";
// import { createContext, useEffect, useState } from "react";

// export interface IAuth {
//   adminData: string;
//   saveAdminData: () => void;
//   requestHeaders: any;
//   baseUrl: string;
// }
// export let AuthContext = createContext<IAuth | null>(null);
// let requestHeaders = {
//   Authorization: Bearer ${localStorage.getItem("adminToken")}
// }
// let baseUrl = "https://upskilling-egypt.com:3003/api/v1";
// export default function AuthContextProvider(_props: any) {
//   //****control admin data state****
//   const [adminData, setAdminData] = useState<any | null>(null);

//   //*****save admin data ********
//   let saveAdminData = () => {
//     let encodedToken = localStorage.getItem("adminToken");
//     let decodedToken = jwtDecode(encodedToken!);
//     setAdminData(decodedToken);
//   };

//   useEffect(() => {
//     if (localStorage.getItem("adminToken")) {
//       saveAdminData();
//     }
//   }, []);
  
//   return (
//     <AuthContext.Provider
//       value={{ adminData, saveAdminData, requestHeaders, baseUrl }}
//     >
//       {props.children}
//     </AuthContext.Provider>
//   );
// }