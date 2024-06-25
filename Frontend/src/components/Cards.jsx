import React from 'react';

function Cards({ item }) {
    return (
      <>
      <div>
      <div className="mt-4 mb-4 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration:200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="books" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div> 
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white px-2 py-1 duration-200">Buy Now</div>
            </div>
          </div>
        </div> 
      </div>
      </div>
      </>
    );
  }
  
  export default Cards;
  