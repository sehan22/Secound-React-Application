import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";

class FlexBoxLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {classes} = this.props;

        return (
            <div className={classes.container}>
                <div className={classes.title__container}></div>
                <div className={classes.form__container}></div>
                <div className={classes.btn__container}></div>
            </div>
        )
    }
}

export default withStyles(styleSheet)(FlexBoxLayout)