import Navbar from "./components/navbar/Navbar";
import Marquee from './components/marquee/Marquee';
import Carousel from './components/Carousel/Carousel';
import CardList from './components/Card/cardList';
import ListCard from './components/Listcard/ListCard';
function App() {
  return (
    <>
      <Navbar />
      <Marquee />
      <section className="template mainpage">
        <div className="round-section">
          <Carousel />
          <CardList />
        </div>
        <div className="round-section">
          <ListCard />
          <ListCard />
        </div>
      </section>
    </>
  );
}

export default App;
