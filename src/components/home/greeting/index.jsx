import {Component} from "react";
import {Typography} from "@mui/material";
import ijse_logo from  "../../../assets/img/download.png";
import {styleCss} from "./style.css";
import {withStyles} from "@mui/styles";

class Greeting extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
        //Inline CSS
            // <div style={{backgroundColor: 'red'}}>

            <div className={classes.container}>
                <div>
                    <img src={ijse_logo}  alt=""/>
                </div>
                <div>
                    <Typography variant="h3" gutterBottom>Hello {this.props.name}</Typography>
                </div>
            </div>
        )
    }
}
export default withStyles(styleCss)(Greeting)
