import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import PostUser from "./components/postUser/postUser";
import UpdateUser from "./components/updateUser/updateUser";
import Header from "./components/Header/header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user" element={<PostUser />} />
        <Route path="/user/:id" element={<UpdateUser />} />
      </Routes>
    </div>
  );
}

export default App;
