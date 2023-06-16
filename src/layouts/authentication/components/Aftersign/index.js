// import React, { useEffect, useState } from 'react';
import './index.css'; // Import the CSS file

// import { useNavigate } from "react-router-dom";

// const WelcomePage = () => {
//   const [ipAddress, setIpAddress] = useState('');
//   const [operatingSystem, setOperatingSystem] = useState('');

//   // useEffect(() => {
//     // Set operating system
//   //   setOperatingSystem(window.navigator.platform);
//   // });

//   const navigate = useNavigate()

//   const handleSubmit = e => {
//     e.preventDefault();
//     // Handle form submission logic here
//      // Fetch IP address
//      fetch('https://api.ipify.org?format=json')
//      .then(response => response.json())
//      .then((response)=>{navigate("/dasboard/")})
//      .catch(error => console.error('Error fetching IP address:', error));
//   };

//   return (
//     <div className="welcome-container">
//       <div className="form-container">
//         <h1 className="form-title">Welcome to the Website!</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="ipAddress">IP Address:</label>
//             <input type="text" id="ipAddress" value={ipAddress} onChange={(e) => setIpAddress(e.target.value)} readOnly />
//           </div>
//           <div className="form-group">
//             <label htmlFor="operatingSystem">Operating System:</label>
//             <select name="os" id="operatingSystem" onChange={(e) => setOperatingSystem(e.target.value)}>
//                 <option value="mac">mac</option>
//                 <option value="window">windows</option>
//                 <option value="linux">linux</option>
//                 <option value="windowxp">windowxp</option>
//              </select>
//             {/* <input type="text" id="operatingSystem" value={operatingSystem} onChange={(e) => setOperatingSystem(e.target.value)} readOnly /> */}
//           </div>
//           <button type="submit" onSubmit={handleSubmit}>Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default WelcomePage;




import React, { useState } from 'react';




const App = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [operatingSystem, setOperatingSystem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 rounded p-8 animate-slide-in">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Website!</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="ipAddress" className="block font-medium mb-2">
              IP Address:
            </label>
            <input
              type="text"
              id="ipAddress"
              value={ipAddress}
              onChange={(e) => setIpAddress(e.target.value)}
              readOnly
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="operatingSystem" className="block font-medium mb-2">
              Operating System:
            </label>
            <select
              name="os"
              id="operatingSystem"
              onChange={(e) => setOperatingSystem(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="mac">mac</option>
              <option value="window">windows</option>
              <option value="linux">linux</option>
              <option value="windowxp">windowxp</option>
            </select>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
