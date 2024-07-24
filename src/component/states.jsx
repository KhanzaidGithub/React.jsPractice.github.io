import React, { useState } from "react";

function FavoriteColor() {
    const [value, setColor] = useState();

    return (
        <>
            <h1>My favorite color is {value}!</h1>
            <button type="button" onClick={() => setColor("blue")}>Blue</button>
            <button type="button" onClick={() => setColor("red")}>Red</button>
            <button type="button" onClick={() => setColor("pink")}>Pink</button>
            <button type="button" onClick={() => setColor("green")}>Green</button>
        </>
    );
}
export default FavoriteColor