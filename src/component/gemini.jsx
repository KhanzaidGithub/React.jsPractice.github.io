// import React, { useState } from 'react';
// import { GoogleGenerativeAI } from "@google/generative-ai";


// const Home = () => {
//     // AIzaSyD2kLLiqo68e7oMsFYkHUsIGKj_Yxd3J1Y
//     const genAI = new GoogleGenerativeAI("");
//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//     const [search, setSearch] = useState('');
//     const [aiResponse, setResponse] = useState('');

//     const handleChangeSearch = (e) => {
//         setSearch(e.target.value);
//     }
//     async function aiRun() {
//         const prompt = `random meals related to ${search} category with images and prices`;
//         const result = await model.generateContent(prompt);
//         const response = await result.response;
//         const text =await response.text();
//         setResponse(text);
//     }

//     // button event trigger to consume gemini Api

//     const handleClick = () => {
//         aiRun();
//     }
  
//     return (
//         <div>
//             <h1>Welcome to the Restaurant App!</h1>
//             <p>Built with love using ReactJS + Redux</p>
//             <h1>Generative AI Restaurant App!</h1>
//             <p>Built with ❤️ using ReactJS + Redux + Google Gemini</p>

//             <div style={{ display: 'flex' }}>
//                 <input placeholder='Search Food with Category using Generative AI' onChange={(e) => handleChangeSearch(e)} />
//                 <button style={{ marginLeft: '20px' }} onClick={() => handleClick()}>Search</button>
//             </div>
//             <div style={{ margin: '30px 0' }}>
//                 <p>{aiResponse}</p>
//             </div>
//         </div>
//     );
// };

// export default Home;