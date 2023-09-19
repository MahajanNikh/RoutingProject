import About from "./components/About";
import Home from "./components/Home";
import MyCards from "./components/MyCards";
import NewNavbar from "./components/NewNavbar";
import { HashRouter, Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
      
      {/* <MyCards />
      <About /> */}


      <NewNavbar />
      <Routes>
      <Route path="/home" element={<Home/>} /> 
        <Route path="/cards" element={<MyCards/>} /> 
        <Route path="/about" element={<About/>} /> 
      </Routes>

    </>
  );
}

export default App;
