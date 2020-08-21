import React from "react";
import Navbar from "./Navbar";
import { Typography, Box } from "@material-ui/core";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <h2>Portfolio Component</h2>
      <Box component="header">
        <Typography variant="h4" align="center">
          Projects
        </Typography>
        <Box component="div">
          <Typography variant="h2">Insert Projects Here</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Portfolio;
