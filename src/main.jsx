import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Content from './pages/content'
import Clases from './pages/clases'

// import { router } from './router/router.jsx';
// import { RouterProvider } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa el componente Routes y Route
import { router } from "./router/router.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}

    <Router>
      {/* Utiliza el componente Routes para definir tus rutas */}
      <Routes>
        {/* Utiliza el componente Route para definir cada ruta */}
        <Route path="content" element={<Content />} />
        <Route path="/" element={<App />} />
        <Route path="clases" element={<Clases />} />
      </Routes>
    </Router>

  </React.StrictMode>,
)
