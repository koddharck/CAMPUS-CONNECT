import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Splash1 from '../pages/Splash/Splash1.jsx'
import Splash2 from '../pages/Splash/Splash2.jsx'
import Splash3 from '../pages/Splash/Splash3.jsx'
import Splash4 from '../pages/Splash/Splash4.jsx'
import SignIn from '../pages/SignIn/SignIn.jsx'
import SignUp from '../pages/SignUp/SignUp.jsx'
import Onboarding1 from '../pages/Onboarding/Onboarding1.jsx'
import Onboarding2 from '../pages/Onboarding/Onboarding2.jsx'
import Onboarding3 from '../pages/Onboarding/Onboarding3.jsx'
import Home from '../pages/Home/Home.jsx'
import Discover from '../pages/Discover/Discover.jsx'
import Events from '../pages/Events/Events.jsx'
import Connections from '../pages/Connections/Connections.jsx'
import Profile from '../pages/Profile/Profile.jsx'
import Communities from '../pages/Communities/Communities.jsx'
import Blog from '../pages/Blog/Blog.jsx'
import ProtectedRoute from '../components/ProtectedRoute.jsx'

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

        <Route path="/onboarding-1" element={<Onboarding1 />} />
        <Route path="/onboarding-2" element={<Onboarding2 />} />
        <Route path="/onboarding-3" element={<Onboarding3 />} />

        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/discover" element={<ProtectedRoute><Discover /></ProtectedRoute>} />
        <Route path="/events" element={<ProtectedRoute><Events /></ProtectedRoute>} />
        <Route path="/connections" element={<ProtectedRoute><Connections /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/communities" element={<ProtectedRoute><Communities /></ProtectedRoute>} />
        <Route path="/blog" element={<ProtectedRoute><Blog /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes