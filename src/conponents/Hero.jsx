

function Hero() {
    return(
        <nav className="relative overflow-hidden h-screen bg-amber-300">
        <div className="bg-[#D6D7D9] h-screen flex justify-around items-center">
            <div className="">
                <h1 className="text-7xl font-bold uppercase w-3xl mb-3">good coffe will always find the audience</h1>
                <p className="text-2xl font-bold mb-6">We provide a varienty of unique and Best Coffees</p>
                <button className="p-4 bg-amber-500 text-white text-xl rounded-2xl">Ordew now</button>
            </div>
            
            <div>
                <img src="../../public/img/coffeCup.png" alt="" />
            </div>
        </div>
        </nav>
    )
}

export default Hero