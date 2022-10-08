import RowCard from "../RowCard/RowCard";
import './rowcardlist.css';

function RowCardlist(props) {

    return ( 
        <div className="rowcardlist-frame">
            <div className="rowcardlist-titlelist">
                <span>商品明細</span>
                <span>產品名稱</span>
                <span>單價</span>
                <span>數量</span>
                <span>小計</span>
                <span>刪除</span>
            </div>
            <ul className="rowcardlist-item">
                <RowCard setmoney={props.setmoney}/>
                <RowCard setmoney={props.setmoney}/>
            </ul>
        </div>
     );
}

export default RowCardlist;