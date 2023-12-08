import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import {Typography} from "@mui/material";

class FlexBoxLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {classes} = this.props;

        return (
            <div className={classes.container}>
                <div className={classes.title__container}>
                    <Typography variant="h4">Customer Registration Form</Typography>
                </div>

                <div className={classes.form__container}>
                    <div className={classes.left__form}></div>
                    <div className={classes.right__form}></div>
                </div>

                <div className={classes.btn__container}></div>
            </div>
        )
    }
}

export default withStyles(styleSheet)(FlexBoxLayout)