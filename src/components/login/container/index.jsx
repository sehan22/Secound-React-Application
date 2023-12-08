import React, {Component} from "react";
import {TextField} from "@mui/material";
import {withStyles} from "@mui/styles";
import {loginStyleCss} from "./style";
import LoginGreeting from "../greeting";
import GDSEButton from "../../common/button";
import GDSESnackBar from "../../common/snackbar";

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cUsername: "admin",
            cPassword: "12345",
            formData: {
                username: null,
                password: null,
            },

            /*for snackbar*/
            open: false,
            message: null,
            severity: null,
        }
    }

    setUserNameAndPassword() {
        this.setState({
            username: document.getElementById("userName").value,
            password: document.getElementById("password").value,
        });
    }

    checkUserNameOrPassword() {
        if (this.state.formData.username === this.state.cUsername
            && this.state.formData.password === this.state.cPassword) {
            console.log("hri")
            this.setState({
                open: true,
                message: "Login Successfully",
                severity: "success"
            });
        } else {
            this.setState({
                open: true,
                message: "UserName or Password is incorrect!",
                severity: "error"
            });
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
                               onChange={(e) => {
                                   let formData = this.state.formData;
                                   formData.username = e.target.value;
                                   this.setState({
                                       formData
                                   });
                               }}
                    />

                    <TextField className={classes.textarea}
                               id="password"
                               label="Password"
                               type='password'
                               variant="outlined"
                               style={{marginTop: '20px'}}
                               onChange={(e) => {
                                   let formData = this.state.formData;
                                   formData.password = e.target.value;
                                   this.setState({
                                       formData
                                   });
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
                                console.log(this.state.cUsername)
                                console.log(this.state.cPassword)
                                console.log(this.state.formData)
                            }}
                            style={{marginLeft: '15px'}}
                        />
                    </div>
                </div>
                <GDSESnackBar
                    open={this.state.open}
                    onClose={() => {
                        this.setState({open: false})
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    varient="filled"
                />
            </div>
        )
    }
}

export default withStyles(loginStyleCss)(LoginContainer)