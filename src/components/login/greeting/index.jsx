import {Component} from "react";
import ijse_logo from "../../../assets/img/download.png";
import {Typography} from "@mui/material";

class LoginGreeting extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div>
                    <div>
                        <img src={ijse_logo} alt=""/>
                    </div>

                    <div>
                        <Typography variant="h4" gutterBottom>Welcome Back</Typography>
                    </div>

                    <div>
                        <Typography variant="h5" gutterBottom>Login</Typography>
                    </div>
                </div>
            </>
        )
    }
}

export default LoginGreeting