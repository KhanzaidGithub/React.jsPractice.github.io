import React, { useState } from "react";

function States() {
    const [color, setColor] = useState();

    return (
        <>
            <h1>My favorite color is {color}!</h1>
            <button type="button" onClick={() => setColor("blue")}>Blue</button>
            <button type="button" onClick={() => setColor("red")}>Red</button>
            <button type="button" onClick={() => setColor("pink")}>Pink</button>
            <button type="button" onClick={() => setColor("green")}>Green</button>
        </>
    );
}
export default States