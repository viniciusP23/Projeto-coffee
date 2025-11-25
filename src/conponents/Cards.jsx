

function Cards() {

    const cards = [
        { image: "../../public/img/icons8-café-50.png", name: "americano pure grades", description: "the coffee is brewed by first rodsting the green coffee beans", value: "$25" },
        { image: "../../public/img/icons8-café-64.png", name: "americano pure grades", description: "the coffee is brewed by first rodsting the green coffee beans", value: "$25" },
        { image: "../../public/img/icons8-café-64.png", name: "americano pure grades", description: "the coffee is brewed by first rodsting the green coffee beans", value: "$25" }
    ]

    return (
        <div className="bg-[#1B1B1D] overflow-hidden h-1000">
            <div className="mt-30">
                <h1 className="text-center font-bold text-5xl  mb-10 text-white">Our special coffee</h1>

                <div className="flex gap-8 max-w-6xl mx-auto justify-center">
                    {cards.map((cards, index) => (
                        <div className="bg-white p-10 rounded-2xl" key={index}>

                            <div className="bg-amber-600 flex items-center justify-center py-15">
                                <img src={cards.image}></img>
                            </div>

                            <div>
                                <h3 className="font-bold text-xl mb-2">{cards.name}</h3>
                                <p className="">{cards.description}</p>
                            </div>

                            <div className="flex justify-between mt-3">
                                <p className="font-bold text-2xl">{cards.value}</p>
                                <button className="bg-amber-600 p-2 rounded-xl text-white cursor-pointer hover:bg-amber-500">Order Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}

export default Cards