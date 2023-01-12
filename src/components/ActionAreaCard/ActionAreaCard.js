import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import photo from './Videographer-pana.png'

export default function ActionAreaCard({ artistName }) {
  return (
    <div className='card'>
    <Card sx={{ minWidth: 250, maxWidth: 250,margin: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={photo}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center' }}>
          { artistName }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}