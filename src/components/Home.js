import "./Home.css"

import * as React from 'react';

import { Avatar, Typography } from '@mui/material';

import Grid from '@mui/material/Grid';

function Home() {
    return (
      <div className="Home">

  <Grid container spacing={2} sx={{
        height: "95vh",
        backgroundColor: 'inherit',
        alignItems:"center"
      }}>
          <Grid item xs={0} md={1}>
          </Grid>
  <Grid item xs={12} md={3}>
  <Avatar sx={{  width:{xs:"50%",md:"90%"}, aspectRatio:"1", height:"auto"}} alt="Ng Zi Xuan" src={"/static/photo.jpeg"}></Avatar>

  </Grid>
  <Grid item xs={12} md={6}>
    <p className='about-text'>
      Hi! I am Zi Xuan a Year 3 Computer Science Student currently studying at NUS. Leading w a couple of 
      <a className="project-link" href='#projects'>
        &nbsp;projects
      </a>
      I have done blahsabla lasmdlkms sdnlandnfk contact me
    </p>
  </Grid>
</Grid> 

      </div>
    );
  }
  
  export default Home;