import React from 'react';

const Newarray = () => {
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

    // Filter the people array first
    const filteredPeople = people.filter(person => person.profession === 'chemist');

    // Map the filtered array to create list items
    const listItems = filteredPeople.map(item => (
        <li key={item.id}>
            <p><b>Name: {item.name}:</b> {item.profession}</p>
        </li>
    ));
    return (
        <>
            <h1>They all are chemist</h1>
            <ul>{listItems}</ul>
        </>
    );

    // return (
    //     <ul>
    //         {people.filter(person => person.profession === 'chemist')
    //             .map(person => (
    //                 <li key={person.id}>
    //                     <p><b>{person.name}:</b> {person.profession} known for {person.accomplishment}</p>
    //                 </li>
    //             ))}
    //     </ul>
    // );
};

export default Newarray;
