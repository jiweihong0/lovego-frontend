
function Detail() {
    const aa =`嚴選台灣飼養的烏骨雞\n
    又名膠原美顏雞，富含膠原蛋白，結合魚鱗膠原蛋白，再搭配補氣中藥，讓您吃出安心、養出美麗！`
    return (  
        <>
            <div className="Detail-frame">
                <div className="Detail-textframe">
                    <p className="Detail-text">{aa}</p>
                </div>
                <div className="Detail-frametop">商品介紹</div>
                <div className="Detail-textframe2">
                    <div className="Detail-text">
                        <p>內容量：2700g</p>
                        <p>固形量：1500g</p>
                    </div>
                </div>
                <div className="Detail-frametop2">規格說明</div>
                <div className="Detail-textframe3">
                    <p className="Detail-text"  >店面選購、冷凍宅配、校內限定公文車交換</p>
                </div>
                <div className="Detail-frametop3">運送方式</div>
                
            </div>
        </>
    );
}

export default Detail;