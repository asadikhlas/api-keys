import React, { Component } from 'react'
import clsx from 'clsx';

import { IconButton, Button, Paper, Typography, Tooltip, TextField, InputAdornment } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Restore, FileCopy } from "@material-ui/icons"

class Home_page extends Component {

    state = {
        clientId: '',
        publicKey: '',
        developmentId: '',
        sandboxId: '',
        showDevelopment: false,
        showSandbox: false
    }


    handlePassword = (id) => {

        console.log(id)
        if (id === 'developmentId') {
            this.setState({
                showDevelopment: !this.state.showDevelopment
            })
        } else if (id === "sandboxId") {
            this.setState({
                showSandbox: !this.state.showSandbox
            })
        }

    }

    handleChange = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value
        })

    }
    render() {
        const { classes } = this.props
        return (
            <div>
                <nav className="navbar" style={{ backgroundColor: '#174f7c' }}>
                    {/* Navbar content */}
                    <h4 style={{ color: 'white', marginTop: '10px' }}>Account</h4>
                </nav>
                <div className="site-main-wrp">
                    <div className="site-left-part">
                        <div className="site-left-part-content">
                            <span className="menu-open-trg"><i className="fal fa-align-left" /></span>
                            <div className="left-part-menu">
                                <br />
                                <div className="menu-item">
                                    <ul>
                                        <li>
                                            <a href="">
                                                <i className="fas fa-globe-asia" /> &nbsp; General
                    </a>
                                            <hr />
                                        </li>
                                        <li>
                                            <a href="">
                                                <i className="fas fa-key" /> &nbsp; Keys
                    </a>
                                            <hr />
                                        </li>
                                        <li>
                                            <a href="">
                                                <i className="fas fa-terminal" /> &nbsp; API
                    </a>
                                            <hr />
                                        </li>
                                        <li><a href=""><i className="fas fa-user-friends" /> &nbsp; Team</a>
                                            <hr />
                                        </li>
                                        <li>
                                            <a href="">
                                                <i className="fas fa-lock" /> &nbsp; Security
                    </a>
                                            <hr />
                                        </li>
                                        <li>
                                            <a href="">
                                                <i className="fas fa-arrow-alt-circle-up" /> &nbsp; Integrations
                    </a>
                                            <hr />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-right-main-content" style={{ backgroundColor: '#f7f9fb' }}>
                        <div className="site-main-contnet-inner">
                            <div className="container" >
                                <div className="row mx-2 p-5" style={{ backgroundColor: 'white', boxShadow: '0 0 2px #a3a3a3f0' }} >


                                    <div className="col-lg-12 mb-4">
                                        <h3 style={{ marginLeft: '10px' }}>Keys <span className="mr-3" style={{ color: '#8fd4ef', display: 'flex', justifyContent: 'flex-end', fontSize: '0.6em', marginTop: '-20px', fontWeight: 'bold' }}>Learn
                          more in the docs</span></h3>
                                        <hr className="mt-4" />
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="mission-inner-text">
                                            <label className="mt-3" >Client_Id</label>
                                        </div>

                                    </div>

                                    <div className="col-lg-8">
                                        <div className="mission-inner-text">
                                            <TextField
                                                id="outlined-simple-start-adornment"
                                                className={clsx(classes.textField)}
                                                name="clientId"
                                                value={this.state.clientId}
                                                onChange={this.handleChange}
                                                variant="outlined"
                                                fullWidth
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <Tooltip title="copy">
                                                                <IconButton
                                                                    className={classes.icon}
                                                                    // ref={client}
                                                                    // onClick = {() => copy()}
                                                                >
                                                                    <FileCopy />
                                                                </IconButton>
                                                            </Tooltip>


                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="mission-inner-text">
                                            <label>Public_key</label>
                                        </div>

                                    </div>

                                    <div className="col-lg-8">
                                        <div className="mission-inner-text">


                                            <TextField
                                                id="outlined-simple-start-adornment"
                                                className={clsx(classes.textField)}
                                                variant="outlined"
                                                name="publicKey"
                                                value={this.state.publicKey}
                                                onChange={this.handleChange}
                                                fullWidth
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <Tooltip title="copy">
                                                                <IconButton
                                                                    className={classes.icon}
                                                                >
                                                                    <FileCopy />
                                                                </IconButton>
                                                            </Tooltip>


                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </div>
                                    </div>





                                    <div className="col-lg-12 mt-4" >
                                        <h4 style={{ marginLeft: '10px', fontWeight: "500" }}>Secrets <span className="mr-3" style={{ color: '#8fd4ef', display: 'flex', justifyContent: 'flex-end', fontSize: '0.6em', marginTop: '-20px', fontWeight: 'bold' }}>

                                            <Button variant="contained" className={classes.button}>
                                                Manage Permissions
                                            </Button>

                                        </span></h4>

                                    </div>





                                    <div className="col-lg-4">
                                        <div className="mission-inner-text">
                                            <label className="mt-3">Developement <i class="fas fa-user-lock" style={{ color: '#c7d4df' }}> 1</i></label>
                                        </div>

                                    </div>

                                    <div className="col-lg-8">
                                        <div className="mission-inner-text">

                                            <TextField
                                                id="outlined-adornment-password"
                                                className={clsx(classes.textField)}
                                                variant="outlined"
                                                name="developmentId"
                                                id="developmentId"
                                                type={this.state.showDevelopment ? 'text' : 'password'}

                                                value={this.state.developmentId}
                                                onChange={this.handleChange}
                                                //   type={values.showPassword ? 'text' : 'password'}
                                                fullWidth
                                                //   onChange={handleChange('password')}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <Tooltip title="password visibility">
                                                                <IconButton
                                                                    className={classes.icon}
                                                                    edge="end"
                                                                    aria-label="Toggle password visibility"
                                                                    onClick={() => this.handlePassword('developmentId')}
                                                                >
                                                                    {this.state.showDevelopment ? <Visibility /> : <VisibilityOff />}
                                                                </IconButton>
                                                            </Tooltip>

                                                            <Tooltip title="copy">
                                                                <IconButton
                                                                    className={classes.icon}
                                                                    edge="end"
                                                                onClick={this.copyText}

                                                                >

                                                                    <FileCopy />
                                                                </IconButton>

                                                            </Tooltip >

                                                            <Tooltip title="restore">
                                                                <IconButton
                                                                    className={classes.icon}
                                                                    edge="end"
                                                                    onClick={() => this.setState({ developmentId: "" })}
                                                                >
                                                                    <Restore />
                                                                </IconButton>
                                                            </Tooltip>


                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />

                                        </div>
                                    </div>



                                    <div className="col-lg-4">
                                        <div className="mission-inner-text">
                                            <label className="mt-3">Sandbox <i class="fas fa-user-lock" style={{ color: '#c7d4df' }}> 1 </i></label>
                                        </div>

                                    </div>

                                    <div className="col-lg-8">
                                        <div className="mission-inner-text">

                                            <TextField
                                                id="outlined-adornment-password"
                                                className={clsx(classes.textField)}
                                                variant="outlined"
                                                name="sandboxId"
                                                value={this.state.sandboxId}
                                                onChange={this.handleChange}
                                                type={this.state.showSandbox ? 'text' : 'password'}
                                                fullWidth
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <Tooltip title="password visibility">
                                                                <IconButton
                                                                    edge="end"
                                                                    id="sandboxId"
                                                                    className={classes.icon}
                                                                    aria-label="Toggle password visibility"
                                                                    onClick={() => this.handlePassword('sandboxId')}

                                                                >
                                                                    {this.state.showSandbox ? <Visibility /> : <VisibilityOff />}
                                                                </IconButton>

                                                            </Tooltip>
                                                            <Tooltip title="copy">
                                                                <IconButton
                                                                    className={classes.icon}
                                                                    edge="end">
                                                                    <FileCopy />
                                                                </IconButton>

                                                            </Tooltip>

                                                            <Tooltip title="restore">
                                                                <IconButton
                                                                    className={classes.icon}
                                                                    edge="end"
                                                                    onClick={() => this.setState({ sandboxId: "" })}
                                                                >
                                                                    <Restore />
                                                                </IconButton>

                                                            </Tooltip>


                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />

                                        </div>
                                    </div>



                                    <div className="col-lg-12">
                                        <Paper className={classes.root}>
                                            <div className="col-lg-6">
                                                <h4>Request Development Access</h4>
                                                <p>Free Forever 1+ Day Approval</p>
                                            </div>

                                            <div className="col-lg-6 d-flex align-items-center justify-content-end">
                                                <Button variant="contained" className={classes.button}>
                                                    Request access
                            </Button>
                                            </div>
                                        </Paper>
                                    </div>





                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Home_page;
