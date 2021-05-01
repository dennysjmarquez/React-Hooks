import React from 'react';

export const ComponentFrame = ({title = "", color= "", ...props }) => {

   return (
      <div className={"mt-4"}>

         <div className={"d-inline-flex px-2 py-1"} style={{backgroundColor: color}}>
            {title}
         </div>

         <div className={"p-3"} style={{border: `1px solid ${color}`}}>

            {props.children}

         </div>
      </div>
   );
};
