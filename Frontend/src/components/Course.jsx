import React from 'react';
import list from "../../public/list.json";
import Cards from './Cards';
import {Link} from "react-router-dom";

function Course() {
  return (
    <div className='max-w-screen-2x1 mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl'>Course Page <span className='text-pink-500'>12345678:</span></h1>
        <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga consequuntur repellendus saepe delectus, voluptatum omnis, ratione aliquid veniam error quibusdam sapiente fugit. Eaque illum, adipisci iste odit voluptatibus nam officiis sequi quos consectetur?</p>
      <Link to="/">
      <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
        Back
        </button>
      </Link>
        </div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
           {
           list.map((item) => (
            <Cards item={item} key={item.id}/> ))
        }
        </div>
    </div>
  );
}

export default Course;
