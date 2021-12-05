import React from 'react';

import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import DeleteIcon from '@mui/icons-material/DeleteForeverRounded';

import PendingActionsIcon from '@mui/icons-material/PendingActions';


import { formatTime } from '../shared/utils';

export default class ShowNotes extends React.PureComponent {
    render() {
        const iconStyle = { marginLeft: '2px' ,background:'black'};
        const emptyList = <Typography variant="subtitle1" color="error"
            sx={{
                marginTop: '1em'
            }}
        >
            No notes to display!
        </Typography>;

        const noteList = <List sx={{ width: '100%', bgcolor: 'background.paper' }} >
            {this.props.notes.map(note => {
                return (
                    <ListItem style={{marginTop:"2px",background:"#53b56a"}} key={note.time} secondaryAction={
                        <div>
                        
                        
                            <IconButton color="error" style={iconStyle} edge="end"
                                onClick={() => this.props.removeNote(note)}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    }>
                        <ListItemAvatar>
                            <Avatar style={{background:"black"}}>
                                <PendingActionsIcon style={{color:"white",background:"black"}} />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText style={{color:"black"}} primary={note.remark} secondary={formatTime(note.time)}
                            sx={{
                                textTransform: 'capitalize'
                            }}
                        />
                    </ListItem>
                );
            })}
        </List>;

        return (
            
            <Paper elevation={8} sx={{
                margin: '0 1em 20px 1em',
                padding: '1em',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Typography variant="h5">
                    Notes 
                </Typography>
                <Typography variant="subtitle1">
                    Click on the waveform and click AddNote button to add a Note.
                </Typography>

                {this.props.notes.length === 0 ? emptyList : noteList}
            </Paper>
        );
    }
}
