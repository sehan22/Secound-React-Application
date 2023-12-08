import React, {Component} from "react";
import {TextField} from "@mui/material";
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
            formData: {
                username: null,
                password: null,
            }
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
        } else {
            console.log("wrong")
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
            </div>
        )
    }
}

export default withStyles(loginStyleCss)(LoginContainer)