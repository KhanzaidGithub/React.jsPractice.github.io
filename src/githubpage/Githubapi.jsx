import React, { useEffect, useState } from 'react'

const Githubapi = () => {
    let [Follower, setFollowers] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/users/KhanzaidGithub').then(res => res.json()).then(data => {
            setFollowers(data.followers)
        }).catch((error) => console.log(`An ${error} occured`));
    }, [])

    return (
        <div>
            <h2>My Github Followers {Follower !== null ? Follower : 'Loading...'}</h2>
        </div>
    )
}

export default Githubapi



export const SecondGithubapi = () => {
    const [userData, setUserData] = useState(null); // State to hold the entire data object

    useEffect(() => {
        fetch('https://api.github.com/users/KhanzaidGithub')
            .then(res => res.json())
            .then(data => {
                setUserData(data); // Store the entire data object in the state
            })
            .catch(error => console.error(error));
    }, []); // Empty dependency array means this effect runs only once after the initial render

    return (

        <div>
            <h1 className="mt-12">This is from Entire data gettting</h1>
            <h2>My Github Followers: {userData ? userData.followers : 'Loading...'}</h2>
            {/* You can access other properties of the data object like this: */}
            <p>Username: {userData ? userData.login : 'Loading...'}</p>
           
        </div>
    );
}
