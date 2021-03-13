import React from "react";
import Navbar from "./Navbar";
import {makeStyles, withStyles} from "@material-ui/styles"
import { Typography, Grid, Box, TextField, Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send"

const useStyles = makeStyles(theme=>({
  form: {
    top: "50%",
    left: "50%", 
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
  }

}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color:"tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan"
      },
      "&:hover fieldset": {
        borderColor: "tan"
      },
      "&.Mui-focused fieldset": {
        borderColor: "tan"
      },
    }
  }
})(TextField);


const Contact = () => {

  const classes = useStyles();

  return (
    <Box component="div" style={{background: "#233", height: "100vh"}}>
      <Navbar />
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography variant="h4" style={{color: "tomato", textAlign: "center", textTransform: "uppercase" }}>
            Email
          </Typography>
          <Typography variant="h5" style={{color: "tan", textAlign: "center"}}>
            garza.robert28@gmail.com
          </Typography>
          <br />
          <Typography variant="h4" style={{color: "tomato", textAlign: "center", textTransform: "uppercase" }}>
            Phone Number
          </Typography>
          <Typography variant="h5" style={{color: "tan", textAlign: "center"}}>
            972-261-9144
          </Typography>
        </Box>
        
      </Grid>
    </Box>
  );
};

export default Contact;
