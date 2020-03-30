import React from 'react';

const prodact = props => {
   const prodactsRender = props.prodacts.map((data, idx) => {
      return (
      <div key={idx}>
         <img src={data.image}/>
         <p>{data.name}</p>
         <span>${data.price}</span>
      </div>
      )
});
  return (
   <div>
   {prodactsRender}
   </div>
  )
}

export default prodact;