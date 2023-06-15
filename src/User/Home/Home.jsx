
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Box, CircularProgress } from '@mui/material';
import { baseUrl } from '../../Global/config'
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate=useNavigate();
  const [blogs, setBlogs] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const getBlogs = async () => {
    let res = await axios.get(`${baseUrl}Blog`);
    setBlogs(res.data);
    setLoading(false);
  };
  React.useEffect(() => {
    getBlogs();

  }, []);
  return (
    <Box sx={{ width: "80%", margin: " 0 auto" }}>
      <Typography variant="h3" sx={{ my: 3, textAlign: "center" }}>
        Blogs
      </Typography>
      {loading ?
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box> :
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center" }}>
          {
            blogs.map(blog => {
              return (
                <Card sx={{ maxWidth: 345, margin: '10px' }}>
                  <CardMedia
                    sx={{ height: 140, width: 345 }}
                    image={blog.image}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom sx={{ color: "#aaa", fontSize: '16' }}>
                      @{blog.author}
                      {blog.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {blog.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
              
                    <Button size="small" onClick={()=> navigate( `/blog/${blog.id}`)}>Learn More</Button>
                  </CardActions>
                </Card>
              )
            })
          }
        </Box>
      }

    </Box>
  );
}
