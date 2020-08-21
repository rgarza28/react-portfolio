import React from "react";
import Navbar from "./Navbar";
import { Typography, Box } from "@material-ui/core";

const Contact = () => {
  return (
    <>
      <Navbar />
      <h2>Contact Component</h2>
      <Box component="header">
        <Typography variant="h4" align="center">
          Contact Information
        </Typography>
        <Box component="div">
          <Typography variant="h2">Insert Contact Info Here</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
