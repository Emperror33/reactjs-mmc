import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./User/Home/Home";
import UserLayout from "./User/UserLayout";
import Blog from "./User/Blog/Blog";
import SingleBlog from "./User/Blog/SingleBlog";
import AdminHome from "./Admin/Home/AdminHome";
import AdminLayout from "./Admin/Layout";
import EditBlog from "./Admin/Blog/EditBlog";
import AddBlog from "./Admin/Blog/AddBlog";
import Login from "./Auth/Login";
import { Logout } from "@mui/icons-material";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/login" element={<Login />}/> 
          {/* user layout starts*/}
          {/* <Route path="/login" element={<Login />}/>  */}
          <Route path="" element={<UserLayout />}>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
          </Route>
          {/* user layout ends */}
          {/* admin layout starts */}
          <Route path="/admin/" element={<AdminLayout />}>
            <Route path="home" element={<AdminHome />} />
            <Route path="logout" element={<Logout />} />
            <Route path="add" element={<AddBlog />} />
            <Route path="edit/:id" element={<EditBlog />} />
          </Route>
          {/* admin layout end */}
        </Routes>
      </Router>
    </>
  );
}

export default App;