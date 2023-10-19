
import Slider3 from "../../assets/slider3.webp"
const HomeBanner = () => {
    return (
        <div className="grid grid-cols-3 w-11/12 mx-auto">
            <div className="col-span-2">
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full bg-[url('./assets/slider1.webp')] bg-no-repeat bg-center">
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <div className="flex  justify-between gap-x-5">
                                <div id="banner-left" className="flex-1">
                                    <h3 className="text-3xl text-left">Sale Offer Black Friday This Week</h3>
                                    <h1 className="text-6xl">Work Desk Surface Studio 2018</h1>
                                    <h3 className="text-3xl"> Starting at <span className="text-red-500 font-semibold">$1209.00</span></h3>
                                </div>
                            </div>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full bg-[url('./assets/slider2.webp')] bg-no-repeat bg-center bg-origin-padding">
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <div className="flex  justify-between gap-x-5">
                                <div id="banner-left" className="flex-1">
                                    <h3 className="text-3xl text-left">Sale Offer Black Friday This Week</h3>
                                    <h1 className="text-6xl">Work Desk Surface Studio 2018</h1>
                                    <h3 className="text-3xl"> Starting at <span className="text-red-500 font-semibold">$1209.00</span></h3>
                                </div>
                                <div id="banner-right">

                                </div>
                            </div>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full bg-[url('./assets/slider3.webp')] bg-no-repeat bg-center bg-origin-padding">
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <div className="flex  justify-between gap-x-5">
                                <div id="banner-left" className="flex-1">
                                    <h3 className="text-3xl text-left">Sale Offer Black Friday This Week</h3>
                                    <h1 className="text-6xl">Work Desk Surface Studio 2018</h1>
                                    <h3 className="text-3xl"> Starting at <span className="text-red-500 font-semibold">$1209.00</span></h3>
                                </div>
                                <div id="banner-right">

                                </div>
                            </div>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={Slider3} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div className="w-full bg-[url('./assets/sideimg1.avif')] bg-no-repeat bg-center h-full p-8">
                    <p className="text-xl text-sky-500 capitalize">Full HD Display</p>
                    <h3 className="text-2xl capitalize font-bold">smartphone meizu m5 <br /> new color green</h3>
                    <p className="text-xl capitalize">sale 20% off</p>
                </div>
                <div className="w-full bg-[url('./assets/sideimg2.avif')] bg-no-repeat bg-center h-full p-8">
                    <p className="text-xl text-sky-500 capitalize">sale 20% off all store</p>
                    <h3 className="text-2xl capitalize font-bold">Playstaytion VR Plus <br /> network 2018</h3>
                    <p className="text-xl capitalize">sale 20% off</p>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;