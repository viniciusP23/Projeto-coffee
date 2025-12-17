

function Cards() {

    const cards = [
        { image: "../../public/img/Paper-coffee-bag-on-transparent-background-PNG.png", name: "Arabica Gold Blend", description: "Um blend suave e encorpado, feito com grãos selecionados e torrados na medida certa", value: "$25" },
        { image: "../../public/img/pngtree-3d-model-of-a-coffee-bag-png-image_15538364.png", name: "Roast Master Select", description: "Café fresco, aromático e equilibrado, com sabor marcante e final levemente adocicado", value: "$25" },
        { image: "../../public/img/to-go-coffee-cup-with-lid-paper-QJGnN4E-600.jpg", name: "Guatemala Coffee", description: "Feito com grãos de alta qualidade, entrega um aroma intenso e um sabor profundo e envolvente.", value: "$25" },
        { image: "../../public/img/disposable-coffee-cup-paper-KaE3wN0-600.jpg", name: "Golden Arabica", description: "Um café especial, de textura cremosa e notas sutis que transformam cada gole em uma experiência única.", value: "$25" },
    ]

    const sandwichesCards = [
        {image: "../../public/img/pngtree-sandwich-png-image_17279491.png", name: "Veggie Supreme", description: "Feito com vegetais frescos e temperos leves, trazendo sabor e crocância em cada mordida.", value: "20$"},
        {image: "../../public/img/11315702.jpg", name: "Grill Burger", description: "Hambúrguer suculento com salada fresca e molho especial para um sabor marcante.", value: "20$"},
        {image: "../../public/img/pngtree-classic-sub-sandwich-png-image_12883746.png", name: "Classic Sub", description: "Pão macio, salada crocante e ingredientes selecionados para um lanche leve e saboroso.", value: "20$"},
        {image: "../../public/img/pngtree-classic-sub-sandwich-png-image_12883746.png", name: "Fresh Garden Sub", description: "Combinação de vegetais frescos e pão artesanal, ideal para uma refeição rápida e deliciosa.", value: "20$"}
    ]

    return (
        <div className="bg-[#1B1B1D] overflow-hidden">
            <div className="mt-30">

                <div className="flex justify-center">
                    <h1 className="font-bold text-white text-5xl">Our special coffee</h1>
                </div>

                <div>
                    <div className="flex justify-center mt-15 gap-10">
                        {cards.map((card, index) => (
                            <div className=" bg-white p-5 rounded-2xl" key={index}>

                                <div className="bg-white flex justify-center h-60 mb-4">
                                    <img className="w-[250px]" src={card.image} alt="imagem-coffee"/>
                                </div>

                                <div>
                                    <h3 className="font-bold text-xl">{card.name}</h3>
                                    <p className="w-2xs">{card.description}</p>
                                </div>

                                <div className="flex justify-between items-center mt-8">
                                    <p className="font-bold text-2xl">{card.value}</p>
                                    <button className="p-2 bg-amber-500 rounded cursor-pointer hover:bg-amber-400">Order now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-21">
                    <h1 className="font-bold text-white text-5xl">Our special coffee</h1>
                </div>
                <div className="border-b border-white p-4 w-3/5 mx-auto"></div>

                <div>
                    <div className="flex justify-center mt-15 gap-10">
                        {sandwichesCards.map((sandwiches, index) => (
                            <div className=" bg-white p-5 rounded-2xl" key={index}>

                                <div className="bg-white flex justify-center h-60 mb-4">
                                    <img className="w-[250px]" src={sandwiches.image} alt="" />
                                </div>

                                <div>
                                    <h3 className="font-bold text-xl">{sandwiches.name}</h3>
                                    <p className="w-2xs">{sandwiches.description}</p>
                                </div>

                                <div className="flex justify-between items-center mt-8">
                                    <p className="font-bold text-2xl">{sandwiches.value}</p>
                                    <button className="p-2 bg-amber-500 rounded cursor-pointer hover:bg-amber-400">Order now</button>
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