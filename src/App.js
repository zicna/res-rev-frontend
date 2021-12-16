import NavBar from './components/NavBar'
import Header from './pages/Header'
import Footer from './pages/Footer'

import { BrowserRouter as Router } from 'react-router-dom'
import MainContainer from './containers/MainContainer'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <MainContainer />
        <Footer />
      </Router>
    </div>
  )
}

export default App
