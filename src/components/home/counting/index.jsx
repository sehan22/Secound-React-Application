import {Component} from "react";
import GDSEButton from "../../common/button";
import {Typography} from "@mui/material";

class Counting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    incrementCount() {
        this.setState({
            count: this.state.count + 1
        })
    }

    deIncrementCount() {
        this.setState({
            count: this.state.count - 1
        })
    }

    resetCount() {
        this.setState({
            count: 0
        })
    }

    render() {

        return (
            <div>
                <Typography variant="h6" gutterBottom>Count : {this.state.count}</Typography>

                <GDSEButton
                    label="Increse"
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        this.incrementCount();
                    }}
                />

                <GDSEButton
                    label="Decrese"
                    variant="outlined"
                    color="primary"
                    disabled={true}
                    onClick={() => {
                        this.deIncrementCount();
                    }}
                    style={{marginLeft: '15px'}}
                />

                <GDSEButton
                    label="Reset"
                    variant="outlined"
                    color="error"
                    onClick={() => {
                        alert("Reset Successfully");
                        this.resetCount();
                    }}
                    style={{marginLeft: '15px'}}
                />
            </div>
        )
    }
}

export default Counting