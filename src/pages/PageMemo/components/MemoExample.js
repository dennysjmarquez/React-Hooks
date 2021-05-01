import React from 'react'
import {useState} from 'react';
import {WithMemo} from "./WithMemo";
import {WithoutMemo} from "./WithoutMemo";
import {ComponentFrame} from "../../../components/shared/componentFrame";

export const MemoExample = () => {

   const [counter, setCounter] = useState(1);
   const [show, setShow] = useState(true);

   const increment = () => {
      setCounter(counter + 1);
   }

   const decrement = () => {
      setCounter(counter - 1);
   }

   return (

      <>

         <div className={"my-4 p-2"} style={{border: "1px solid #000"}}>

            <p>Cambia el state del componente de orden superior <span className="p-1"
                                                                      style={{backgroundColor: "red"}}>MemoExample</span>
            </p>

            <hr className="mt-4"/>

            <button
               className="btn btn-outline-primary ml-3"
               onClick={() => {

                  setShow(!show);
               }}
            >
               Cambiar el state: (show) = {JSON.stringify(show)}
            </button>

            <div className={"d-inline ml-2"}>
               <span>Al presionar el botón solo se volverá a renderizar el Componente que no usa React.memo</span>
            </div>

         </div>

         <div className={"my-4 p-2"} style={{border: "1px solid #000"}}>


            <p>
               Cambia el state del componente de orden superior <span className="p-1"
                                                                      style={{backgroundColor: "red"}}>MemoExample</span>
            </p>

            <p>
               y de los componentes que comparten el mismo state <span className="p-1"
                                                                       style={{backgroundColor: "red"}}>WithMemo</span>
            </p>

            <p><span className="p-1 ml-1"
                     style={{backgroundColor: "red"}}>WithoutMemo</span></p>


            <hr className="mt-4"/>

            <div className={"d-inline-flex align-items-center"}
                 style={{padding: "10px", border: "1px solid #000", borderRadius: "5px"}}>
               Cambiar el state: (counter)
               <div className="ml-4">
                  <button className="btn btn-primary" onClick={increment}>+1</button>
                  <button className="btn btn-primary ml-2" onClick={decrement}>-1</button>
               </div>
            </div>

            <div className={"d-inline ml-2"}>
               <span>Al presionar estos incrementadores hará que se vuelvan a renderizar los componentes asociados al state (counter)</span>
            </div>

         </div>

         <ComponentFrame title="Component - MemoExample" color={"red"}>


            <WithMemo counter={counter}/>

            <hr className="my-4"/>

            <WithoutMemo counter={counter}/>

         </ComponentFrame>

      </>

   )
}
