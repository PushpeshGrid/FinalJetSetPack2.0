
// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import homeDecor4 from "assets/images/home-decor-4.jpeg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Overview() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={4}>


            <ProfileInfoCard
                title="User Profile"
                description="Hi, I'm Pushpesh, Front-end developer in grid dynamics, Main specialization is in UI development.  Using web technologies like HTML, CSS, DOM, JavaScript ,React  designs the  Front-end user interface "
                info={{
                  fullName: "Pushpesh Lodiwal",
                  mobile: "+919352274749",
                  email: "plodiwal@griddynamics.com",
                  location: "Telengna",
                }}
                social={[
                  {
                    link: "https://www.facebook.com/Pushpeshlodiwal/",
                    icon: <FacebookIcon />,
                    color: "facebook",
                  },
                  {
                    link: "https://twitter.com/",
                    icon: <TwitterIcon />,
                    color: "twitter",
                  },
                  {
                    link: "https://www.instagram.com/pushpesh_1711/",
                    icon: <InstagramIcon />,
                    color: "instagram",
                  },
                ]}
                action={{ route: "", tooltip: "Edit Profile" }}
                shadow={false}
              />
              {/* <PlatformSettings /> */}
            </Grid>
            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              {/* <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} /> */}
              {/* <ProfileInfoCard
                title="User Profile"
                description="Hi, I'm Pushpesh, Front-end developer in grid dynamics, Main specialization is in UI development.  Using web technologies like HTML, CSS, DOM, JavaScript ,React  designs the  Front-end user interface "
                info={{
                  fullName: "Pushpesh Lodiwal",
                  mobile: "+919352274749",
                  email: "plodiwal@griddynamics.com",
                  location: "Telengna",
                }}
                social={[
                  {
                    link: "https://www.facebook.com/Pushpeshlodiwal/",
                    icon: <FacebookIcon />,
                    color: "facebook",
                  },
                  {
                    link: "https://twitter.com/",
                    icon: <TwitterIcon />,
                    color: "twitter",
                  },
                  {
                    link: "https://www.instagram.com/pushpesh_1711/",
                    icon: <InstagramIcon />,
                    color: "instagram",
                  },
                ]}
                action={{ route: "", tooltip: "Edit Profile" }}
                shadow={false}
              /> */}
              {/* <Divider orientation="vertical" sx={{ mx: 0 }} /> */}
            </Grid>
            {/* <Grid item xs={12} xl={4}>
              <ProfilesList title="conversations" profiles={profilesListData} shadow={false} />
            </Grid> */}
          </Grid>
        </MDBox>



        {/* <MDBox pt={2} px={2} lineHeight={1.25}>
          <MDTypography variant="h6" fontWeight="medium">
            My Projects
          </MDTypography>
          <MDBox mb={1}>
            <MDTypography variant="button" color="text">
              Projects which have been completed 
            </MDTypography>
          </MDBox>
        </MDBox> */}
        {/* <MDBox p={2}> */}
          {/* <Grid container spacing={6}>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor1}
                label="project #1"
                title="Landing Page1"
                description="Mockup 1 is the landing page for the website. Design web pages using HTML,CSS and Java Script.  Making them more user interactive and responsive."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view project",
                }}
                authors={[
                  { image: team1, name: "Elena Morison" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team4, name: "Peterson" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor2}
                label="project #2"
                title="Landing Page2"
                description="Mockup 2 is another landing page for web applications , designed  using React  for making reusable components."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view project",
                }}
                authors={[
                  { image: team3, name: "Nick Daniel" },
                  { image: team4, name: "Peterson" },
                  { image: team1, name: "Elena Morison" },
                  { image: team2, name: "Ryan Milly" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor3}
                label="project #3"
                title="JetSet Pack2.0"
                description=" JetPack 2.0 - One Click Environment and Packaging Setup through Smart Containerisation. "
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view project",
                }}
                authors={[
                  { image: team4, name: "Peterson" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team1, name: "Elena Morison" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor4}
                label="JetsetPack3.0"
                title="JetsetPack3.0"
                description=" JetPack 2.0 - One Click Environment and Packaging Setup through Smart Containerisation."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view project",
                }}
                authors={[
                  { image: team4, name: "Peterson" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team1, name: "Elena Morison" },
                ]}
              />
            </Grid>
          </Grid> */}
        {/* </MDBox> */}
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
