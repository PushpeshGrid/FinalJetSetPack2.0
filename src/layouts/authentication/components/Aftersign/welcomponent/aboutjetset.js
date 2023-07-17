import React, { useState } from "react";

// svgimage
import JetsetPack from "../../../../../assets/images/Jetsetpack2.svg";

// fornavigation
import { useNavigate } from "react-router-dom";

import axios from "axios";

// for token
import { useContext } from "react";

import { TokenContext } from "../../../../../context/TokenContext";

const Aboutjetset = () => {
  // tokenhandling
  const { token } = useContext(TokenContext);
  console.log({ token });

  const navigate = useNavigate();
  // for inputfield
  const [ipAddress, setIpAddress] = useState("");
  const [operatingSystem, setOperatingSystem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(ipAddress,operatingSystem)

    const userData = {
      ip_address: ipAddress,
      os: operatingSystem,
    };

    console.log(token);

    axios
      .post("http://127.0.0.1:8000/user_info/", userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        let data = response.data;
        console.log(data);
        navigate("/oneclicksetup/");
      })
      .catch((error) => {
        console.error(error);
      });

    // navigate('/dashboard/')
    // Add your submit logic here
  };

  return (
    <div className="w-full px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        {/* <img className='w-[500px] mx-auto my-4' src={JetsetPack} alt='/' /> */}

        <div className="flex justify-center items-center h-screen">
          <div className="bg-gray-100 rounded p-8 animate-slide-in mt-[-220px]">
            <h1 className="text-2xl font-bold mb-4">Welcome to the Website!</h1>
            <form>
              <div className="mb-4">
                <label htmlFor="ipAddress" className="block font-medium mb-2">
                  IP Address:
                </label>
                <input
                  type="text"
                  id="ipAddress"
                  value={ipAddress}
                  onChange={(e) => setIpAddress(e.target.value)}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="operatingSystem"
                  className="block font-medium mb-2"
                >
                  Operating System:
                </label>
                <select
                  value={operatingSystem}
                  name="os"
                  id="operatingSystem"
                  onChange={(e) => setOperatingSystem(e.target.value)}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="window">windows</option>
                  <option value="MacOS">MacOS</option>
                  <option value="linux">linux</option>
                </select>
              </div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Get Started
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col justify-center mt-[-200px]">
          <p className="text-[#00df9a] font-bold ">WHAT IS JETSETPACK</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            One Click Environment and Packaging Setup
          </h1>
          <p>
            Focus on automating the setup and configuration of just the most
            essential tools that nearly every developer needs to do their job.
            These would include things like: Email and messaging Source control
            (GitHub, Bitbucket, etc.) Project management,Primary programming
            languages/frameworks Productivity software (Slack, Zoom, Google
            Suite, etc.).
          </p>
          {/* <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default Aboutjetset;
