import "./App.scss";
import Header from "./components/header/Header";
import Dashboard from "./pages/dashboard/Dashbaord";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
