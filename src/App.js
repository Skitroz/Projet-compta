import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages";
import Inscription from "./pages/inscription";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}