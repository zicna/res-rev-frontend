import RestaurantContainer from "./components/RestaurantContainer";
import MainHeader from './components/MainHeader'

import { BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <MainHeader />
        <RestaurantContainer />
      </Router>
    </div>
  );
}

export default App;
