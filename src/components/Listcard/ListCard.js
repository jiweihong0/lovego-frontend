import festival_img from "../../imgs/bbq.svg";
import Card from './../Card/card';

function ListCard() {
    return (
        <section className="cateprod-list">
            <div className="cateprod-container">
                <div className="cateprod-list-title-block">
                    <div className="list-title">中秋特惠</div>
                    <button>查看更多商品</button>
                    <img src={festival_img} alt="cateprod-list-title-img" />
                </div>
                <div className="cateprod-list-product-block">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </section>
    );
}

export default ListCard;
