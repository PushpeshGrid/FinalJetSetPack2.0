// @mui material components
import Card from "@mui/material/Card";
// import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDButton from "components/MDButton";

// Billing page components
import Transaction from "layouts/billing/components/Transaction";

function Transactions() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Your Transaction&apos;s
        </MDTypography>
        <MDBox display="flex" alignItems="flex-start">
          <MDBox color="text" mr={0.5} lineHeight={0}>
            <Icon color="inherit" fontSize="small">
              date_range
            </Icon>
          </MDBox>
          <MDTypography variant="button" color="text" fontWeight="regular">
            21 january - 23 July 2023
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox pt={3} pb={2} px={2}>
        <MDBox mb={2}>
          <MDTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase">
            newest
          </MDTypography>
        </MDBox>
        <MDBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="error"
            icon="expand_more"
            name="Slack"
            description="Thu 15 Jun, at 12:30 PM"
            value="- $ 8,500"
          />
          <Transaction
            color="success"
            icon="expand_less"
            name="Django"
            description="Thu 14 Jun, at 12:30 PM"
            value="+ $ 3,400"
          />
        </MDBox>
        <MDBox mt={1} mb={2}>
          <MDTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase">
            yesterday
          </MDTypography>
        </MDBox>
        <MDBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="success"
            icon="expand_less"
            name="Data Science Tools"
            description="Thu 13 Jun, at 12:30 PM"
            value="+ $50"
          />
          <Transaction
            color="success"
            icon="expand_less"
            name="Front-End Tools"
            description="Thu 12 Jun, at 12:30 PM"
            value="+ $ 9,000"
          />
          <Transaction
            color="success"
            icon="expand_less"
            name="Python backend tools"
            description="Thu 11 Jun, at 12:30 PM"
            value="+ $ 5,500"
          />
          <Transaction
            color="dark"
            icon="priority_high"
            name="gridcloud"
            description="Thu 10 Jun, at 12:30 PM"
            value="Pending"
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default Transactions;
