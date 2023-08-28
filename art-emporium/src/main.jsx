import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterAll from './Components/Footer/FooterAll'
import PaginaInicial from './Views/PaginaInicial/PaginaInicial';
import PaginaArte from './Views/PaginaArte/PaginaArte';
import PaginaCompra from './Views/PaginaCompra/PaginaCompra';

import HeaderBought from './Components/Header Bought/HeadBought';
import BodyCart from './Components/BodyCart/BodyCart';
import Arte from './Components/Arte/Arte.jsx';
import Headeradmin from './Components/HeadAdmin/HeadAdmin';
import BodyAdmin from './Components/BodyAdmin/BodyAdmin';
import Headermain from './Components/Header Main/HeadMain';
import BodyMain from './Components/BodyMain/Body';
import HeaderExponent from './Components/Header Exponent/HeadExponent';
import HeaderArt from './Components/Header Art/HeadArt';
import FormExpo from './Components/Form NewExpo/FormExpo'
import FormBou from './Components/Form NewBou/FormBou.jsx'
import SubirArte from './Components/SubirArte/SubirArte'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
  
  <Routes>
  <Route path="/" element={<PaginaInicial />} />
  <Route path="/PaginaArte" element={<PaginaArte />} />
  <Route path="/PaginaCompra" element={<PaginaCompra />} />
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
<HeaderBought />

<BodyMain />

<FooterAll />
</>
)*/

/*ReactDOM.createRoot(document.getElementById('root')).render(
<>
<HeaderExponent />

<BodyMain />

<FooterAll />
</>
)*/

/*ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <FormExpo />

    <FooterAll />
  </>
)*/

/*ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <FormBou />

    <FooterAll />
    </>
)*/

/*ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <SubirArte />

  <FooterAll />
  </>
  )*/
