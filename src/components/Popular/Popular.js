import lefticon from '../../imgs/lefticon.svg'
import Card from '../Card/card';
function Popular() {
    return (  
        <div className="popular-frame">
            <p className="popular-text">熱門商品</p>
            <div className="popular-list">
                <button className="popular-prev" >
                    <img src={lefticon} alt="lefticon" />
                </button>
                <ul className="popular-list">
                    <li className="popular-item"><Card/></li>
                    <li className="popular-item"><Card/></li>
                    <li className="popular-item"><Card/></li>
                    <li className="popular-item"><Card/></li>
                    <li className="popular-item"><Card/></li>
                </ul>
                <button className="popular-next">
                    <img src={lefticon} alt="lefticon"/>
                </button>    
            </div>
        </div>
    );
}

export default Popular;