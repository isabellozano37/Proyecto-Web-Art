import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Headermain from './Components/Header Main/HeadMain.jsx';
import Arte from './Components/Arte/Arte.jsx';
import Headeradmin from './Components/HeadAdmin/HeadAdmin';
import BodyAdmin from './Components/BodyAdmin/BodyAdmin';

ReactDOM.createRoot(document.getElementById('root')).render(
<>
{/* <Headermain /> */}
<Headeradmin />
{/* <Arte /> */}
<BodyAdmin />
</>
)


