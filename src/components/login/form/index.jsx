import {Component} from "react";
import {InputAdornment, TextField} from "@mui/material";
import * as PropTypes from "prop-types";

function AccountCircle(props) {
    return null;
}

AccountCircle.propTypes = {sx: PropTypes.shape({color: PropTypes.string, mr: PropTypes.number, my: PropTypes.number})};

class LoginForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TextField
                id="input-with-icon-textfield"
                label="TextField"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    ),
                }}
                variant="standard"
            />
        )
    }
}

export default LoginForm