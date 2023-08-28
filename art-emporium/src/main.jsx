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


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
  
  <Routes>
  <Route path="/" element={<PaginaInicial />} />
  <Route path="/PaginaArte" element={<PaginaArte />} />
  <Route path="/PaginaCompra" element={<PaginaCompra />} />
  <Route path="/PaginaExpo" element={<PaginaExpo />} />
  <Route path="/PaginaBou" element={<PaginaBou />} />
  <Route path="/InicialExpo" element={<InicialExpo />} />
  <Route path="/SubirMiArte" element={<SubirMiArte />} />
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
  <SubirArte />

  <FooterAll />
  </>
  )*/
