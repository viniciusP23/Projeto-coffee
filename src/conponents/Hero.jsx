

function Hero() {
    return(
        <nav className="relative overflow-hidden h-screen">
        <svg className="absolute top-0 left-0 w-full h-auto z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3F1A14" fill-opacity="1" d="M0,96L10.4,96C20.9,96,42,96,63,112C83.5,128,104,160,125,160C146.1,160,167,128,188,106.7C208.7,85,230,75,250,96C271.3,117,292,171,313,160C333.9,149,355,75,376,58.7C396.5,43,417,85,438,96C459.1,107,480,85,501,90.7C521.7,96,543,128,563,144C584.3,160,605,160,626,181.3C647,203,668,245,689,240C709.6,235,730,181,751,181.3C772.2,181,793,235,814,213.3C834.8,192,856,96,877,90.7C897.4,85,918,171,939,197.3C960,224,981,192,1002,181.3C1022.6,171,1043,181,1064,208C1085.2,235,1106,277,1127,261.3C1147.8,245,1169,171,1190,160C1210.4,149,1231,203,1252,224C1273,245,1294,235,1315,197.3C1335.7,160,1357,96,1377,74.7C1398.3,53,1419,75,1430,85.3L1440,96L1440,0L1429.6,0C1419.1,0,1398,0,1377,0C1356.5,0,1336,0,1315,0C1293.9,0,1273,0,1252,0C1231.3,0,1210,0,1190,0C1168.7,0,1148,0,1127,0C1106.1,0,1085,0,1064,0C1043.5,0,1023,0,1002,0C980.9,0,960,0,939,0C918.3,0,897,0,877,0C855.7,0,835,0,814,0C793,0,772,0,751,0C730.4,0,710,0,689,0C667.8,0,647,0,626,0C605.2,0,584,0,563,0C542.6,0,522,0,501,0C480,0,459,0,438,0C417.4,0,397,0,376,0C354.8,0,334,0,313,0C292.2,0,271,0,250,0C229.6,0,209,0,188,0C167,0,146,0,125,0C104.3,0,83,0,63,0C41.7,0,21,0,10,0L0,0Z"></path></svg>
        <div className="bg-[#D6D7D9] h-screen flex justify-around items-center">
            <div className="">
                <h1 className="text-7xl font-bold uppercase w-3xl mb-3">good coffe will always find the audience</h1>
                <p className="text-2xl font-bold mb-6">We provide a varienty of unique and Best Coffees</p>
                <button className="p-4 bg-amber-500 text-white text-xl rounded-2xl cursor-pointer">Ordew now</button>
            </div>
            
            <div>
                <img className="w-xs relative z-10" src="../../public/img/coffeCup.png" alt="" />
            </div>
        </div>
        </nav>
    )
}

export default Hero