import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import {Autocomplete, Button, Grid, TextField, Typography} from "@mui/material";
import {Component} from "react";

class GridLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [
                {label: 'Male', id: 1},
                {label: 'FeMale', id: 2},
            ]
        }
    }

    render() {
        let {classes} = this.props;

        return (
            <>
                <Grid container spacing={4} style={{padding: '50px'}}>
                    <Grid item lg={6} md={4} sm={3} xs={2}>
                        <Typography variant="h4">Customer Registration Form</Typography>
                    </Grid>

                    <Grid item lg={6} md={4} sm={3} xs={2}>
                        <TextField style={{width: '100%'}} id="outlined-basic" label="Customer Name"
                                   variant="outlined"/>
                    </Grid>

                    <Grid item lg={6} md={4} sm={3} xs={2}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={this.state.options}
                            sx={{width: 300}}
                            style={{width: '100%'}}
                            renderInput={(params) => <TextField {...params} label="Gender"/>}
                            getOptionLabel={(option) => option.label}
                            // getOptionLabel={(option) => option.id}
                        />
                    </Grid>
                    <Grid item lg={6} md={4} sm={3} xs={2}>
                        <TextField style={{width: '100%'}} id="outlined-basic" label="Customer Salary"
                                   variant="outlined"/>
                    </Grid>
                    <Grid item lg={6} md={4} sm={3} xs={2}>
                        <TextField style={{width: '100%'}} id="outlined-basic" label="Customer NIC Number"
                                   variant="outlined"/>
                    </Grid>
                    <Grid item lg={6} md={4} sm={3} xs={2}>
                        <TextField style={{width: '100%'}} id="outlined-basic" label="Customer Contact Number"
                                   variant="outlined"/>
                    </Grid>
                    <Grid item lg={6} md={4} sm={3} xs={2}>
                        <Button style={{width: "100%"}} variant="outlined">Clear</Button>
                    </Grid>

                    <Grid item lg={6} md={4} sm={3} xs={2}>
                        <Button style={{marginLeft: '10px', width: "100%"}} variant="contained">Save</Button>
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default withStyles(styleSheet)(GridLayout)