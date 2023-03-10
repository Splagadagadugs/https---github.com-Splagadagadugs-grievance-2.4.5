import React, {useEffect } from 'react'

import { Group, MapsHomeWork } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import PieRoomsCost from './PieRoomsCost';
import Completed from '../../Completed';
// import moment from 'moment';


const Main = ({setSelectedLink, link}) => {

  useEffect(() => {
    setSelectedLink(link)
  }, []);
  
  return (
    <Box
    sx={{
      display: { xs: 'flex', md: 'grid' },
      gridTemplateColumns: 'repeat(3,1fr)',
      gridAutoRows: 'minmax(100px, auto)',
      gap: 3,
      textAlign: 'center',
      flexDirection: 'column',
    }}
  >
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h4">Total Queries</Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Group sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }} />
        <Typography variant="h4">24</Typography>
      </Box>
    </Paper>
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h4">Total Grievances</Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <MapsHomeWork sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }} />
        <Typography variant="h4">22</Typography>
      </Box>
    </Paper>
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h4">Total Suggestions</Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <MapsHomeWork sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }} />
        <Typography variant="h4">23</Typography>
      </Box>
    </Paper>
    <Paper elevation={3} sx={{p:3, gridColumn:'1/4'}}>
      {/* <PieRoomsCost/> */}
      <Completed/>
    </Paper>


    {/* <Paper elevation={3} sx={{ p: 2, gridColumn: 3, gridRow: '1/4' }}>
      <Box>
        <Typography>Recently added Users</Typography>
        <List>
          {users.slice(0, 4).map((user, i) => (
            <Box key={user._id}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt={user?.name} src={user?.photoURL} />
                </ListItemAvatar>
                <ListItemText
                  primary={user?.name}
                  secondary={`Time Created: ${moment(user?.createdAt).format(
                    'YYYY-MM-DD H:mm:ss'
                  )}`}
                />
              </ListItem>
              {i !== 3 && <Divider variant="inset" />}
            </Box>
          ))}
        </List>
      </Box>
      <Divider sx={{ mt: 3, mb: 3, opacity: 0.7 }} />
      <Box>
        <Typography>Recently added Rooms</Typography>
        <List>
          {rooms.slice(0, 4).map((room, i) => (
            <Box key={room._id}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    alt={room?.title}
                    src={room?.images[0]}
                    variant="rounded"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={room?.title}
                  secondary={`Added: ${moment(room?.createdAt).fromNow()}`}
                />
              </ListItem>
              {i !== 3 && <Divider variant="inset" />}
            </Box>
          ))}
        </List>
      </Box>
    </Paper> */}
  </Box>
  )
}

export default Main;