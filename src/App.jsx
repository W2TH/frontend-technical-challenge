import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/main-layout/MainLayout";
import Vista1 from "./pages/Vista1";
import Home from "./pages/Home";
import Vista2 from "./pages/Vista2";
import { PAGES } from "./assets/databases/pages";

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" element={<Navigate to={PAGES.HOME.link} />} />
        <Route path={PAGES.HOME.link} element={<Home/>} />
        <Route path={PAGES.VISTA1.link} element={<Vista1/>} />
        <Route path={PAGES.VISTA2.link} element={<Vista2/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
