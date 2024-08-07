import React from 'react'

const Urltask = () => {
    const baseUrl = 'https://i.imgur.com/';
    const person = {
        name: 'Gregorio Y. Zara',
        imageId: '7vQD0fP',
        imageSize: 's',
        theme: {
            backgroundColor: 'black',
            color: 'pink'
        }
    };
    return (
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img className="avatar" src={baseUrl + person.imageId + person.imageSize + '.jpg'} alt={person.name}
            />
             {/* // src={baseUrl}{person.imageId}{person.imageSize}'.jpg';  // this is very simple taks to solve this out */}
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );
}

export default Urltask


