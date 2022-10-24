import './costdeliver.css';
function Costdeliver(props) {
    return ( 
        <div className="costdeliver-frame">
            <div className="costdeliver-leftframe">
                <div className="costdeliver-title">
                    <p>運輸方式及付款方式</p>
                </div>
                <p>付款方式</p>
                <select className="costdeliver-select" >
                    <option selected>請選擇您的付款方式</option>
                    <option>貨到付款</option>
                    <option>銀行轉帳</option>
                    <option>信用卡</option>
                </select>
                <p>運輸方式</p>
                <select className="costdeliver-select   ">
                    <option selected>請選擇您的運送位置</option>
                    <option>全家(Family Market)</option>
                    <option>統一超市(7-11)</option>
                    <option>OK</option>
                    <option>萊爾富</option>
                </select>
            </div>
            <div className="costdeliver-rightframe">
                <div className="costdeliver-title">
                    <p>定單資訊</p>
                </div>
                <div className="costdeliver-content">
                    <span>小計</span>
                    <span>{props.cash}</span>
                </div>
                <div className="costdeliver-content">
                    <span>運費</span>
                    <span>{props.cash}</span>
                </div>
                <div className="costdeliver-content">
                    <span>折扣</span>
                    <span>{props.cash}</span>
                </div>
                <div className="costdeliver-content">
                    <span>合計</span>
                    <span>{props.cash}</span>
                </div>
                <button className="costdeliver-button">
                    前往結帳
                </button>
            </div>
        </div>
     );
}

export default Costdeliver;