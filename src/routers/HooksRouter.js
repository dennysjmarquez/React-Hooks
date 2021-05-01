import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {PageMemo} from "../pages/PageMemo/PageMemo";


export const HooksRouter = () => {
   return (

      <div className={"container-box bg-light-f0f0f2 h-100"}>
         <div className={"jumbotron mt-5 mb-5 mx-auto"}>


            <Switch >

               <Route path='/hooks/react-memo' exact component={PageMemo}/>

               <Redirect to='/'/>

            </Switch>


         </div>
      </div>


   );
};
