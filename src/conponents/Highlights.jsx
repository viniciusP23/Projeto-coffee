

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
        </section>
    )
}

export default Highlights