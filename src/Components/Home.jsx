import React from 'react'
import { Link ,NavLink} from 'react-router-dom';

const Home = (props) => {
  return (
    <div className='w-full h-[500px] flex justify-center items-center flex-col'>
        <div className='w-[300px] text-center bg-red-600 text-white text-[36px] rounded-md mb-9 cursor-pointer shadow-lg shadow-slate-900'>
            <NavLink to={props.allproject}> Show All Projects</NavLink>
        </div>
        <div className='w-[300px] text-center bg-green-600 text-white text-[36px] rounded-md mb-9 cursor-pointer shadow-lg shadow-slate-900'>
            <NavLink to={props.alltasks}> Show All Tasks</NavLink>
        </div>
    </div>
  )
}

export default Home