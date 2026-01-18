import React from "react";
import logo from "./assets/logo.png";
import bg from "./assets/background1.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation,  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slides from "./data/slides.json";
import items from "./data/items.json";
import { Link, useNavigate } from "react-router-dom";



function MarketPlace(){

    const rarityColors = [
        {rarity: "Common", color: "#7A7A7A", shadow: "rgba(122,122,122,0.6)"},
        {rarity: "Rare", color: "#1FAA59", shadow: "rgba(31,170,89,0.6)"},
        {rarity: "Epic", color: "#3A5BA0", shadow: "rgba(58,91,160,0.6)"},
        {rarity: "Legendary", color: "#D4AF37", shadow: "rgba(212,175,55,0.6)"},
        {rarity: "Cursed", color: "#8B0000", shadow: "rgba(139,0,0,0.6)"}
    ];

    // Function to get border color based on rarity
    const getRarityColor = (rarity) => {
        const found = rarityColors.find(rc => rc.rarity.toLowerCase() === rarity.toLowerCase());
        return found ? found.color : '#7A7A7A';
    };

    // Function to get shadow color (rgba) based on rarity
    const getRarityShadowColor = (rarity) => {
        const found = rarityColors.find(rc => rc.rarity.toLowerCase() === rarity.toLowerCase());
        return found ? found.shadow : 'rgba(122,122,122,0.6)';
    };

    const categories = [
        "Weapons",
        "Articrafts",
        "scrolls",
        "jewels",
    ];


    

    return(     
            <div className="w-full flex flex-col gap-0 m-0 p-0 overflow-x-hidden">
                    <div className="h-1/12 flex items-center justify-between m-0 p-0 bg-[rgba(0,0,0,0.75)] text-white absolute w-full z-10">
                        <img src={logo} alt="Logo" className="ml-7 w-[7%] p-1 "/>
                        <input type="search" placeholder="Search" className="w-[60%] rounded-2xl p-1 pl-5 bg-[#1C1C24] border-2 border-[#2A2A35] text-[#F5F5F5] placeholder:text-[#8A8A8A]  hover:border-[#d4af3764] hover:shadow-[0_0_14px_rgba(212,175,55,0.6)] focus:shadow-[0_0_14px_rgba(212,175,55,0.6)] transition duration-300 outline-0  focus:border-[#d4af37ab]"/>
                        <button>List Item</button>
                        <button className="">scrolls</button>
                        <img src="" alt="Profile" className="mr-7"/>
                    </div>
                    <div className=" w-full ">
                        <img src={bg} alt="img" className="h-screen w-full" />
                        
                    </div>
                    <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-11/12 ">
                        <Swiper className="h-120" 
                        modules={[Autoplay, Pagination, Navigation]} spaceBetween={20} slidesPerView={1} autoplay={{ delay: 8000 }} pagination={{ clickable: true }} navigation={true} loop={true} >
                            {slides.map(slide => (
                                <SwiperSlide key={slide.id} className="z-10 rounded-lg shadow-lgz-10 shadow-lg">
                                    <div className="flex w-full h-full justify-center items-center">
                                        <div className="w-4/5 h-full bg-gradient-to-b from-[rgba(14,14,17,0)] via-[rgba(14,14,17,0.6)] to-[#0E0E11] flex justify-center items-center flex-row rounded-2xl">
                                            <div className="text pl-30 w-2/5 p-10 text-white">
                                                <h2 className="text-7xl tracking-wide leading-22 font-extrabold mb-10 text-[#f5f5f5] border-b-2 border-[rgba(212,175,55,0.5)]">{slide.title}</h2>
                                                <span className="mb-10 border-1 border-[#D4AF37] text-[#D4AF37] rounded-2xl pt-1 pb-1 pl-2 pr-2 shadow-[0_0_14px_rgba(212,175,55,0.4)] hover:shadow-[0_0_14px_rgba(212,175,55,0.8)] transition duration-300 text-[#0E0E11] font-bold text-lg">
                                                    {slide.rarity}
                                                </span>
                                                <br />
                                                <button className="mt-5 p-2 border-2 border-[#D4AF37] text-[#D4AF37] rounded-3xl hover:shadow-[0_0_14px_rgba(212,175,55,0.6)] transition duration-300 active:bg-[#D4AF37] text-2xl" >{slide.cta}</button>
                                            </div>
                                            <div className="visuals w-3/5 flex justify-center items-center">
                                                <img src={slide.image} alt="" />

                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="bg-[#0E0E11] flex text-white flex-col items-center">
                        <h2 className="text-[#f5f5f5] font-extrabold text-9xl">Relics</h2>
                        <div className="flex gap-8 mb-10 mt-3 justify-center">
                            {categories.map(category =>(
                                <div className="border-2 border-[#2A2A35] rounded-full px-5 py-3 text-[#c9c9c9] hover:border-[#D4AF37] hover:text-[#D4AF37] transition active:bg-[rgba(212,175,55,0.12)] active:text-[#D4AF37]">{category}</div>
                            ))}
                        </div>
                            <div className="w-6/7 flex gap-6 flex-wrap justify-start">
                                {items.map(item => (
                                    
                                    <div className="m-2 p-2 border-2 rounded-lg w-1/4 flex flex-col justify-between hover:translate-y-[-6px] rarity-glow" style={{ borderColor: getRarityColor(item.rarity), '--rarity-color': getRarityShadowColor(item.rarity) }}>
                                        <Link to={`/details/${item.name}`} className="">
                                        <div key={item.id}>
                                            <img src={item.img} alt={item.name} className="" />
                                            <div className="">
                                                <p className="font-semibold text-lg mb-3">{item.name}</p>
                                                <div className="inline px-3 py-2 rounded-2xl">{item.rarity}</div>
                                            </div>    
                                            <p>${item.price}</p>
                                            <button className="">view relic</button>
                                        </div>
                                        </Link>
                                    </div>
                                    
                                ))}
                            </div>
                    </div>
                    <footer className="bg-[#0E0E11] text-white py-8">
                        <div className="marketplace links flex gap-6 ">
                            <a href="#">Home</a>
                            <a href="#">Marketplace</a>
                            <a href="#">Auction</a>
                            <a href="#">Contact</a>
                        </div>
                        <div className="utility flex gap-6">
                            <a href="">About</a>
                            <a href="">Help</a>
                            <a href="">Terms</a>
                            <a href="">Privacy</a>
                        </div>
                        <div className="container mx-auto px-4">
                            <p className="text-center">© 2023 Bazzar. All rights reserved.</p>
                        </div>
                    </footer>
            </div>            
    );
}

export default MarketPlace;