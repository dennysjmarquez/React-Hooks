import React from 'react';

// Components
import {ComponentFrame} from "../../../components/shared/componentFrame";

export const WithMemo = React.memo(({counter}) => {

   console.log('1 - WithMemo | Cargando el componente con el método React.memo  ');

   return (

      <ComponentFrame title="Component - WithMemo" color={"#569cd6"}>

         <h4>Componente con React.memo()</h4>
         <hr className="my-4"/>
         <p> Prop counter, state (counter) = {counter} </p>

         <div dangerouslySetInnerHTML={{
            __html: `<p><span style="color:#499cd5;">export const </span><span style="color:#39c8b0;">WithMemo </span>= React.<span style="color:#dcdcaa;">memo</span>(({<span style="color:#9cdcfe;">counter</span>}) =&gt; {});</p>`
         }}/>

      </ComponentFrame>

   );
});
