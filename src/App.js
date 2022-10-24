import { Routes , Route } from 'react-router-dom'
import Mainpage from './pages/Mainpage';
import Productpage from './pages/Productpage';
import Checkoutpage from './pages/Checkoutpage';
import "@fontsource/open-sans";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Mainpage /> }/>
        <Route path="/Checkoutpage" element={ <Checkoutpage /> }/>
        <Route path="/product/:id" element={ <Productpage /> }/>
      </Routes>
    </>
  );
}

export default App;
