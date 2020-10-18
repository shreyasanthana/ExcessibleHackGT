import React, { Component } from 'react'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

class RequestCard extends Component {
    handleClick(){
        console.log("Card Clicked!");
        window.location.href = "/blog/someBlogId";
    }
    render() {
        
        return (
            <Card
                style = {{
                    width : "750px",
                    margin : "20px auto",
                    minHeight: 50, 
                }}
            >
                <CardActionArea onClick = {this.handleClick}>
                    <Grid container direction = "column" spacing = {1}>
                        <Grid 
                            item
                            style= {{
                               padding : "10px", 
                               background : "linear gradient(90deg, #c2e9fb, #81a4fd)", 
                               minHeight : 50, 
                               textAlign : "left", 
                               color : "#FFFFFF" 
                            }}    
                        >
                            <Typography variant ="h2">{this.props.name}</Typography>
                        </Grid>
                        <Grid 
                         item
                            style = {{
                                paddingLeft : "30px",
                                paddingTop: "10px", 
                                color: "#3D0D95"
                            }}
                        >
                            <Typography variant ="h4">{this.props.donate ? "Donating: " : ""} {this.props.request ? "Requesting: " : ""} {this.props.description}</Typography>
                        </Grid>
                        <Grid
                            item
                            style = {{
                                paddingLeft : "30px", 
                                paddingBottom: "10px", 
                                color:"#3D0D95"
                            }}
                        >
                            <Typography variant ="h7">{this.props.location}</Typography>
                        </Grid>
                    </Grid>
                </CardActionArea>
            </Card>
        )
    }
}

export default RequestCard