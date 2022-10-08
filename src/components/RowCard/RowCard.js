import './rowcard.css';
import trash from '../../imgs/trash.svg';
import product from '../../imgs/product.png';
import React, { useState } from 'react';

function RowCard(props) {
    const [count,setcount]=useState(0);
    const handleplus = ()=>{
        setcount(parseInt(count)+1);
        props.setmoney(parseInt(count)+1)
    }
    const handleminus = ()=> {
         const minus = count<=0 ?0:count-1;
         setcount(minus);
        props.setmoney(minus)
    }
    const handlecount = (e)=>{
        const val = e.target.value.replace(/[^\d]/g, '');
        setcount(val);
        props.setmoney(val)
    }
    
    return ( 
        <li className="popout-shopcar-item">
            <div className="rowcard-contentframe">
                <span>
                    <img src={product} alt="商品名稱" className="rowcard-img"/>
                </span>
                <span className="rowcard-title">活力無骨雞湯</span>
                <span className="rowcard-cost">NT$899</span>
                <span className="rowcard-framecount">
                    <button className="rowcard-minus " onClick={handleplus}>＋</button>
                    <input className="rowcard-count" type="text" onChange={handlecount} value={count}/>
                    <button className="rowcard-minus" onClick={handleminus}>－</button>
                </span>
                <span className="rowcard-totalcost">NT${count}</span>
                <span>
                    <button className="content-cost">
                        <img src={trash} alt="trashere" className="mainnav-icons"/>
                    </button>
                </span>
            </div>
        </li>
     );
}

export default RowCard;