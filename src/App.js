import MainHeader from './components/MainHeader'

import { BrowserRouter as Router} from 'react-router-dom'
import Layout from "./pages/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <MainHeader />
        <Layout />
      </Router>
    </div>
  );
}

export default App;
