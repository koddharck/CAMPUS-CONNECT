import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Splash1 from '../pages/Splash/Splash1.jsx'
import Splash2 from '../pages/Splash/Splash2.jsx'
import Splash3 from '../pages/Splash/Splash3.jsx'
import Splash4 from '../pages/Splash/Splash4.jsx'
import SignIn from '../pages/SignIn/SignIn.jsx'
import SignUp from '../pages/SignUp/SignUp.jsx'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash1 />} />
        <Route path="/splash-2" element={<Splash2 />} />
        <Route path="/splash-3" element={<Splash3 />} />
        <Route path="/splash-4" element={<Splash4 />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
