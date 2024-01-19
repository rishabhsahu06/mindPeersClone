import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./compnoent/Header/Header";
import Footer from "./compnoent/Footer/Footer";
import Home from "./compnoent/Home/Home";
import Team from "./compnoent/Team/Team";
import OurScience from "./compnoent/OurScience/OurScience";
import Coaches from "./compnoent/Coaches/Coaches";
import PopUp from "./compnoent/PopUp/PopUp";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="team" element={<Team />} />
          <Route path="Coaches" element={<Coaches />} />
        </Routes>
      </BrowserRouter>
      <Header /> */}
      <BrowserRouter>
      <Header/>
        <Routes>
         <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/coaches" element = {<Coaches/>}/>
          <Route path="/ourScience" element= {<OurScience/>}></Route>


        </Routes>
        <Footer/>
      </BrowserRouter>

      
      {/* <Home />
      <Team />
      <OurScience />
      <Coaches />
      <Footer /> */}

      {/* <PopUp/> */}
    </>
  );
}

export default App;
