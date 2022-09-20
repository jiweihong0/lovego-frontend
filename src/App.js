import Navbar from "./components/navbar/Navbar";
import Marquee from './components/marquee/Marquee';
import Carousel from './components/Carousel/Carousel';
function App() {
  return (
    <>
      <Navbar />
      <section className="template">
        <Marquee />
        <Carousel />
      </section>
    </>
  );
}

export default App;
