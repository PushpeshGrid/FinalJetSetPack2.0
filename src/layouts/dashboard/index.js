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

// importclient role
import AppSelector from "./components/role/clientrole";

function Dashboard() {


  const { sales, tasks } = reportsLineChartData;
  const [message, setMessage] = useState('');


  
const handleSlackDownload = (e)=>{
  e.preventDefault();
  


  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:8000/set_single_app/Slack'
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    

  })
  .catch((error) => {
    console.log(error);
  });
}



const handleVscodeDownload =(e)=>{
  e.preventDefault();

  setMessage('hi')
  console.log(message)
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:8000/set_single_app/VSCode'
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
}



const handleFirefoxDownload =(e)=>{
    e.preventDefault();
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8000/set_single_app/Firefox'
    };
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
}
 
  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* <MyForm/> */}
      <MDBox py={3}>
        <Grid container spacing={3}>

      

          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5} >
              <ComplexStatisticsCard
                icon="View"
                title="Vs Code"
                count=""
                percentage={{
                  color: "success",
                  label: "today updated",
                }}
              />
            </MDBox>
          </Grid>
          {message && <p className="text-xs  bg-red-100 text-red-700 px-4 py-2 rounded mb-4 mt-4">{message}</p>}

          <Grid item xs={12} md={6} lg={3} >
            <MDBox mb={1.5} >
              <ComplexStatisticsCard
                color="success"
                icon="Save"
                title="slack"
                count=""
                percentage={{
                  color: "success",
                  label: "yesterday updated",
                }}
              />
            </MDBox>
          </Grid>
          {message && <p className="text-xs  bg-red-100 text-red-700 px-4 py-2 rounded mb-4 mt-4">{message}</p>}

          <Grid item xs={12} md={6} lg={3} >
            <MDBox mb={1.5} >
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
              />
            </MDBox>
          </Grid>
          {message && <p className="text-xs  bg-red-100 text-red-700 px-4 py-2 rounded mb-4 mt-4">{message}</p>}
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
