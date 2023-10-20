
const data = [
    {
        _id: "653203bd6a9eb72afa16cfc9",
        photo: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s22-5g.jpg",
        product: "Samsung Galaxy S22",
        price: "899.99",
        short: "The latest Samsung Galaxy smartphone with a brilliant AMOLED display and powerful Exynos processor.",
        rating: "4.7",
        brand: "Samsung",
    },
    {
        _id: "653207c56594c933580d50e1",
        photo: "https://s3.us-east-1.amazonaws.com/product-image-bucket-prod-us/594249-Product-2-I-637901928778085830.jpg",
        product: "MacBook Air",
        price: "999.99",
        short: "The ultra-thin and lightweight laptop with Apple's M1 chip for incredible performance.",
        rating: "4.9",
        brand: "Apple",
    },
    {
        _id: "6532086b6594c933580d50e2",
        photo: "https://www.bdstall.com/asset/product-image/giant_185355.jpg",
        product: "Samsung 4K QLED TV",
        price: "1299.99",
        short: "A high-quality 4K QLED TV with Quantum Dot technology for stunning visuals.",
        rating: "4.8",
        brand: "Samsung",
    },
];

const Accordion = () => {
    return (
        <div className=" p-2 md:w-10/12 mx-auto rounded-lg">
            <h1 className="text-center my-5 text-3xl font-semibold">Feature Product Summery</h1>
            <div className="join join-vertical w-full">
                {data.map((item, index) => (
                    <div key={index} className="collapse collapse-arrow join-item border border-base-300 bg-gray-300">
                        <input type="radio" name={`my-accordion-${index}`} checked={index === 0 ? "checked" : null} />
                        <div className="collapse-title text-xl font-medium">
                            {item.product}
                        </div>
                        <div className="collapse-content">
                            <img src={item.photo} alt={item.product} className="mb-2 w-[150px]" />
                            <p>{item.short}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accordion;
