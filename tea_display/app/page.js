import React from 'react'
import TeaDisplayStatic from './TeaDisplayStatic';
import TeaDisplayDynamic from './TeaDisplayDynamic';

let tea1 = { name: 'Malae Tea', origin: "India", description: "Description: A amezing and malae tea" }
let tea2 = { name: 'Desi Tea', origin: "India", description: "Description: A amezing and desi tea" }
let tea3 = { name: 'Matka Tea', origin: "India", description: "Description: A amezing and matka tea" }

const tea_data = [
    {
        name: "Milk Tea",
        origin: "India",
        description: "Description: A amezing and desi tea"
    },
    {
        name: "Red Tea",
        origin: "India",
        description: "Description: A soft and kadak tea where we put only water, sugar,tea,tejapata,ginger"
    },
    {
        name: "Green Tea",
        origin: "Japan",
        description: "Description: A light and refreshing tea with a hint of grassy notes"
    }
]

export const page = () => {
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ color: 'red', marginTop: '80px' }}>Static Tea Display</h1>
                <TeaDisplayStatic />
                <hr />

                <h1 style={{ color: 'red', marginTop: '80px' }}>Dynamic Tea Display</h1>
                <div style={{}}>
                    <TeaDisplayDynamic props={tea1} />
                    <hr />
                    <TeaDisplayDynamic props={tea2} />
                    <hr />
                    <TeaDisplayDynamic props={tea3} />
                    <hr />
                </div>

                <h1 style={{ color: 'red', marginTop: '80px' }}>Map Tea Display</h1>
                <div>
                    {tea_data.map((tea) => (
                        <div>
                            <h2>Name:{tea.name}</h2>
                            <p>Origin: {tea.origin}</p>
                            <p>Description: {tea.description}</p>
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default page;
