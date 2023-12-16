import axios from 'axios';
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import {AuthContext} from '../../Context/AuthContext';
import { useNavigate } from 'react-router';

export default function AddProject() {
    const { baseUrl,requestHeaders } : any = useContext(AuthContext);
    const navigate =  useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data:any) => {
        axios
          .post(`${baseUrl}/Project`, data,{headers:requestHeaders})
          .then((response:any) => {
           //TODO: add success toast
        
            navigate("/dashboard/projects");  
          })
          .catch((error:any) => {
            //TODO: add error toast
            // getToastValue("error",error.response.data.message)
          });
      };
    
  return (
    <>
    <div className="header bg-info d-flex justify-content-between p-3">
      <h5>Add a New Project</h5>
    </div>

    <form className="form-container w-75 m-auto p-3" onSubmit={handleSubmit(onSubmit)}>
                     
              <div className="form-group my-3 position-relative">
                <input
                  placeholder="Enter Title"
                  className="form-control   mb-1"
                  type="text"
                  {...register("title", {
                    required: true,
                  })}
                />
                {errors.title && errors.title.type === "required" && (
                  <span className="text-danger">title is required</span>
                )}
              
              </div>

              <div className="form-group my-3 position-relative">
                <textarea  placeholder="Enter description"  
                className="form-control   mb-1"   {...register("description", {
                    required: true,
                  })}></textarea>
              
                {errors.description && errors.description.type === "required" && (
                  <span className="text-danger">description is required</span>
                )}
              </div>

             
              <div className="form-group my-3">
                <button className="btn w-100">Add</button>
              </div>
         </form>
    
    </>
  )
}
