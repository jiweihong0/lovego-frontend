import Navbar  from "./components/navbar/Navbar";
import "./index.css";
function App() {
  return (
    <>
      <Navbar />
      <section className="template">
        <div className="marquee-block">
          <span>我是跑馬燈我是跑馬燈我是跑馬燈我是跑馬燈我是跑馬燈我是跑馬燈我是跑馬燈我是跑馬燈我是跑馬燈我是跑馬燈</span>
        </div>
      </section>
    </>
  );
}

export default App;
