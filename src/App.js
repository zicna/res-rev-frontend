import NavBar from "./components/NavBar";
import Header from './pages/Header'
import Footer from './pages/Footer'

import { BrowserRouter as Router } from "react-router-dom";
import MainContainer from "./containers/MainContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <NavBar />
        <MainContainer />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
