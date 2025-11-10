import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MiniNav from "./components/layout/MiniNav"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Admission from "./pages/Admission"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/StudentPortal/Dashboard"
import Courses from "./pages/StudentPortal/Courses"
import Grades from "./pages/StudentPortal/Grades"
import Attendance from "./pages/StudentPortal/Attendance"
import Announcements from "./pages/StudentPortal/Announcements"
import Profile from "./pages/StudentPortal/Profile"
import { GlobalStyle } from "./styles/GlobalStyle"

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        {/* Public Routes with Nav and Footer */}
        <Route
          path="/*"
          element={
            <>
              <MiniNav />
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/admission" element={<Admission />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
              <Footer />
            </>
          }
        />
        {/* Student Portal Routes - No Nav/Footer */}
        <Route path="/student/dashboard" element={<Dashboard />} />
        <Route path="/student/courses" element={<Courses />} />
        <Route path="/student/grades" element={<Grades />} />
        <Route path="/student/attendance" element={<Attendance />} />
        <Route path="/student/announcements" element={<Announcements />} />
        <Route path="/student/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App
