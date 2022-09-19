import * as React from 'react';

import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import ImageSwipper from './ImageSwipper';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';

function ProjectTemplate(props) {
    const source = props.source 
    return(
        <Card variant="" sx={{
            borderColor: "#DCDCDC",
            width: "100%",
            minHeight: 300,
            p:0
        }}>
    <Grid container spacing={2} sx={{
        backgroundColor: 'inherit',
        alignItems:"center", 
      }}>
        <Grid item xs={12} md={6}>
        <ImageSwipper images={source.photos}></ImageSwipper>
          </Grid>
          <Grid item xs={0} md={1} sx={{alignItems:"center"}}>
          </Grid>
        <Grid item xs={12} md={4} sx={{alignItems:"center"}}>
        <Typography sx={{fontSize:"1.25rem", fontWeight:"bold", pb:2, textAlign:"left", whiteSpace:"pre-line",
         color:"#60B1EC"}}>
            {source.title}
        </Typography>
        <Typography sx={{fontSize:"1.1rem", whiteSpace:"pre-line", textAlign:"justify"}}>
            {source.summary}
        </Typography>
        <Box sx={{ textAlign:"left"}}>
    {source.link ?
    <Link sx={{fontSize:"1.1rem", textAlign:"left",  color:"#60B1EC",textDecoration:"underline"}} 
     href={source.link.link}>
        {source.link.text}
    </Link>:null}
    </Box>
         </Grid>

          </Grid>
          </Card>
          )

}

export default ProjectTemplate;