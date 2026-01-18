import React from "react";
import items from "./data/items.json";
import getRarityColor from "./marketplace.jsx";
import getRarityShadowColor from "./marketplace.jsx";
import { useParams } from "react-router-dom";



function ItemDetails(){

    const {name} = useParams();

    const rarityColors = [
        {rarity: "Common", color: "#7A7A7A", shadow: "rgba(122,122,122,0.6)"},
        {rarity: "Rare", color: "#1FAA59", shadow: "rgba(31,170,89,0.6)"},
        {rarity: "Epic", color: "#3A5BA0", shadow: "rgba(58,91,160,0.6)"},
        {rarity: "Legendary", color: "#D4AF37", shadow: "rgba(212,175,55,0.6)"},
        {rarity: "Cursed", color: "#8B0000", shadow: "rgba(139,0,0,0.6)"}
    ];

    const item = items.find(i => i.name === name);
    if (!item) {
    return (
      <div className="text-white text-center mt-20">
        Item not found
      </div>
    );
  }
    return(
        <div className="bg-[url('./assets/detail-bg.png')] w-full h-screen flex flex-wrap items-center justify-center text-white">
            
                <div key={item.id} className="w-3/4 h-auto my-6 mx-10 p-6 border-2 border-[#2A2A35] rounded-lg flex flex-wrap gap-8">
                    <div className="flex gap-5">
                        <div className="w-full flex items-center justify-center flex-col gap-4" >
                            <img src={item.img} alt={item.name} className="w-full h-auto rounded-2xl img-glow" style={{'--rarity-color':getRarityShadowColor(item.rarity)}}/>
                            <p className="w-9/10 text-[#c9c9c9] my-2 border border-[#2A2A35] p-3">{item.shortDescription}</p>
                            <div className="attributes bg-[#1A1A1F] p-4 rounded-lg w-full">
                                <h3 className="text-2xl font-semibold mb-3">Attributes</h3>
                                <ul className="list-disc list-inside flex flex-wrap">
                                    <div className="w-1/2">
                                        <li className="">Damage: {item.attributes.damage.min} - {item.attributes.damage.max}</li>
                                        <li className="">Range: {item.attributes.range}</li>
                                        <li className="">origin: {item.attributes.origin}</li>
                                    </div>
                                    <div className="w-1/2">
                                        <li className="">element: {item.attributes.element}</li>
                                        <li className="">condition: {item.attributes.condition}</li>
                                        <li className="">age years: {item.attributes.ageYears}</li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-center">
                            <h2 className="text-4xl font-bold mb-4">{item.name}</h2>
                            <p className="mb-4 p-2 rounded-4xl border-1 rarity-color" style={{ borderColor: getRarityColor(item.rarity), '--rarity-color': getRarityShadowColor(item.rarity) }}>{item.rarity}</p>
                            <div className="flex flex-col items-start mb-4 w-full">
                            <p className="text-xl p-3">Price:</p>
                            <p className="text-5xl p-4">{item.price} Myst</p>
                            <div className="w-full flex flex-col gap-4 mb-6">
                                <button className="bg-[#D4AF37] hover:bg-[#B89C2A] text-black font-bold py-2 px-4 rounded-lg">Buy Now</button>
                                <button className=" bg-[#2A2A35] hover:bg-[#1A1A1F] text-white font-bold py-2 px-4 rounded-lg">Message Seller</button>
                            </div>
                            <div className="seller m-3 border-t-2 border-[#2A2A35] pt-4 w-full  ">
                                <h3 className="text-2xl font-semibold mb-3">Seller Information</h3>
                                <p className="mb-1">Name: {item.seller.username}</p>
                                <p className="mb-1">Rating: {item.seller.rating.value} / 5</p>
                                <p className="mb-1">sale: {item.seller.itemsSold}</p>
                                <p className="mb-1">{item.seller.rank}</p>
                                <button className="bg-[#2A2A35] hover:bg-[#1A1A1F] text-white font-bold py-2 px-4 rounded-lg">View Profile</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default ItemDetails;