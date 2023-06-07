import React from 'react';
import {
    Card, CardHeader, CardMedia, CardContent, CardActions,
    Typography, Avatar} from '@mui/material';
  import IconButton from '@mui/material/IconButton';
  import Checkbox from '@mui/material/Checkbox';
  import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
  import Favorite from '@mui/icons-material/Favorite';
  import ShareIcon from '@mui/icons-material/Share';
  import MoreVertIcon from '@mui/icons-material/MoreVert';

const Post = () => {
  return (
    <>
       <Card sx={{margin: 5}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="John Doe"
          subheader="September 14, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://source.unsplash.com/user/wsanter"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          <Checkbox  icon={<FavoriteBorder sx={{color: "#f50057"}} />} checkedIcon={<Favorite sx={{color: "#f50057"}} />} />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  )
}

export default Post
