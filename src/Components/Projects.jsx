import React from 'react'
import { FaTrash, FaPencilAlt,FaPlus } from 'react-icons/fa';
import { Link, NavLink ,Outlet} from 'react-router-dom';
import  { useState, useEffect } from 'react';
import { getAllProjects , deleteProject } from './api'; 
import { deleteTask } from './apiTask';



const Projects = (props) => {
    const [projects, setProjects] = useState([]);
    const handleDelete = async (projectCode) => {
        await deleteProject(projectCode);
        setProjects((prevProjects) =>
        prevProjects.filter((project) => project.code !== projectCode)
        );
    };
    const handleDeleteTask = async (projectCode, taskCode) => {
        await deleteTask(projectCode, taskCode);
        setProjects((prevProjects) =>
            prevProjects.map((project) => {
                if (project.code === projectCode) {
                    const updatedTasks = project.tasks.filter(
                        (task) => task.code !== taskCode
                    );
                    return { ...project, tasks: updatedTasks };
                }
                return project;
            })
        );
    };
   
    

    useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await getAllProjects(); 
        setProjects(projectsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

  

  return (
    <div className='w-full h-full flex justify-center mt-20'>
        <div className='w-[1200px] h-full flex justify-center items-center flex-col'>
            <div className='w-[200px]  mb-5 bg-red-600 text-white text-[30px] text-center cursor-pointer shadow-lg shadow-slate-900 fixed top-5 right-5'><NavLink to={props.addproject}>add project</NavLink></div>
            <div className='w-full text-[32px]  bg-red-600 text-center text-white rounded-xl'>All Projects</div>
            <table className='w-full rounded-xl '>
                
                <tbody className='text-[22px] '>
                {
                    projects.map((project)=>(
                        <div className='shadow-lg shadow-slate-900 mb-14  '>
                            <tr key={project.code} className='w-full bg-blue-600 border-b-2  flex justify-around text-white rounded-xl'>
                                <td>code</td>
                                <td >description</td>
                                <td>start date</td>
                                <td className=' w-[50px]'></td>
                            </tr>
                            <tr  className='w-full bg-gray-200  flex justify-around rounded-xl'>
                                <td className='ml-[50px]'>{project.code}</td>
                                <td className='ml-[50px]'>{project.description}</td>
                                <td className='text-[15px]'>{project.startDate}</td>
                                <td className='flex items-center' >
                                    <ul className='w-[40px] flex flex-row justify-between '>
                                        <li className='W-[20px] text-blue-600 mr-1 cursor-pointer '><NavLink to={props.updateproject}  title='update project'>update</NavLink></li>
                                        <li className=' w-[20px] text-red-600 ml-1 cursor-pointer'><NavLink  title='delete project' onClick={()=>handleDelete(project.code)} >delete</NavLink></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className='w-full bg-gray-200 flex'>
                                <td  className=' w-full text-center flex justify-center bg-red-400 text-white rounded-xl '>
                                    All Tasks of this Project
                                    <NavLink to={props.addtask} className="ml-5 text-green-600">add task</NavLink> 
                                </td>
                            </tr>
                            <tr className='w-full flex justify-around bg-blue-600 text-white rounded-xl'>
                                <td>code task</td>
                                <td>description</td>
                                <td>start date</td>
                                <td>end date</td>
                                <td className=' w-[20px]'></td>
                            </tr>
                            
                            
                            {
                                project.tasks.map((task)=>(
                                    <tr className='w-full flex justify-around bg-gray-200'>
                                        <td className='ml-[70px]'>{task.code}</td>
                                        <td className='ml-[100px]'>{task.description}</td>
                                        <td className='text-[12px] ml-[100px] flex items-center'>{task.startDate}</td>
                                        <td className='text-[12px] flex items-center'>{task.endDate}</td>
                                        <td className=' flex flex-row items-center '>
                                            <ul className='w-[40px] flex flex-row justify-between '>
                                                <li className='W-[20px] text-blue-600 mr-2 cursor-pointer '><NavLink to={props.updatetask}  title='update task'>update</NavLink></li>
                                                <li className=' w-[20px] text-red-600 ml-2 cursor-pointer'><NavLink  title='delete task' onClick={()=>handleDeleteTask(project.code,task.code)}>delete</NavLink></li>
                                            </ul>
                                        </td>
                                    </tr>
                                ))
                            }
                            
                            
                        </div>
                        
                        
                    ))
                }
                    
                    
                    
                    
                    
                </tbody>
            </table>


    </div>
    </div>
    
  )
}

export default Projects