import React from 'react';
import MenuItem from './MenuItem';
import UpdateMenuItem from './UpdateMenuItem';
import MapMenuItems from './MapMenuItems';

let menuitem1 = { name: 'Pakal Bhata', price: '$00.99', description: 'Pakhala is a popular and most loved summer food known for its cooling properties and is often considered a comfort food in Odisha.' }
let menuitem2 = { name: 'Chiken Curry', price: '$00.199', description: 'In this phrasing, "chicken" is the primary noun, and "curry" is the adjective describing the type of dish.' }
let menuitem3 = { name: 'Mix Veg', price: '$00.120', description: 'Mixed vegetables are a versatile ingredient that can elevate the nutritional value and taste of numerous dishes' }

const menuItems = [
    {
        name: "RIce Dal",
        price: "$12.99",
        description: "Dal chawal, a simple yet delectable dish, has been a staple in Indian households for generations."
    },
    {
        name: "Fish Curry",
        price: "$10.150",
        description: "Fish head curry is a spicy, curried dish unique to Singapore. Blending the spices of a typical South Indian fish curry with the fish head, the dish is a delicacy among the Chinese."
    },
];

const page = () => {
    return (
        <div style={{textAlign:'center',background:'pink',marginTop:'100px'}}>
            <h1 style={{marginTop:'50px'}}>HARDCODE MENU ITEM</h1>
            <MenuItem />

            <h1 style={{marginTop:'50px'}}>UPADATE MENU ITEM PASS PROPS</h1>
            <UpdateMenuItem props={menuitem1} />
            <UpdateMenuItem props={menuitem2} />
            <UpdateMenuItem props={menuitem3} />

            <h1 style={{marginTop:'50px'}}>MAP MENU ITEM</h1>

            {
                menuItems.map((menuitem) => (
                    <MapMenuItems
                        name={menuitem.name}
                        price={menuitem.price}
                        description={menuitem.description} />
                ))
            }
        </div>
    )
}
export default page;