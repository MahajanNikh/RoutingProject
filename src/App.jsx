import About from "./components/About";
import Home from "./components/Home";
import MyCards from "./components/MyCards";
import NewNavbar from "./components/NewNavbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
        <NewNavbar />
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/cards" element={<MyCards />} />
          <Route path="/about" element={<About />} />
        </Routes>
      

    </>
  );
}

export default App;
