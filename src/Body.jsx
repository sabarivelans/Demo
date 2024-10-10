import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function B() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.deccanchronicle.com/dc-Cover-95o81hqe5m7dhk9v0v57c2rrf4-20190616112256.Medi.jpeg"
        title="Mitchell Starc"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Mitchell Starc
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          One and only GOAT bowler of this Generation
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="small"
          href="https://youtu.be/EmY_y4PoIt8?feature=shared" // Use a valid URL
          target="_blank"       // Open in a new tab
          rel="noopener noreferrer">
          YouTube
        </Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
