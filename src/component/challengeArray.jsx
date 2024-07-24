import React from 'react'

const ChallengeArray = () => {
    const people = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
    }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
    }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
    }, {
        id: 3,
        name: 'Percy Lavon Julian',
        profession: 'chemist',
    }, {
        id: 4,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
    }];

    let filterchemist = people.filter(person => person.profession !== 'chemist').map(person => (
        <li key={person.id}><p><b>{person.name}:</b>And he is expert at {person.profession}</p></li>
    ))


    return (
        <div>
            <h1>They are not Chemist</h1>
            <ul>{filterchemist}</ul>
        </div>
    )

}

export default ChallengeArray
