import "./App.scss";
import Header from "./components/header/Header";
import Boote from "./pages/boote/Boote";
import Dashboard from "./pages/dashboard/Dashbaord";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Reservierungen from "./pages/reservierungen/Reservierungen";
import NeuesBoot from "./pages/neuesboot/NeuesBoot";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/boote" element={<Boote/>}/>
          <Route path="/boote/neuesboot" element={<NeuesBoot/>}/>
          <Route path="/reservierungen" element={<Reservierungen/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
