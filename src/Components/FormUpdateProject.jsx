import React from 'react';
import { Link, NavLink ,Outlet} from 'react-router-dom';
import { updateProject } from './api';
import { useState  } from 'react';

const FormUpdateProject = () => {
  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');

  const handleUpdateProject = async (e) => {
    e.preventDefault();

    try {
      await updateProject(code, startDate, description);
      console.log('Project updated successfully'); 
      setCode('');
      setDescription('');
      setStartDate('');
    } catch (error) {
      console.error('Error updating project:', error);

    }
  };
  return (
    <div className='w-full h-full  flex flex-col justify-center items-center mt-9 '>
        
        <form action="" className='w-[600px] relative h-[500px] bg-slate-100 flex flex-col border-2 border-red-600 justify-center items-center  mt-4 shadow-lg shadow-slate-900' onSubmit={handleUpdateProject}>
            <label htmlFor="code" className='text-[35px] text-white'>code project :</label>
            <input type="text" id='code' name='code' className='w-[400px] bg-slate-100 border-2 border-red-600 text-center' required value={code} onChange={(e) => setCode(e.target.value)}/>
            <label htmlFor="description"  className='text-[35px] mt-5 text-white'>description :</label>
            <input type="text" id='description' name='description' className='w-[400px] bg-slate-100 border-2 border-red-600 text-center' required value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <label htmlFor="startdate" className='text-[35px] mt-5 text-white'>start Date:</label>
            <input type="text" id='startdate' name='startDate' className='w-[400px] bg-slate-100 border-2 border-black text-center mb-3' required value={startDate} onChange={(e)=>setStartDate(e.target.value)}/>
            <div className='flex mb-9'>
                <input type="submit" className='w-[70px] bg-green-600 ml-4 rounded-md text-white text-lg cursor-pointer' value='Submit'  />
               
            </div>
           
        </form>
    </div>
  )
}

export default FormUpdateProject