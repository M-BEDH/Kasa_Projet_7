import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home/Home'
import Apropos from './pages/A-propos/A-propos'
import Error from './pages/Erreur404/Erreur404'
import FicheLogement from './pages/Fiche-Logement/Fiche-logement'

function Routeur() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/à-propos" element={<Apropos />} />
          <Route path="*" element={<Error />} />
          <Route path="/logement/:id" element={<FicheLogement />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
export default Routeur
