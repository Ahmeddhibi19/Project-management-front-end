import React from 'react';
import { Link, NavLink ,Outlet} from 'react-router-dom';
import { getAllTasks } from './apiTask';
import  { useState, useEffect } from 'react';


const Tasks = () => {
    const [tasks,setTasks]=useState([]);
    useEffect(() => {
        const fetchTasks = async () => {
          try {
            const tasksData = await getAllTasks(); 
            setTasks(tasksData);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchTasks();
      }, []);
  return (
    <div className='w-full h-full flex justify-center mt-20'>
        <div className='w-[1200px] h-full flex justify-center items-center flex-col'>
            <div className='w-[200px] rounded-md mb-5 mt-7 bg-blue-600 text-white text-[30px] text-center cursor-pointer shadow-lg shadow-slate-900'><NavLink to='/alltasks/addtask'>add Task</NavLink></div>
            <div className='w-full text-[32px]  bg-green-600 text-center text-white'>All Tasks</div>
            <table className='w-full shadow-lg shadow-slate-900'>
                <thead className='w-full text-[25px]  bg-red-600 text-white'>
                    <tr className='flex justify-around'>
                        <td>code</td>
                        <td>description</td>
                        <td>start date</td>
                        <td>end date </td>
                        <td># project code</td>
                    </tr>
                </thead>
                <tbody className='text-[22px]'>
                    {
                        tasks.map((task)=>(
                        <tr key={task.code} className='w-full bg-gray-200 border-b-2 border-black flex justify-around'>
                            <td className='ml-[30px]'>{task.code}</td>
                            <td className='ml-[100px]'>{task.description}</td>
                            <td className='text-[12px] ml-[50px] flex items-center'>{task.startDate}</td>
                            <td className='text-[12px] flex items-center mr-[110px]'>{task.endDate}</td>
                            <td className=' mr-[60px]'>{task.code_project}</td>
                    </tr>
                        ))
                    }
                    
                </tbody>
            </table>


    </div>
    </div>
    
  )
}

export default Tasks