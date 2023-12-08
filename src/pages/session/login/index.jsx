import {Component} from "react";
import LoginGreeting from "../../../components/login/container";
import {Divider} from "@mui/material";
import LoginContainer from "../../../components/login/container";

class LoginPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <LoginContainer/>
            </>
        )
    }
}

export default LoginPage