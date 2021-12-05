import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBackRounded';


export default class TopMenu extends React.Component {
    render () {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Link to="/" style={{ color: '#000000' }}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="warning"
                                aria-label="back"
                                sx={{ mr: 2 }}
                            >
                                <ArrowBackIcon />
                            </IconButton>
                        </Link>
                        <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                            {this.props.title}
                        </Typography>

                       
                    </Toolbar>
                </AppBar>
            </Box>
        );
    }
}
