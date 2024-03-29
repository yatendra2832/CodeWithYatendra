import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar1 from "./components/Navbar1";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Tutorial from "./pages/Tutorial";
import Notes from "./pages/Notes";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import WorkWithUs from "./pages/WorkWithUs";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Logout from "./pages/Logout";

import AdminLayout from "./components/layouts/Admin-Layout";
import AdminUsers from "./pages/AdminUsers";
import AdminContacts from "./pages/AdminContacts";
import AdminApplications from "./pages/AdminApplications";
import Profile from "./pages/Profile";
import AdminUpdate from "./pages/AdminUpdate";
function App() {
  return (
    <>
      <Router>
        <Navbar1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/workwithus" element={<WorkWithUs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="applications" element={<AdminApplications />} />
            <Route path="users/:id/edit" element={<AdminUpdate />} />
          </Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
