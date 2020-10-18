import React, {Fragment} from 'react'
import { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid"; 
import logo from './excessible_logo.png'


class HeaderBar extends Component {

    constructor() {
        super()
        this.state = {
            blogs:[
                {
                    id: "01", 
                    title: "yo",
                }, 
                {
                    id: "02", 
                    title: "yomama",
                }, 
                {
                    id: "03",
                    title: "aight", 
                },
            ]
    
        };
    }

    render() {
        return (
            //<h1>Home Page</h1>
            <Fragment>
                <AppBar style ={{ padding: "40px" }}> 
                    <Typography variant = 'h4'> Excessible </Typography>
                    <img style={{ height: 100,
                                  width: 100,
                                  position: "absolute",
                                  right: 15,
                                  top: 12}}
                        src={logo} 
                        alt='Logo' 
                    />
                </AppBar>
                <Grid container 
                    direction = "column"
                    justify = "center"
                    spacing = {5}
                    style = {{paddingTop : "150px", textAlign :"center" }}>
    
                {this.state.blogs.map((blogObject) =>(
                    <Grid item></Grid>
                ))}
            
                </Grid>
            </Fragment>
           
        )
    }
    
}



export default HeaderBar