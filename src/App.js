import NavBar from './components/NavBar'

import { BrowserRouter as Router} from 'react-router-dom'
import Layout from "./pages/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Layout />
      </Router>
    </div>
  );
}

export default App;
