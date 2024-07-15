"use client"
import React, { useState } from "react";

const Page = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };
    //   const Decrease = () => {
    //     setCount(count - 1);
    //   };

    return (
        <>
            <div style={{ textAlign: 'center', marginTop: '400px', fontSize: '50px' }}>
                <p>Count: {count}</p>
                <button onClick={handleClick}>Increase</button>
                {/* <button onClick={Decrease}>Decrease</button> */}

            </div>
        </>
    );
};

export default Page;