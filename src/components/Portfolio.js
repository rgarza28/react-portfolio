import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Navbar from "./Navbar";
import project1 from "../images/bng.png"
import project2 from "../images/travelpacker.png"
import project3 from"../images/inventorymanager.png"
import project4 from"../images/noteTaker.png"
import project5 from"../images/codeQuiz.png"
import project6 from"../images/workDay.png"
import project7 from"../images/passgen.png"
import project8 from"../images/weatherDash.png"
import project9 from"../images/employeeDirectory.png"
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";


const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%"
  },
  cardContainer: {
    maxWidth:  345,
    // margin: "3rem",
    margin: "5rem auto"
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  }
})

const Portfolio = () => {
  const classes= useStyles()
  return (
  
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Typography variant="h4" align="center" className={classes.heading}>
          Portfolio
        </Typography>
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia   
                  component="img"
                   alt="Project 1"
                  height="140"
                  image={project1}
                  />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Bubs n' Grubs
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  This application provide random genreation of meal and drink recipes to mix up a routine.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href="https://github.com/rgarza28/bng" target="_blank">
                    Github Repo
                  </Button>
                  <Button size="small" color="primary" href="https://rgarza28.github.io/bng/" target="_blank">
                    Live Demo
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
        </Grid>
        {/* Project 2 */}
        <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia   
                  component="img"
                   alt="Project 2"
                  height="140"
                  image={project2}
                  />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Travel Packer
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  This application generates a packing list based on the numbers of days you are traveling.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href="https://github.com/rgarza28/project_2" target="_blank">
                    Github Repo
                  </Button>
                  <Button size="small" color="primary" href="https://project2finalrod.herokuapp.com/" target="_blank">
                    Live Demo
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
        </Grid>
        {/* Project 3 */}
        <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia   
                  component="img"
                   alt="Project 3"
                  height="140"
                  image={project3}
                  />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Inventory Manager
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  This application generates a packing list based on the numbers of days you are traveling.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href="https://github.com/rgarza28/Inventory-Manager" target="_blank">
                    Github Repo
                  </Button>
                  <Button size="small" color="primary" href="https://lit-meadow-59526.herokuapp.com/" target="_blank">
                    Live Demo
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
        </Grid>
        {/* Project 4 */}
        <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia   
                  component="img"
                   alt="Project 4"
                  height="140"
                  image={project4}
                  />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Inventory Manager
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  This application allows the user to take notes, save, and delete them. An express server is used to store and manage the user data.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href="https://github.com/rgarza28/notetaker" target="_blank">
                    Github Repo
                  </Button>
                  <Button size="small" color="primary" href="https://polar-dawn-55862.herokuapp.com/" target="_blank">
                    Live Demo
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
        </Grid>
        {/* Project 5 */}
        <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia   
                  component="img"
                   alt="Project 5"
                  height="140"
                  image={project5}
                  />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Code Quiz
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  This application allows the user to take notes, save, and delete them. An express server is used to store and manage the user data.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href="https://github.com/rgarza28/code_quiz" target="_blank">
                    Github Repo
                  </Button>
                  <Button size="small" color="primary" href="https://rgarza28.github.io/code_quiz/" target="_blank">
                    Live Demo
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
        </Grid>
        {/* Project 6 */}
        <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia   
                  component="img"
                   alt="Project 6"
                  height="140"
                  image={project6}
                  />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Work Day Scheduler
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  This application allows you to enter tasks and notes for the work day. Data is saved via local storage, and the time of day is read through js.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href="https://github.com/rgarza28/work_scheduler" target="_blank">
                    Github Repo
                  </Button>
                  <Button size="small" color="primary" href="https://rgarza28.github.io/work_scheduler/" target="_blank">
                    Live Demo
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
        </Grid>
        {/* Project 7 */}
        <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia   
                  component="img"
                   alt="Project 7"
                  height="140"
                  image={project7}
                  />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Password Generator
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  This application genrates a password based on requirement input.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href="https://github.com/rgarza28/Password-Generator" target="_blank">
                    Github Repo
                  </Button>
                  <Button size="small" color="primary" href="https://rgarza28.github.io/Password-Generator/" target="_blank">
                    Live Demo
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
        </Grid>
        {/* Project 8 */}
        <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia   
                  component="img"
                   alt="Project 8"
                  height="140"
                  image={project8}
                  />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Weather Dashboard
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  This application display current and 5 day weather forcast for the location entered. It also stors the most recent searches for quick access.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href="https://github.com/rgarza28/weather-dashboard" target="_blank">
                    Github Repo
                  </Button>
                  <Button size="small" color="primary" href="https://rgarza28.github.io/weather-dashboard/" target="_blank">
                    Live Demo
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
        </Grid>
        {/* Project 9 */}
        <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia   
                  component="img"
                   alt="Project 9"
                  height="140"
                  image={project9}
                  />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Employee Directory
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  This is a React based empoyee directory application containing a searchable and sortable table.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href="https://github.com/rgarza28/Employee-Directory" target="_blank">
                    Github Repo
                  </Button>
                  <Button size="small" color="primary" href="https://rgarza28.github.io/Employee-Directory/" target="_blank">
                    Live Demo
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
        </Grid>
      </Grid>
    </Box>

  );
};

export default Portfolio;
