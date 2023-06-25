import './App.css'
import { Header } from './common/Header/Header'
// import { ChangeView } from './common/ChangeView/ChangeView'
import { Body } from './pages/Body/Body'
import "bootstrap/dist/css/bootstrap.min.css";

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