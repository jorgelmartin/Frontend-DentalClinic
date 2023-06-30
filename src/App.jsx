import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import './App.css'
import { Header } from './common/Header/Header'
// import { ChangeView } from './common/ChangeView/ChangeView'
import { Body } from './pages/Body/Body'


function App() {

  return (
    <>
        <Header />
        <Body />
        {/* <Footer /> */}
    </>
  )
}

export default App