import {Component} from "react";
import GDSEButton from "../../components/common/button";
import not_found from "../../assets/img/404Img.png";
import {withStyles} from "@mui/styles";
import {Link} from "react-router-dom";

const styleSheet = () => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    image_container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        maxWidth: '400px',
    },

    image: {
        objectFit: 'cover',
        width: '100%',
    }
})

class NotFound extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {classes} = this.props;

        return (
            <div className={classes.container}>
                <div className={classes.image_container}>
                    <img className={classes.image} src={not_found} alt="404"/>
                </div>

                <div></div>

                <Link to='/'>
                    <GDSEButton
                        variant="contained"
                        color="primary"
                        label="Back to Home Page"
                    />
                </Link>
            </div>
        )
    }
}

export default withStyles(styleSheet)(NotFound)