
const Banner2 = () => {
    return (
        <div className="w-11/12 lg:mt-4 m-7 lg:w-4/5 mx-auto relative">
            <div className="carousel w-full rounded-2xl">
                <div id="slide1" className="carousel-item relative w-full bg-[url('./assets/slider1.webp')] bg-cover leading-10">
                    <div className="bg-gray-600 w-full bg-opacity-50">
                        <div className="p-5 lg:p-52 mx-auto h-full">
                            <h1 className="text-3xl lg:text-5xl font-bold text-white text-center">Exotic tastes at your <br /> doorstep</h1>
                            <p className="text-center text-white">We supply highly quality organic products</p>
                            <button className="btn bg-[#F85559] text-white border-0 mx-auto block">Shop Now</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle bg-opacity-50">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-opacity-50">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full bg-[url('./assets/slider2.webp')] bg-cover leading-10">
                    <div className="bg-gray-600 w-full bg-opacity-50">
                        <div className="lg:p-52 mx-auto h-full">
                            <h1 className="text-3xl lg:text-5xl font-bold text-white text-center">Exotic tastes at your <br /> doorstep</h1>
                            <p className="text-center text-white">We supply highly quality organic products</p>
                            <button className="btn bg-[#F85559] text-white border-0 mx-auto block">Shop Now</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-opacity-50">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-opacity-50">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full bg-[url(assets/images/banner3.png)] bg-cover leading-10">
                    <div className="bg-gray-600 w-full bg-opacity-50">
                        <div className="lg:p-52 mx-auto h-full">
                            <h1 className="text-3xl lg:text-5xl font-bold text-white text-center">Exotic tastes at your <br /> doorstep</h1>
                            <p className="text-center text-white">We supply highly quality organic products</p>
                            <button className="btn bg-[#F85559] text-white border-0 mx-auto block">Shop Now</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-opacity-50">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-opacity-50">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full bg-[url('./assets/sideimg1.avif')] bg-cover leading-10">
                    <div className="bg-gray-600 w-full bg-opacity-50">
                        <div className="lg:p-52 mx-auto h-full">
                            <h1 className="text-3xl lg:text-5xl font-bold text-white text-center">Exotic tastes at your <br /> doorstep</h1>
                            <p className="text-center text-white">We supply highly quality organic products</p>
                            <button className="btn bg-[#F85559] text-white border-0 mx-auto block">Shop Now</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle bg-opacity-50">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-opacity-50">❯</a>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Banner2;
