import React from 'react';

import {MemoExample} from "./components/MemoExample";

export const PageMemo = () => {

   return (
      <>

         <h1>React | el método React.memo.</h1>

         <hr className="my-4"/>

         <h5>Este método hay que aprenderlo ates de aprender lo que son los Hooks useMemo y useCallback.</h5>

         <br/>

         <p>
            Cuando algo cambia en el state de un componente, React manda a renderizar otra vez ese mismo componente y a
            su vez cualquier otro componente hijo que este dentro de su render, este el componente hijo asociado al
            estado cambiante o no, MMmm claro se entiende que si hay algún componente asociado a ese estado que ha
            cambiado pues este también reaccione y esto está bien, hasta cierto punto.
         </p>

         <p>
            Si el state cambiante no está asociado a ningún componente hijo este igual es renderizado pero que pasa si
            ese componente hijo hace operaciones pesadas en su inicio cada vez que se renderiza se volverían a ejecutar
            esas funciones pesadas y lo que se necesita es que eso ocurra una sola vez, aquí es donde brilla el
            método <span style={{color: "#61dafb"}}>React.memo</span>
         </p>

         <hr className="my-4"/>

         <p className="lead"><strong>Presiona <b>F12</b></strong> y <span className="text-success">Abre la consola, ve la salida.</span>
         </p>

         <hr className="my-4"/>

         <MemoExample/>

         <hr className="my-4"/>

         <p className="lead">
            <strong>
               <b>Código fuente, <a href="https://github.com/dennysjmarquez/React-Hooks/tree/master/src/pages/PageMemo/components"
                                    target="_blank" rel="noreferrer">haga
                  clic aquí</a>.</b>
            </strong>
         </p>


      </>
   );
};
