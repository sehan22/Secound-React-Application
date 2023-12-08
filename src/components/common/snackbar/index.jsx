import {Component} from "react";
import PropTypes from "prop-types";
import {Alert, Snackbar} from "@mui/material";

class GDSESnackBar extends Component {
    static propTypes = {
        open: PropTypes.bool,
        className: PropTypes.string,
        message: PropTypes.string,
        anchorOrigin: PropTypes.object,
        children: PropTypes.node,
        severity: PropTypes.string,
        autoHideDuration: PropTypes.number,
    }

    static defaultProps = {
        open: false,
        className: "",
        message: "",
        name: "gdse_snackbar",
        severity: "success",
        autoHideDuration: 3000,
        anchorOrigin: {
            vertical: "bootom",
            horizontal: "center",
        },
        variant: "filled",
    }

    handleButtonClose = (event) => {
        const {onClose} = this.props;
        onClose && onClose({event})
    }

    renderChildren = (message, children) => {
        if (message) return message;
        if (children) return children;
    }

    render() {
        const {
            open,
            className,
            message,
            autoHideDuration,
            anchorChildren,
            children,
            severity,
            variant,
        } = this.props;

        return (
            <Snackbar
                name="gdse_snackbar"
                open={open}
                className={className}
                anchorOrigin={anchorChildren}
                autoHideDuration={autoHideDuration}
                onClose={this.handleButtonClose}
            >
                <Alert
                    variant={variant}
                    severity={severity}
                    onClose={this.handleButtonClose}
                >
                    {this.renderChildren(message, children )}
                </Alert>
            </Snackbar>
        )
    }
}

export default GDSESnackBar;






