import {Component} from "react";
import Greeting from "../../components/home/greeting";
import Counting from "../../components/home/counting";
import {Divider} from "@mui/material";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <div>
            //     <h1>Hello From With Home Page!</h1>
            //     <h2>What's up {this.props.name} and now my status {this.props.status}</h2>
            // </div>
            <>
                <Greeting name="GDSE 64"/>
                <Divider />
                <Counting/>
            </>
        );
    }
}

export default HomePage