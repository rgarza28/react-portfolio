import React from 'react'
import  { makeStyles } from "@material-ui/styles"
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core"
import Facebook from "@material-ui/icons/Facebook"
import Github from "@material-ui/icons/GitHub"
import Linkedin from "@material-ui/icons/LinkedIn"

const useStyles = makeStyles ({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250,
        },
        "& .MuiSvgIcon-root": {
            fill: "tan",
            "&:hover": {
                fill: "tomato",
                fontSize: "1.8rem"
            },
        },
    },

});

const Footer = () => {
    const classes = useStyles();
    return (
        <BottomNavigation width="auto" style={{background: "#222"}}>
            <BottomNavigationAction
                className={classes.root}
                style={{padding: 0}}
                icon={<Facebook />}
                href="https://www.facebook.com/robert.garza.140?ref=bookmarks" target="_blank"
            />

            <BottomNavigationAction
                className={classes.root}
                style={{padding: 0}}
                icon={<Github />}
                href="https://github.com/rgarza28" target="_blank"
                
            />

            <BottomNavigationAction
                className={classes.root}
                style={{padding: 0}}
                icon={<Linkedin />}
                href="https://www.linkedin.com/in/robert-michael-garza/" target="_blank"
            />

        </BottomNavigation>
    )
}

export default Footer
