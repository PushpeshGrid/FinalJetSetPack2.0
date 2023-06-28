



// import MDBox from "components/MDBox";

// import React, { useState } from "react";

// // @mui material components
// import Grid from "@mui/material/Grid";

// const RadioGroup = ({ children }) => {
//   return (
//     <div
//       role="radiogroup"
//       className="radio-group"
//       aria-labelledby="group_heading"
//     >
//       <h2 id="group_heading" class='mb-2'>Select Role</h2>
//       {children}
//     </div>
//   );
// };

// const Radio = ({ children, id, name, onChange }) => {
//   const handleChange = () => {
//     if (typeof onChange === "function") {
//     //   onChange(id);
//     }
//   };

//   return (
//     <>
//       <input
//         type="radio"
//         id={id}
//         name={name}
//         className="absolute top-2 right-2"
//         onChange={handleChange}
//       />
//       <label className="radio-label" htmlFor={id} >
//         {children}
//       </label>
//     </>
//   );
// };

// const App = () => {
//   const [selectedRole, setSelectedRole] = useState(null);

//   const handleRoleChange = (id) => {
    
        
    
//         setSelectedRole(id);
//     console.log(selectedRole)
    
//     // Here you can send the data to the backend
//     // Example code to send the data using fetch:
//     // fetch('/api/endpoint', {
//     //   method: 'POST',
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //   },
//     //   body: JSON.stringify(data),
//     // })
//     //   .then(response => response.json())
//     //   .then(result => {
//     //     // Handle the response from the backend
//     //   })
//     //   .catch(error => {
//     //     // Handle any error that occurred during the request
//     //   })
//   };

//   return (
//     <MDBox mt={4.5}>
//       <RadioGroup>
//         <Grid container spacing={3}>



//           {/* <Grid item xs={12} md={6} lg={4}>
//             <MDBox
//               mb={3}
//               className="font-serif bg-teal-300 bg-opacity-40 rounded-lg shadow-lg backdrop-blur-lg backdrop-filter border border-gray-400 border-opacity-60 hover:bg-opacity-60 p-2 ml-1"
//             >
//               <Radio id="frontend" name="radio" onChange={handleRoleChange}>
//                 <h3 className="font-semibold ml-2 hover:scale-x-105">
//                   Frontend
//                 </h3>
//                 <p>This is our most basic radio button, built to last.</p>
//               </Radio>
//             </MDBox>
//           </Grid> */}
//    <Grid item xs={12} md={6} lg={4}>
//       <MDBox mb={3} class="font-serif' bg-teal-300  bg-opacity-40 rounded-lg shadow-lg backdrop-blur-lg backdrop-filter border border-gray-400 border-opacity-60 hover:bg-opacity-60 p-2 ml-1">
//       <Radio id="frontend" name="radio" onChange={handleRoleChange}>
//         <h3 class='font-semibold ml-2 hover:scale-x-105'>frontend</h3>
//         <p>This is our most advanced radio button yet!</p>
//       </Radio>
//       </MDBox>
//       </Grid>

//     <Grid item xs={12} md={6} lg={4}>
//       <MDBox mb={3} class="font-serif' bg-teal-300  bg-opacity-40 rounded-lg shadow-lg backdrop-blur-lg backdrop-filter border border-gray-400 border-opacity-60 hover:bg-opacity-60 p-2 ml-1">
//       <Radio id="backend" name="radio" onChange={handleRoleChange}>
//         <h3 class='font-semibold ml-2 hover:scale-x-105'>Backend</h3>
//         <p>This is our most advanced radio button yet!</p>
//       </Radio>
//       </MDBox>
//       </Grid>

//         <Grid item xs={12} md={6} lg={4}>
//           <MDBox mb={3} class="font-serif' bg-teal-300  bg-opacity-40 rounded-lg shadow-lg backdrop-blur-lg backdrop-filter border border-gray-400 border-opacity-60 hover:bg-opacity-60 p-2 ml-1">
//           <Radio id="DataScience" name="radio" onChange={handleRoleChange}>
//             <h3 class='font-semibold ml-2 hover:scale-x-105'>DataScience</h3>
//             <p>This is our most basic radio button, built to last.</p>
//           </Radio>
//           </MDBox>
//           </Grid>




         
//         </Grid>
//       </RadioGroup>
//     </MDBox>
//   );
// };

// export default App;









import MDBox from "components/MDBox";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";

const RadioGroup = ({ children }) => {
  return (
    <div
      role="radiogroup"
      className="radio-group"
      aria-labelledby="group_heading"
    >
      <h2 id="group_heading" className="mb-2">
        Select Role
      </h2>
      {children}
    </div>
  );
};

const Radio = ({ children, id, name, onChange }) => {
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(id);
    }
  };

  return (
    <>
      <input
        type="radio"
        id={id}
        name={name}
        className="absolute top-2 right-2"
        onChange={handleChange}
      />
      <label className="radio-label" htmlFor={id}>
        {children}
      </label>
    </>
  );
};

const App = () => {


  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleChange = (id) => {
    let roles;
    if (id === "frontend") {
      roles = "Frontend";
    } else if (id === "backend") {
      roles = "Backend";
    } else if (id === "DataScience") {
      roles = "Data_Science";
    }

    setSelectedRole({ roles });
   
  };

  console.log(selectedRole)

  return (
    <MDBox mt={4.5}>
      <RadioGroup>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox
              mb={3}
              class="font-serif bg-teal-300 bg-opacity-40 rounded-lg shadow-lg backdrop-blur-lg backdrop-filter border border-gray-400 border-opacity-60 hover:bg-opacity-60 p-2 ml-1"
            >
              <Radio id="frontend" name="radio" onChange={handleRoleChange}>
                <h3 class="font-semibold ml-2 hover:scale-x-105">
                  Frontend
                </h3>
                <p>This is our most basic radio button, built to last.</p>
              </Radio>
            </MDBox>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <MDBox
              mb={3}
              class="font-serif bg-teal-300 bg-opacity-40 rounded-lg shadow-lg backdrop-blur-lg backdrop-filter border border-gray-400 border-opacity-60 hover:bg-opacity-60 p-2 ml-1"
            >
              <Radio id="backend" name="radio" onChange={handleRoleChange}>
                <h3 class="font-semibold ml-2 hover:scale-x-105">
                  Backend
                </h3>
                <p>This is our most advanced radio button yet!</p>
              </Radio>
            </MDBox>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <MDBox
              mb={3}
              class="font-serif bg-teal-300 bg-opacity-40 rounded-lg shadow-lg backdrop-blur-lg backdrop-filter border border-gray-400 border-opacity-60 hover:bg-opacity-60 p-2 ml-1"
            >
              <Radio
                id="DataScience"
                name="radio"
                onChange={handleRoleChange}
              >
                <h3 class="font-semibold ml-2 hover:scale-x-105">
                  DataScience
                </h3>
                <p>This is our most basic radio button, built to last.</p>
              </Radio>
            </MDBox>
          </Grid>
        </Grid>
      </RadioGroup>
   
    </MDBox>
  );
};

export default App;

