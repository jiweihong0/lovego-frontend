import { Routes , Route } from 'react-router-dom'
import Mainpage from './pages/Mainpage';
import Productpage from './pages/Productpage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Mainpage /> }/>
        <Route path="/product/:id" element={ <Productpage /> }/>
      </Routes>
    </>
  );
}

export default App;
