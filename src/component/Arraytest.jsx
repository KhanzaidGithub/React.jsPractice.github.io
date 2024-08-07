import React from "react";

let Arraytest = () => {
    const people = [
        'Creola Katherine Johnson: mathematician',
        'Mario José Molina-Pasquel Henríquez: chemist',
        'Mohammad Abdus Salam: physicist',
        'Percy Lavon Julian: chemist',
        'Subrahmanyan Chandrasekhar: astrophysicist'
    ];

    let lititems = people.map(person => <li>{person}</li>)

    return (
        <ul type="disc">{lititems}</ul>
    )


}

export default Arraytest