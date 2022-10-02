
import img_prod from "../../imgs/product.png";
function Content() {
    return (  
        <div className="Content">
        <div className="Content-product">
            <div className="Content-photo">
                <img src={img_prod} alt="Image alt here" />
            </div>
            <div className="Content-frame">
                <span className="Content-title">活力烏雞湯</span>
                <span className="Content-text">簡述</span>
                <span className="Content-cost">NT$899</span>
                <div className="Content-typelist">
                    <button className="Content-frametype">
                        <div className="Content-type">款式A</div>
                    </button>
                    <button className="Content-frametype">
                        <div className="Content-type">款式B</div>
                    </button>
                </div>
                <div className="Content-framecount">
                    <button className="Content-minus">－</button>
                    <input  className="Content-count"/>
                    <button className="Content-minus">＋</button>
                </div>
                <div className="Content-framecar">
                    <button className="Content-car">加入購物車</button>
                    <button className="Content-buy">立即購買</button>
                </div>
            </div>
        </div>
        <div className="Content-notice">
            <p>付款方式:街口支付 / 線上刷卡 / 便利商店取貨付款 / LINE Pay / ATM 轉帳</p> 
            <p>運送方式:全家冷凍取貨 / 全家冷凍取貨付款</p>    
        </div>
       
       </div>
    );
}

export default Content;

    