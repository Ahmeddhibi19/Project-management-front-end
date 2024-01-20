import React from 'react';
import { Link, NavLink ,Outlet} from 'react-router-dom';
import { useState  } from 'react';
import { updateTask } from './apiTask';

const FormUpdateTask = () => {

  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate,setEndDate]=useState('');


  const handleUpdateTask = async (e) => {
    e.preventDefault();

    try {
      await updateTask(code, startDate,endDate, description);
      console.log('Project updated successfully'); 
      setCode('');
      setDescription('');
      setStartDate('');
      setEndDate('');
    } catch (error) {
      console.error('Error updating project:', error);

    }
  };



  return (
    <div className='w-full h-full flex flex-col justify-center items-center mt-9 '>

    <form action="" className='w-[600px] h-[600px] relative bg-slate-100 flex flex-col border-2 border-red-600 justify-center items-center  mt-4 shadow-lg shadow-slate-900' onSubmit={handleUpdateTask}>
        <label htmlFor="code" className='text-[35px] text-white'>code Task :</label>
        <input type="text" id='code' name='code' className='w-[400px] bg-slate-100 border-b-2 border-black text-center' required  value={code} onChange={(e) => setCode(e.target.value)}/>
        <label htmlFor="description" className='text-[35px] mt-5 text-white'>description  :</label>
        <input type="text" id='description' name='description' className='w-[400px] bg-slate-100 border-2 border-red-600 text-center' required value={description} onChange={(e)=>setDescription(e.target.value)}/>
        <label htmlFor="startdate" className='text-[35px] mt-5 text-white'>start Date:</label>
        <input type="text" id='startdate' name='startdate' className='w-[400px] bg-slate-100 border-b-2 border-black text-center mb-3' required placeholder='this format : yyyy-mm-ddThh:mm:ssZ' value={startDate} onChange={(e)=>setStartDate(e.target.value)}/>
        <label htmlFor="enddate" className='text-[35px] mt-5 text-white'>end Date :</label>
        <input type="text" id='enddate' name='enddate' className='w-[400px] bg-slate-100 border-2 border-red-600 text-center mb-3' required placeholder='this format : yyyy-mm-ddThh:mm:ssZ' value={endDate} onChange={(e)=>setEndDate(e.target.value)}/>
        <div className='flex mb-9'>
            <input type="submit" className='w-[70px] bg-blue-600 ml-4 rounded-md text-white text-lg cursor-pointer' value='Submit'  />
           
        </div>
       
    </form>
</div>
  )
}

export default FormUpdateTask;