import React from 'react';

// Components
import {ComponentFrame} from "../../../components/shared/componentFrame";


export const WithoutMemo = ({counter}) => {

   console.log('2 - WithoutMemo | Cargando el componente sin el método React.memo ');

   return (

      <ComponentFrame title="Component - WithoutMemo" color={"#ff7f50"}>

         <h4>Componente sin React.memo()</h4>
         <hr className="my-4"/>
         <p> Prop counter, state (counter) = {counter} </p>

      </ComponentFrame>

   );
};
