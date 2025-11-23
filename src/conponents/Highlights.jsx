

function Highlights() {

    const coffeeIcons = [
        {icon: "../../public/img/icons8-café-50.png", name: "awesomae aroma", description: "the coffee is brewed by first roosting the green coffee beons"},
        {icon: "../../public/img/icons8-grãos-de-café-100.png", name: "high quality", description: "the coffee is brewed by first roosting the green coffee beons"},
        {icon: "../../public/img/icons8-garantia-80.png", name: "pure grades", description: "the coffee is brewed by first roosting the green coffee beons"},
        {icon: "../../public/img/icons8-café-64.png", name: "proper roasting", description: "the coffee is brewed by first roosting the green coffee beons"}
    ]

    return(
        <section className="bg-[#1B1B1D]">
            <div className="flex justify-around">
                {coffeeIcons.map((coffee, index) => (
                    <div className="mt-10" key={index}>
                        <img className=" w-12 bg-[#34343d] p-2 rounded-2xl mb-2" src={coffee.icon} alt="icone-coffee" />
                        <h2 className="font-bold text-white text-2xl uppercase mb-2">{coffee.name}</h2>
                        <p className="text-white w-2xs">{coffee.description}</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-center gap-12 mt-20 max-w-8xl">
                <div>
                    <img className="w-3xl rounded-2xl" src="../../public/img/coffee-shop.png" alt="coffee-shop" />
                </div>

                <div>
                    <h1 className="text-white font-bold capitalize text-5xl mb-8">Best coffee house in your home town</h1>
                    <p className="text-white w-2xl mb-8 text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam harum consectetur. 
                        Quibusdam animi, iste quisquam natus voluptatum necessitatibus itaque, et consequuntur blanditiis, 
                        numquam voluptas impedit ipsum dolorem. Voluptatibus, architecto!
                    </p>
                      <p className="text-white w-2xl mb-8 text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam harum consectetur. 
                        Quibusdam animi, iste quisquam natus voluptatum necessitatibus itaque, et consequuntur blanditiis, 
                        numquam voluptas impedit ipsum dolorem. Voluptatibus, architecto!
                    </p>
                                       
                    <button className="p-4 bg-amber-500 text-white text-xl rounded-2xl cursor-pointer">Read more</button>
                </div>
            </div>
        </section>
    )
}

export default Highlights