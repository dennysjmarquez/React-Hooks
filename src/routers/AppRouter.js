import React from 'react';
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";

import {HooksRouter} from "./HooksRouter";
import {PageIndex} from "../pages/PageIndex/PageIndex";

export const AppRouter = () => {
   return (
      <HashRouter>
         <Switch>

            <Route path='/' exact component={PageIndex}/>
            <Route path='/' component={HooksRouter}/>

            <Redirect to='/'/>

         </Switch>
      </HashRouter>
   );
};
