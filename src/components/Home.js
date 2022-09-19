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
      Hi! I am <a className="home-link">&nbsp;Zi Xuan
      </a>, a Year 3  <a className="education-link" href='#education'>&nbsp;Computer Science
      </a> student with a minor in Psychology, currently studying at NUS. I enjoy learning and equipping myself with a wide range of <a className="experience-link" href='#experience'>&nbsp;skills
      </a>.
      <br></br>
      <br></br>
      Right now, I am learning more about software engineering and its applications to fields in healthtech and fintech. I am also
      dabbling with machine learning and artificial intelligence.
      <br></br>
      <br></br>
      Outside of computing, I am also passionate about playing sports, such as rock climbing and frisbee.
      Do feel free to check out some of my <a className="project-link" href='#projects'>
        &nbsp;projects
      </a> and pop me an <a className="contact" href='#contact'>
        &nbsp;email
      </a> for any queries!
    </p>
  </Grid>
</Grid> 

      </div>
    );
  }
  
  export default Home;