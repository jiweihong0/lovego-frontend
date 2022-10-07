import { useState } from 'react';
import lefticon from '../../imgs/lefticon.svg'
import Card from '../Card/card';



function Popular() {

    const [translate_value, settranslate_value] = useState(0)

    const handleButton = (direction) => {
        const popular_items = document.querySelectorAll('ul.popular-list > .popular-item');
        const direction_value = direction === 'left' ? 500 : -500
        const tran_value = translate_value + direction_value

        //偵測還有沒有產品
        const items_length = popular_items.length
        const prev_hiddend_items_count = Math.abs(translate_value) / 100
        if ((prev_hiddend_items_count + 5 >= items_length && direction == 'right') 
        || (prev_hiddend_items_count === 0 && direction === 'left')) {
            return
        }

        popular_items.forEach(element => {
            element.style.transform = `translateX(${tran_value}%)`;
        })
        //儲存TranslateX
        settranslate_value(tran_value)
    }

    return (
        <div className="popular-frame">
            <p className="popular-text">熱門商品</p>
            <div className="popular-list">
                <button className="popular-prev" >
                    <img src={lefticon} alt="lefticon" onClick={() => handleButton('left')} />
                </button>
                <ul className="popular-list">
                    <li className="popular-item"><Card /></li>
                    <li className="popular-item"><Card /></li>
                    <li className="popular-item"><Card /></li>
                    <li className="popular-item"><Card /></li>
                    <li className="popular-item"><Card /></li>
                    <li className="popular-item"><Card /></li>
                    <li className="popular-item"><Card /></li>
                    <li className="popular-item"><Card /></li>
                    <li className="popular-item"><Card /></li>
                    <li className="popular-item"><Card /></li>
                    <li className="popular-item"><Card /></li>
                </ul>
                <button className="popular-next">
                    <img src={lefticon} alt="lefticon" onClick={() => handleButton('right')} />
                </button>
            </div>
        </div>
    );
}

export default Popular;