import { Route, Routes } from "react-router-dom"
import Navigation from "./Components/Shared/Navigation/Navigation";
import Home from "./Pages/Home/Home";
import './App.css'
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
function App() {
  return (
    <>
    <Navigation />
    <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path='/register' exact element={<Register />} />
        <Route path='/login' exact element={<Login/>} />
      </Routes>
      </>
  );
}

export default App;
