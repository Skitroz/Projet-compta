import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages";
import Inscription from "./pages/inscription";
import Connexion from "./pages/connexion";
import Notfound from "./pages/404";
import { AuthProvider } from "./pages/authContext";
import TableauDeBord from "./pages/tableauDeBord";

export default function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="*" element={<Notfound />} />
            <Route path="/tableau-de-bord" element={<TableauDeBord />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}