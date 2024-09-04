import React, { useState } from 'react'

const ObjectPractice2 = () => {
    const [person, setPerson] = useState({
        name: 'Niki de Saint Phalle',
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    });
    function handleName(e) {
        setPerson({
            ...person,
            name: e.target.value
        })
    }
    function handletitle(e) {
        setPerson({
            ...person,
            artwork: {
                title: e.target.value
            }
        })
    }
    function handlecity(e) {
        setPerson({
            ...person,
            artwork: {
                city: e.target.value
            }
        })
    }

    function handleimage(e) {
        setPerson({
            ...person,
            artwork: {
                image: e.target.value
            }
        })
    }

    return (
        <div>
            <input type="text" value={person.name} onChange={handleName} />
            <input type="text" value={person.artwork.title} onChange={handletitle} />
            <input type="text" value={person.artwork.city} onChange={handlecity} />
            <input type="text" value={person.artwork.image} onChange={handleimage} />
            <img src={person.artwork.image} alt={person.artwork.title} />
        </div>
    )
}

export default ObjectPractice2
