function Carousel() {

    const handleSwtichCarousel = e => {
        const offset = e.target.classList[1] === "next" ? 1 : -1
        const slides = document.querySelector(".carousel > ul")
        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.childNodes].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.childNodes.length) newIndex = 0
        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active  
    }

    return (
        <section className="carousel-section">
            <div className="carousel">
                <button className="carousel-btn prev" onClick={handleSwtichCarousel}>&#171;</button>
                <button className="carousel-btn next" onClick={handleSwtichCarousel}>&#187;</button>
                <ul>
                    <li className="slide" data-active>
                        <img src="https://picsum.photos/seed/picsum/1150/300" alt="Image alt here" />
                    </li>
                    <li className="slide">
                        <img src="https://picsum.photos/seed/hi/1150/300" alt="Image alt here" />
                    </li>
                    <li className="slide">
                        <img src="https://picsum.photos/seed/bye/1150/300" alt="Image alt here" />
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Carousel;