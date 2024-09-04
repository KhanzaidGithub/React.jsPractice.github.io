import React from 'react';
import './Loader.css'
import ClipLoader from "react-spinners/ClipLoader";


const override = {
  display: 'block',
  margin: '100px auto'
}

const Loader = ({ loading }) => {

  return (
    <div className="loader">
      {/* You can style this div as needed or use a spinner */}
      <ClipLoader
        color='#4338ca'
        loading={loading}
        cssOverride={override}
        size={150}
      />
    </div>
  );
};

export default Loader;
