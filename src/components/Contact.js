import "./Contact.css"

import * as React from 'react';

import { Button, Typography } from '@mui/material';

import Grid from '@mui/material/Grid';

function Contact() {
    return (
      <div className="Contact">

  <Grid container spacing={1} sx={{
        backgroundColor: 'inherit',
        alignItems:"start"
      }}>
        <Grid item xs={12} md={12}>
        <p className='about-text'>If any of my <a className="project-link" href='#projects'>
        &nbsp;projects
      </a> interests you? <br></br>
       or thinking of potentially <a className="experience-link" href='#experience'>
        &nbsp;working
      </a> together?</p>
        </Grid>
        <Grid item xs={12} md={12}>
        <p className='about-text'>I'd be glad to have a chat! <br></br>
        Shoot me a mail at <a className="contact" href='mailto: nzixuan@gmail.com'>
        &nbsp;nzixuan@gmail.com
      </a> 
      <br></br>
       You can also connect to me on <a className="linkedin" href='https://www.linkedin.com/in/nzixuan'>
        &nbsp;LinkedIn
      </a> or take a look at my <a className="link" href='/static/Resume_Current.pdf'>
        &nbsp;full resume
      </a>!
      </p>
        </Grid>
    </Grid>
      </div>
    );
  }
  
  export default Contact;