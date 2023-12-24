import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import {AuthContext} from '../../Context/AuthContext';

export default function Dashboard(props:any) {
  const [todoCount, setTodoCount] = useState(0);
  const [progressCount, setProgressCount] = useState(0);
  const [doneCount, setDoneCount] = useState(0);
  const [activeCount, setActiveCount] = useState(0);
  const [inActiveCount, setInActiveCount] = useState(0);
  const { baseUrl,requestHeaders,userRole } : any = useContext(AuthContext);

  let getTasksCounts = () =>{
    axios
    .get(`${baseUrl}/Task/count`,{headers:requestHeaders})
    .then((response:any) => {
       console.log(response);
       setTodoCount(response?.data?.toDo)
       setProgressCount(response?.data?.inProgress)
       setDoneCount(response?.data?.done)
    })
    .catch((error:any) => {
      console.log("error",error.response.data.message)
    });
     
  }
  let getUsersCounts = () =>{
    axios
    .get(`${baseUrl}/Users/count`,{headers:requestHeaders})
    .then((response:any) => {
       console.log(response);
       setActiveCount(response?.data?.activatedEmployeeCount)
       setInActiveCount(response?.data?.deactivatedEmployeeCount)
    })
    .catch((error:any) => {
      console.log("error",error.response.data.message)
    });
     
  }
  useEffect(() => {
    getTasksCounts();
    getUsersCounts()
  
  }, [])
  
  return (
    <>
      <div className='bg-info p-3'>
        <div className='bg-danger p-4'>headeeeeeeeeeer</div>

        <div className="row">
           <div className="col-md-6">
            <div className="bg-warning">
               <div className="title">
                   <h3>Tasks</h3>
                   <span>Lorem ipsum dolor sit amet,consecteture</span>
               </div>
               <div className="row">
                <div className="col-md-4">
                  <div className="status bg-light text-center rounded-5 p-3">
                    <i className="fa fa-tasks fa-2x" aria-hidden="true"></i>
                    <h3>Todo</h3>
                    <h2>{todoCount}</h2>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="status bg-light text-center rounded-5 p-3">
                    <i className="fa fa-tasks fa-2x" aria-hidden="true"></i>
                    <h3 className='h4'>In-progress</h3>
                    <h2>{progressCount}</h2>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="status bg-light text-center rounded-5 p-3">
                    <i className="fa fa-tasks fa-2x" aria-hidden="true"></i>
                    <h3>Done</h3>
                    <h2>{doneCount}</h2>
                  </div>
                </div>
               </div>
            </div>
           </div>
           <div className="col-md-6">
            <div className="bg-warning">
            <div className="title">
                   <h3>Users</h3>
                   <span>Lorem ipsum dolor sit amet,consecteture</span>
               </div>
               <div className="row">
                <div className="col-md-6">
                  <div className="status bg-light text-center rounded-5 p-3">
                    <i className="fa fa-tasks fa-2x" aria-hidden="true"></i>
                    <h3>Active</h3>
                    <h2>{activeCount}</h2>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="status bg-light text-center rounded-5 p-3">
                    <i className="fa fa-tasks fa-2x" aria-hidden="true"></i>
                    <h3>De-active</h3>
                    <h2>{inActiveCount}</h2>
                  </div>
                </div>
                
               </div>
            </div>
           </div>
        </div>
        </div>

    </>
  )
}
