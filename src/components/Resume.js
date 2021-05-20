import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },

  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent tranparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-oftype(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color:"white",
    padding:"0",
    textTransform: "uppercase"
  }
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      {/* <h2>Resume Component</h2> */}
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Work Experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2018 - Present
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" align="center" className={classes.subHeading}>
              General Manager
            </Typography>
            <Typography variant="body1" align="center" style={{color: "tomato"}}>
              Werx Repair Services
            </Typography>
            <Typography variant="subtitle1" align="center" style={{color: "tan"}}>
            Manage the repair center, warehouse, quality control, customer service, and product testing aspects of the business. Create documentation for procedures outlining the tasks each department is responsible for. Establish metrics for each role, monitor they are met, and coach individuals who are not meeting them. Coach mentor employees to learn and hone new skills 
            </Typography>
            
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2016 - 2018
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" align="center" className={classes.subHeading}>
              Director of Quality Control
            </Typography>
            <Typography variant="body1" align="center" style={{color: "tomato"}}>
              Werx Repair Services
            </Typography>
            <Typography variant="subtitle1" align="center" style={{color: "tan"}}>
            Manage the repair center, warehouse, quality control, customer service, and product testing aspects of the business. Create documentation for procedures outlining the tasks each department is responsible for. Establish metrics for each role, monitor they are met, and coach individuals who are not meeting them. Coach mentor employees to learn and hone new skills 
            </Typography>
            
          </Box>

          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2015 - 2018
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" align="center" className={classes.subHeading}>
              Director of Training
            </Typography>
            <Typography variant="body1" align="center" style={{color: "tomato"}}>
              Werx Repair Services
            </Typography>
            <Typography variant="subtitle1" align="center" style={{color: "tan"}}>
            Manage 10+ Master Technician field support trainers across the country. Create training material related to phone repair and operations across multiple device
            manufacturers. Coordinate market launches with retail partners facilitating the training, product, tools, and
            support pieces. Review new devices and operating systems released to determine reparability and issues that
            may be faced. Trained over 1000 retail associates on how to perform mobile device repair (English and Spanish). Create customer facing blog articles related to current events, issues, and repair tips
            </Typography>
            
          </Box>

          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2012 - 2015
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" align="center" className={classes.subHeading}>
              Master Repair Technician/Trainer
            </Typography>
            <Typography variant="body1" align="center" style={{color: "tomato"}}>
              RadioShack
            </Typography>
            <Typography variant="subtitle1" align="center" style={{color: "tan"}}>
            Provided support for 50 repair locations in the DFW market understanding business requirements and translating them into technical requirements. Participated in Launching new repair markets though training technicians and setting up operations. Developed higher level repair skill involving: FPC repair, component repair, backlight repair, and
            trace/pad repair
            </Typography>
            
          </Box>

        </Box>
        
      </Box>
    </>
  );
};

export default Resume;
