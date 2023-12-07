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
            cUsername: "admin",
            cPassword: "12345",
            username: null,
            password: null,
        }
    }

    setUserNameAndPassword() {
        this.setState({
            username: document.getElementById("userName").value,
            password: document.getElementById("password").value,
        });
    }

    checkUserNameOrPassword() {
        if (this.state.username === this.state.cUsername && this.state.password === this.state.cPassword) {

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
                                   this.setUserNameAndPassword();
                               }}
                    />

                    <TextField className={classes.textarea}
                               id="password"
                               label="Password"
                               type='password'
                               variant="outlined"
                               style={{marginTop: '20px'}}
                               onKeyUp={() => {
                                   this.setUserNameAndPassword();
                               }}
                    />

                    <div style={{marginTop: 30}}>
                        <GDSEButton
                            id="btnSignIn"
                            label="Sign-In"
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                this.checkUserNameOrPassword();
                            }}
                        />

                        <GDSEButton
                            id="btnSigUp"
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