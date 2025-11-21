
function NavBar() {
    return(
        <header className="flex justify-around fixed top-0 z-50 w-full items-center h-25 bg-transparent">
            <div>
                <h2 className="font-bold text-2xl">Cof<span className="text-orange-400">fee</span></h2>
            </div>

            <div>
                <div className="bg-white p-3 py-4 rounded-full w-2xl shadow-[0_5px_15px_rgba(0,0,0,0.35)]">
                    <ul className="flex gap-5 justify-around">
                        <li><a className="font-bold hover:text-orange-400 transition-all scale-105" href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Coffee</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">News</a></li>
                    </ul>
                </div>
            </div>
            
            <div>
                <p className="font-bold text-xl">Cart 0</p>
            </div>
        </header>
    )
}

export default NavBar

// 