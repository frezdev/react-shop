import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "@containers/Layout";
import Login from "@containers/Login"
import RecoveryPass from "@containers/RecoveryPass";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound.jsx";
import '@styles/global.css';

function App() {
  return (
    <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/recovery-password" element={<RecoveryPass />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App;