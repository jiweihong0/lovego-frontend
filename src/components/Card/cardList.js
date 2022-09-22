import Card from './card';
function CardList() {
    return (
        <section className="prodict-section gap-top">
            <div className="product-block">
                <ul className="product-list">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </ul>
            </div>
        </section>
    );
}

export default CardList;