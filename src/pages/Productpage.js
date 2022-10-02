import Navbar from "../components/navbar/Navbar";
import Footer from '../components/Footer/Footer';
import Popular from '../components/Popular/Popular';
import Content from '../components/Content/Content';
import Detail from "../components/Content/Detail";

function Productpage() {
    return ( 
        <div>
            <Navbar/>
            <Content/>
            <Detail/>
            <Popular/>
            <Footer/>
        </div>
     );
}

export default Productpage;