

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
        overview
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>arrow_upward</Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              24%
            </MDTypography>{" "}
            This month
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <TimelineItem
          color="success"
          icon="notifications"
          title="$2400, Design changes"
          dateTime="22 December 7:20 evening"
        />
        <TimelineItem
          color="error"
          icon="inventory_2"
          title="new request # 1832412"
          dateTime="December 21, 11 AD"
        />
        <TimelineItem
          color="info"
          icon="shopping_cart"
          title="new request # 1832412"
          dateTime="December 21, 11 AD"
        />
        <TimelineItem
          color="warning"
          icon="payment"
          title="new request"
          dateTime="20 december 2023"
        />
        <TimelineItem
          color="primary"
          icon="vpn_key"
          title="new request # 1832412"
          dateTime="December 21, 11 AD"
          lastItem
        />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
