import React, {Component} from "react";
import {Alert, Button, TextField} from "@mui/material";
import {withStyles} from "@mui/styles";
import {loginStyleCss} from "./style";
import LoginGreeting from "../greeting";
import GDSEButton from "../../common/button";

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "admin",
            password: "admin12345",
        }
    }

    checkUserNameOrPassword() {
        const username = this.state.username;
        const password = this.state.password;

        if (document.getElementById("userName").value === username &&
            document.getElementById("password").value === password
        ) {

        }
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.container_fluid}>
                <div className={classes.container}>
                    <LoginGreeting></LoginGreeting>
                    <TextField className={classes.textarea}
                               id="userName"
                               label="UserName"
                               type='text'
                               variant="outlined"
                               style={{marginTop: '30px'}}
                               onKeyUp={() => {
                                   this.checkUserNameOrPassword();
                               }}
                    />

                    <TextField className={classes.textarea}
                               id="password"
                               label="Password"
                               type='password'
                               variant="outlined"
                               style={{marginTop: '20px'}}
                               onKeyUp={() => {
                                   this.checkUserNameOrPassword();
                               }}
                    />

                    <div style={{marginTop: 30}}>
                        <GDSEButton
                            label="Sign-In"
                            variant="contained"
                            color="primary"
                            onClick={() => {
                            }}
                        />

                        <GDSEButton
                            label="Sign-Up"
                            variant="outlined"
                            color="primary"
                            onClick={() => {
                            }}
                            style={{marginLeft: '15px'}}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(loginStyleCss)(LoginContainer)