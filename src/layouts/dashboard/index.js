// // importing axios
// import axios from 'axios';
// import { useState } from 'react';

// // @mui material components
// import Grid from "@mui/material/Grid";

// // Material Dashboard 2 React components
// import MDBox from "components/MDBox";

// // Material Dashboard 2 React example components
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
// import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
// import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// // Data
// import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
// import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// // Dashboard components
// import Projects from "layouts/dashboard/components/Projects";
// import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

// // importclient role
// import AppSelector from "./components/role/clientrole";

// function Dashboard() {


//   const { sales, tasks } = reportsLineChartData;
  
 
//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       {/* <MyForm/> */}
//       <MDBox py={3}>
//         <Grid container spacing={3}>
//           <Grid item xs={12} md={6} lg={3}>
//             <MDBox mb={1.5} >
//               <ComplexStatisticsCard
//                 icon="View"
//                 title="Vs Code"
//                 count=""
//                 percentage={{
//                   color: "success",
//                   label: "today updated",
//                 }}
//               />
//             </MDBox>
//           </Grid>
          

//           <Grid item xs={12} md={6} lg={3} >
//             <MDBox mb={1.5} >
//               <ComplexStatisticsCard
//                 color="success"
//                 icon="Save"
//                 title="slack"
//                 count=""
//                 percentage={{
//                   color: "success",
//                   label: "yesterday updated",
//                 }}
//               />
//             </MDBox>
//           </Grid>


//           <Grid item xs={12} md={6} lg={3} >
//             <MDBox mb={1.5} >
//               <ComplexStatisticsCard
//                 color="primary"
//                 icon="Five"
//                 title="Firefox"
//                 count=""
//                 percentage={{
//                   color: "success",
//                   amount: "",
//                   label: "Just updated",
//                 }}
//               />
//             </MDBox>
//           </Grid>

//         </Grid>
//         <MDBox>
//           <Grid container spacing={3}>
//             <Grid item xs={12} md={6} lg={8}>
//               <Projects />
//             </Grid>
//             <Grid item xs={12} md={6} lg={4}>
//               <OrdersOverview />
//             </Grid>
//           </Grid>
//         </MDBox>
//       </MDBox>
//       <Footer />
//     </DashboardLayout>
//   );
// }

// export default Dashboard;






// importing axios
import axios from 'axios';
import { useState } from 'react';

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

// import client role
import AppSelector from "./components/role/clientrole";


// for token 
import { useContext } from 'react';

import { TokenContext } from 'context/TokenContext';





function Dashboard() {


  const {token} = useContext(TokenContext);

  const { sales, tasks } = reportsLineChartData;
  const [vsCodeMessage, setVsCodeMessage] = useState('');
  const [slackMessage, setSlackMessage] = useState('');
  const [firefoxMessage, setFirefoxMessage] = useState('');



  const handleVsCodeClick = () => {
   axios
    .post('http://localhost:8000/set_single_app/VSCode', {
      headers:{
          'Authorization': `Bearer ${token}`
      }
  })
    .then((response) => {
      console.log({response})
      let data=response.data
      console.log(data);
        if (response.data.VSCode === 'Suscessful') {
          setVsCodeMessage('VSCode Installed');
        } else {
          setVsCodeMessage('VSCode Already Exists');
        }
      
    })
    .catch((error) => {
      console.error(error);
      
    });



    // let config = {
    //   method: 'post',
    //   maxBodyLength: Infinity,
    //   url: 'http://localhost:8000/set_single_app/VSCode',
    //   headers: {
    //     'Authorization': token
    //   }
    // };
    // axios.request(config)
    // .then((response) => {
    //   console.log((response.data));

    //        if (response.data.data.VSCode === 'Suscessful') {
    //       setVsCodeMessage('VSCode Installed');
    //     } else {
    //       setVsCodeMessage('VSCode Already Exists');
    //     }
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  };





  const handleSlackClick = () => {
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8000/set_single_app/Slack',
      headers: {
        'Authorization': token
      }
    };
    axios.request(config)
    .then((response) => {
      console.log((response.data));

           if (response.data.data.Slack === 'Suscessful') {
            setSlackMessage('Slack Installed');
        } else {
          setSlackMessage('Slack Already Exists');
        }
    })
    .catch((error) => {
      console.log(error);
    });
  };




  const handleFirefoxClick = () => {
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'http://localhost:8000/set_single_app/Firefox',
          headers: {
            'Authorization': token
          }
        };
        axios.request(config)
        .then((response) => {
          console.log((response.data));
              if (response.data.data.Firefox === 'Suscessful') {
                setFirefoxMessage('Firefox Installed');
            } else {
              setFirefoxMessage('Firefox Already Exists');
            }
    })
    .catch((error) => {
      console.log(error);
    });
  };







  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* <MyForm/> */}
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="View"
                title="Vs Code"
                count=""
                percentage={{
                  color: "success",
                  label: "today updated",
                }}
                onClick={handleVsCodeClick}
              />
              {vsCodeMessage && <p className="text-xs  bg-red-100 text-red-700 px-4 py-2 rounded mb-4 mt-4">{vsCodeMessage}</p>}
            </MDBox>
          </Grid>

          <Grid item xs={12} md={6} lg={3} >
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="Save"
                title="Slack"
                count=""
                percentage={{
                  color: "success",
                  label: "yesterday updated",
                }}
                onClick={handleSlackClick}
              />
               {slackMessage && <p className="text-xs  bg-red-100 text-red-700 px-4 py-2 rounded mb-4 mt-4">{slackMessage}</p>}
            </MDBox>
          </Grid>

          <Grid item xs={12} md={6} lg={3} >
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="Five"
                title="Firefox"
                count=""
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
                onClick={handleFirefoxClick}
              />
              {firefoxMessage && <p className="text-xs  bg-red-100 text-red-700 px-4 py-2 rounded mb-4 mt-4">{firefoxMessage}</p>}
            </MDBox>
          </Grid>
        </Grid>


        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;






