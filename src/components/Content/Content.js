
import img_prod from "../../imgs/product.png";
import Carousel from "../Carousel/Carousel";
function Content() {
    return (
        <>
            <div className="content-product">
                <div className="content-photo">
                    <Carousel />
                </div>
                <div className="content-frame">
                    <span className="content-title">活力烏雞湯</span>
                    <span className="content-text">簡述</span>
                    <span className="content-cost">NT$899</span>
                    <div className="content-typelist">
                        <button className="content-frametype">
                            <div className="content-type">款式A</div>
                        </button>
                        <button className="content-frametype">
                            <div className="content-type">款式B</div>
                        </button>
                    </div>
                    <div className="content-framecount">
                        <button className="content-minus">－</button>
                        <input className="content-count" />
                        <button className="content-minus">＋</button>
                    </div>
                    <div className="content-framecar">
                        <button className="content-car">加入購物車</button>
                        <button className="content-buy">立即購買</button>
                    </div>
                </div>
            </div>
            <div className="content-notice">
                <p>付款方式:街口支付 / 線上刷卡 / 便利商店取貨付款 / LINE Pay / ATM 轉帳</p>
                <p>運送方式:全家冷凍取貨 / 全家冷凍取貨付款</p>
            </div>

        </>
    );
}

export default Content;

