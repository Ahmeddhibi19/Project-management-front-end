import React from 'react'
import { Link, NavLink ,Outlet} from 'react-router-dom';
import { addProject } from './api';
import { useState } from 'react';

const FormAddProject = () => {

  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProject(description, startDate);
      console.log('Project added successfully');
      setDescription('');
      setStartDate('');
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  return (
    <div className='w-full h-full flex flex-col justify-center items-center mt-9 '>
        
        <form action="" className='w-[600px] h-[500px] bg-slate-100 flex flex-col border-2 border-red-600 justify-center items-center  mt-4 shadow-lg shadow-slate-900 relative' onSubmit={handleSubmit}>
            <label htmlFor="code" className='text-[35px] text-white'>code project:</label>
            <input type="text" id='code' className='w-[400px] bg-slate-100 border-2 border-red-600 text-center '/>
            <label htmlFor="description" className='text-[35px] mt-5 text-white'>description :</label>
            <input type="text" id='description' className='w-[400px] bg-slate-100 border-2 border-red-600 text-center' required value={description} onChange={(e) => setDescription(e.target.value)}/>
            <label htmlFor="startdate" className='text-[35px] mt-5 text-white'>start Date  :</label>
            <input type="text" id='startdate' className='w-[400px] bg-slate-100 border-2 border-red-600 text-center mb-3' required  value={startDate}onChange={(e) => setStartDate(e.target.value)}/>
            <div className='flex mb-9'>
                <input type="submit" className='w-[70px] bg-green-600 ml-4  text-white text-lg cursor-pointer' value='Submit' />
            </div>
        </form>
    </div>
  )
}

export default FormAddProject