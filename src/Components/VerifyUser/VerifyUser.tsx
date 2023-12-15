import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import { ToastContext } from '../../Context/ToastContext';
import logo from "../../assets/images/PMS 3.svg";

import axios from 'axios';
import { ToastContainer } from 'react-toastify';

export default function VerifyUser() {
  const navigate = useNavigate();
  const { baseUrl } : any = useContext(AuthContext);
  const { getToastValue } : any = useContext(ToastContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data:any) => {
    axios
      .put(`${baseUrl}/Users/verify`, data)
      .then((response:any) => {
        getToastValue("success","verify successsfully")
        navigate("/login");  
      })
      .catch((error:any) => {
        getToastValue("error",error.response.data.message)
      });
  };

  return (
    <div className='container-fluid auth-container '>
    <ToastContainer/>
    <div className='row vh-100 d-flex justify-content-center align-items-center'>
    <div className="col-lg-5 col-md-7 col-sm-9">
    <div className="py-4 rounded-2">
          <div className="logo-cont text-center">
            <img src={logo} className="w-50" alt="logo" />
          </div>
          <form className="form-container w-75 m-auto p-3" onSubmit={handleSubmit(onSubmit)}>
           <span>
              welcome to PMS
            </span>
            <h4 className="fw-bolder h6">Verify Account</h4>
           
            <div className="form-group my-3 position-relative">
              <input
                placeholder="Enter your E-mail"
                className="form-control   mb-1"
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                })}
              />
              {errors.email && errors.email.type === "required" && (
                <span className="text-danger">email is required</span>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <span className="text-danger">invalid email</span>
              )}
            </div>

            <div className="form-group my-3 position-relative">
              <input
                placeholder="Verification code"
                autoComplete="on"
                className="form-control   mb-1"
                type="text"
                {...register("code", {
                  required: true,
                })}
              />
              {errors.code && errors.code.type === "required" && (
                <span className="text-danger">code is required</span>
              )}
            </div>

          

            <div className="form-group my-3">
              <button className="btn w-100">Verify Account</button>
            </div>
          </form>
        </div>
    </div>
    </div>
  </div>
  )
}
