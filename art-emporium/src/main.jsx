import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderBought from './Components/Header Bought/HeadBought';
import Arte from './Components/Arte/Arte.jsx';
import Headermain from './Components/Header Main/HeadMain';
import Header from './Components/Header Exponent/HeadExponent';
import HeaderArt from './Components/Header Art/HeadArt';
import FormExpo from './Components/Form NewExpo/FormExpo'
import FormBou from './Components/Form NewBou/FormBou.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<>
<HeaderBought />

<Arte />

{/* <Headermain /> */}

</>
) 

/*ReactDOM.createRoot(document.getElementById('root')).render(
<>
<Header />
</>
)*/

/*ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <HeaderArt />

    <Arte />
    </>
)*/

/*ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <FormExpo />
  </>
)*/

/*ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <FormBou />
    </>
)*/
