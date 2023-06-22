import { useEffect } from "react";

// import axios from 'axios';
import React from "react";

import axios from "axios";

import { useState } from "react";
import './index.css';
import'./normal.css';
const baseURL = "http://localhost:8000/chat_bot/";


// @mui material components
// import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
// import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
// import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
// import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
// import reportsBarChartData from "layouts/rtl/data/reportsBarChartData";
// import reportsLineChartData from "layouts/rtl/data/reportsLineChartData";

// RTL components
// import Projects from "layouts/rtl/components/Projects";
// import OrdersOverview from "layouts/rtl/components/OrdersOverview";

// Material Dashboard 2 React contexts
// import { useMaterialUIController, setDirection } from "context";

function RTL() {
  // const [, dispatch] = useMaterialUIController();
  // const { sales, tasks } = reportsLineChartData;

  // Changing the direction to rtl
  // useEffect(() => {
  //   setDirection(dispatch, "rtl");

    // return () => setDirection(dispatch, "ltr");
  // }, []);



  const ChatMessage = ({ message })=>{
    return (
      <div className={`jetsetpack_chatbox-chatlog-message ${message.user === 'gpt'&& 'chatgpt'} `}>
            <div className="chatlog-message-box">
              <div className="chat-avatar">{message.user === 'gpt' && <img src = './images/Ellipse.png' alt = 'avtar'/>}</div>
              <div className={`chat-message ${message.user === 'gpt'&& 'chatgpt'}`}>{message.message}</div>
            </div>
          </div>
    )
  }


  const [input ,setInput] = useState('');
  const [chatlog,setChatlog] = useState([
    {
    user:'gpt',
    message:'how i can help you?'
    },
    {
      user:'me',
      message:'i am AI'
      }
  ]);

  // const [responsedata , setResponseData] = useState('');
  // const [error,setError] = useState('');


  async function handleChatSubmit(e){
    e.preventDefault();
    setChatlog([...chatlog, {user:'me',message:`${input}`}])
    setInput('');

 //apiwork

//  const baseURL = "http://localhost:8000/chat_bot/";



// let formData = JSON.stringify({
//   message:chatlog.map((message)=>message.message).join('')
// });


 
// axios
//       .post('http://localhost:8000/chat_bot/', formData)
//       .then((response) => {
//         let reply =response.data
//         console.log(reply);
      
//         setError(null);
//       })
//       .catch((error) => {
//         console.error(error);
//       });


// const response = await fetch(baseURL, {
//   method:'POST',
//   headers: {
//     "Content-Type":'application/json'
//   },
//   body: JSON.stringify({
//     message:chatlog.map((message)=>message.message).join('')
//   })
// });

// const data = await response.json()
// console.log(data)




  // const axios = require('axios')
  // let data = JSON.stringify({
  //   "human_input": "I am good and how are you?"
  // });

  // let config = {
  //   method: 'POST',
  //   maxBodyLength: Infinity,
  //   url: 'http://localhost:8000/chat_bot/',
  //   headers: { 
  //     'Content-Type': 'application/json', 
  //     'Cookie': 'csrftoken=7Pen79SMaMyFMJaVcT9LuaM2pAURkove'
  //   },
  //   data : data
  // };

  // axios.post(config)
  // .then((response) => {
  //   console.log(JSON.stringify(response.data));
  // })
  // .catch((error) => {
  //   console.log(error);
  // });

  let userInput = 'Hi what is your question in detail';
  let data = userInput.trim();
  console.log(userInput);
  
  axios
    .post('http://localhost:8000/chat_bot/', { message: data })
    .then((response) => {
      let ans = response.data;
      console.log(ans);
      // setResponseData(response.data);
      // setError(null);
    })
    .catch((error) => {
      console.error(error);
      // setError('Some error is occurring');
    });
  




  
}
  



  return (
    <div className="jetsetpackgpt">
      <aside className="jetsetpackgpt_sidemenu">
        <div className="jetsetpackgpt_sidemenu-button">
          <span>+</span>
          New Chat
        </div>
      </aside>

      <section className="jetsetpack_chatbox">
        <div className="jetsetpack_chatbox-chatlog">

         {chatlog.map((message,index)=>(<ChatMessage key = {index} message={message} />))
          
          }

        </div>



         <div className="jetsetpack_chatbox-textarea">
          <form onSubmit={handleChatSubmit}>
            <input 
            value = {input} 
            className="jetsetpack_chatbox-text-input" 
            placeholder="Type your query here" 
            rows='1'
            onChange={(e)=> setInput(e.target.value)}
             />
          </form>
         
         </div>
      </section>
    </div>
    // <DashboardLayout>
    //   <DashboardNavbar />
    //   <MDBox py={3}>
    //     <Grid container spacing={3}>
    //       <Grid item xs={12} md={6} lg={3}>
    //         <MDBox mb={1.5}>
    //           <ComplexStatisticsCard
    //             color="dark"
    //             icon="weekend"
    //             title="Today's money"
    //             count={281}
    //             percentage={{
    //               color: "success",
    //               amount: "+55%",
    //               label: "from last weekي",
    //             }}
    //           />
    //         </MDBox>
    //       </Grid>
    //       <Grid item xs={12} md={6} lg={3}>
    //         <MDBox mb={1.5}>
    //           <ComplexStatisticsCard
    //             icon="leaderboard"
    //             title="Today's users"
    //             count="2,300"
    //             percentage={{
    //               color: "success",
    //               amount: "+3%",
    //               label: "from last week",
    //             }}
    //           />
    //         </MDBox>
    //       </Grid>
    //       <Grid item xs={12} md={6} lg={3}>
    //         <MDBox mb={1.5}>
    //           <ComplexStatisticsCard
    //             color="success"
    //             icon="store"
    //             title="new clients"
    //             count="34k"
    //             percentage={{
    //               color: "success",
    //               amount: "+1%",
    //               label: "from last month",
    //             }}
    //           />
    //         </MDBox>
    //       </Grid>
    //       <Grid item xs={12} md={6} lg={3}>
    //         <MDBox mb={1.5}>
    //           <ComplexStatisticsCard
    //             color="primary"
    //             icon="person_add"
    //             title="new clients"
    //             count="+91"
    //             percentage={{
    //               color: "success",
    //               amount: "",
    //               label: "compared to yesterday",
    //             }}
    //           />
    //         </MDBox>
    //       </Grid>
    //     </Grid>
    //     <MDBox mt={4.5}>
    //       <Grid container spacing={3}>
    //         <Grid item xs={12} md={6} lg={4}>
    //           <MDBox mb={3}>
    //             <ReportsBarChart
    //               color="info"
    //               title="A"
    //               description="The last performance of the campaign"
    //               date="The campaign was sent two days ago"
    //               chart={reportsBarChartData}
    //             />
    //           </MDBox>
    //         </Grid>
    //         <Grid item xs={12} md={6} lg={4}>
    //           <MDBox mb={3}>
    //             <ReportsLineChart
    //               color="success"
    //               title="daily sales"
    //               description={
    //                 <>
    //                   (<strong>+15%</strong>) Increase in sales today..
    //                 </>
    //               }
    //               date="Updated 4 minutes agoق"
    //               chart={sales}
    //             />
    //           </MDBox>
    //         </Grid>
    //         <Grid item xs={12} md={6} lg={4}>
    //           <MDBox mb={3}>
    //             <ReportsLineChart
    //               color="dark"
    //               title="completed tasks"
    //               description="The last performance of the campaign"
    //               date="It has just been updated"
    //               chart={tasks}
    //             />
    //           </MDBox>
    //         </Grid>
    //       </Grid>
    //     </MDBox>
    //     <MDBox>
    //       <Grid container spacing={3}>
    //         <Grid item xs={12} md={6} lg={8}>
    //           <Projects />
    //         </Grid>
    //         <Grid item xs={12} md={6} lg={4}>
    //           <OrdersOverview />
    //         </Grid>
    //       </Grid>
    //     </MDBox>
    //   </MDBox>
    //   <Footer />
    // </DashboardLayout>
  );
}

export default RTL;
