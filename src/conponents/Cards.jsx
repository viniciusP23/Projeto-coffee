

function Cards() {

    const cards = [
        { image: "../../public/img/icons8-café-50.png", name: "americano pure grades", description: "the coffee is brewed by first rodsting the green coffee beans", value: "$25" },
        { image: "../../public/img/icons8-café-64.png", name: "americano pure grades", description: "the coffee is brewed by first rodsting the green coffee beans", value: "$25" },
        { image: "../../public/img/icons8-café-64.png", name: "americano pure grades", description: "the coffee is brewed by first rodsting the green coffee beans", value: "$25" },
        { image: "../../public/img/icons8-café-64.png", name: "americano pure grades", description: "the coffee is brewed by first rodsting the green coffee beans", value: "$25" },
    ]

    return (
        <div className="bg-[#1B1B1D] overflow-hidden h-1000">
            <div className="mt-30">

                <div className="flex justify-center">
                    <h1 className="font-bold text-white text-5xl">Our special coffee</h1>
                </div>

                <div className="">
                    <div className="flex justify-center mt-5 gap-10">
                        {cards.map((card, index) => (
                            <div className=" bg-white p-5 rounded-2xl" key={index}>

                                <div className="bg-white flex justify-center h-60 mb-4">
                                    <img className="bg-amber-300" src={card.image} alt="" />
                                </div>

                                <div>
                                    <h3 className="font-bold text-xl">Americano pure grades</h3>
                                    <p className="w-2xs">
                                        the coffee is brewed by first roosting the green coffee beons
                                        the coffee is brewed by first roosting the green coffee beons
                                    </p>
                                </div>

                                <div className="flex justify-between items-center mt-8">
                                    <p className="font-bold text-2xl">$25</p>
                                    <button className="p-2 bg-amber-500 rounded">Order now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>


        </div>
    )
}

export default Cards