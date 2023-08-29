import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterAll from './Components/Footer/FooterAll'
import PaginaInicial from './Views/PaginaInicial/PaginaInicial';
import PaginaArte from './Views/PaginaArte/PaginaArte';
import PaginaCompra from './Views/PaginaCompra/PaginaCompra';
import PaginaExpo from './Views/PaginaExpo/PaginaExpo';
import PaginaBou from './Views/PaginaBou/PaginaBou';
import InicialExpo from './Views/InicialExpo/InicialExpo';
import InicialBou from './Views/InicialBou/InicialBou';
import SubirMiArte from './Views/SubirArte/SubirArte';
import Miarte from './Views/Miarte/Miarte';
import OleoArte from './Views/Oleo/OleoArte';
import AcuarelaArte from './Views/Acuarela/Acuarela';
import BustosArte from './Views/Bustos/Bustos';
import CeramicaArte from './Views/Ceramica/Ceramica';


 ReactDOM.createRoot(document.getElementById('root')).render(
   <>
   <BrowserRouter>
  
   <Routes>
   <Route path="/" element={<PaginaInicial />} />
   <Route path="/PaginaArte" element={<PaginaArte />} />
   <Route path="/OleoArte" element={<OleoArte />} />
   <Route path="/AcuarelaArte" element={<AcuarelaArte />} />
   <Route path="/BustosArte" element={<BustosArte />} />
   <Route path="/CeramicaArte" element={<CeramicaArte />} />
   <Route path="/PaginaCompra" element={<PaginaCompra />} />
   <Route path="/PaginaExpo" element={<PaginaExpo />} />
   <Route path="/PaginaBou" element={<PaginaBou />} />
   <Route path="/InicialExpo" element={<InicialExpo />} />
   <Route path="/SubirMiArte" element={<SubirMiArte />} />
   <Route path="/Miarte" element={<Miarte />} />
   <Route path="/InicialBou" element={<InicialBou />} />
   </Routes>

   <FooterAll/>

   </BrowserRouter>
   </>
 )



/*ReactDOM.createRoot(document.getElementById('root')).render(
<>
<Headeradmin />

<BodyAdmin />

<FooterAll />
</>
)*/

/*ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <MiArte />
  
  <FooterAll />
  </>
  )*/

