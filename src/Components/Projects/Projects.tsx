import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import {AuthContext} from '../../Context/AuthContext';
import noData from './../../assets/images/no-data.png'
import { useNavigate } from 'react-router';
export default function Projects() {
  const [projects, setProjects] = useState([])
  const { baseUrl,requestHeaders } : any = useContext(AuthContext);
  const navigate=useNavigate()

  let getProjectsList = () =>{
    axios
    .get(`${baseUrl}/Project/manager`,{headers:requestHeaders})
    .then((response:any) => {
    
      setProjects(response?.data)

    })
    .catch((error:any) => {
      console.log("error",error.response.data.message)
    });
     
  }

  const navigateToNew = () =>{
    navigate("/dashboard/add-Project");  

  }

  useEffect(() => {
    getProjectsList()
  }, [])
  
  return (
    <>
    <div className="header bg-info d-flex justify-content-between p-3">
      <h3>Projects</h3>
      <button onClick={navigateToNew} className='btn btn-warning rounded-5'><i className="fa fa-plus" aria-hidden="true"></i> Add new project</button>

    </div>

    <div className="table-container p-3">
      <table className="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
     
      <th scope="col">Num of tasks</th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>
   {projects.length>0 ? projects.map((project:any)=>(
           <tr key={project?.id}>
           <th scope="row">{project?.title}</th>
           <td>{project?.description}</td>
           <td>{project?.task?.length}</td>
           <td></td>
         </tr>
   )):<div className='text-center'><img src={noData} alt="" /></div>}
  </tbody>
</table>

      </div>
    </>
  )
}
