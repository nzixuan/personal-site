import * as React from 'react';

import { Grid } from '@mui/material';
import ResumeTemplate from './ResumeTemplate';
import { experiences } from '../data/experiences';

function Experience() {
    return (
    <Grid container spacing={2} sx={{
        width: "100%",
        backgroundColor: 'inherit',
        alignItems:"center", 
        justifyContent:"center",
        padding: 4
      }}>
               

    {experiences.map((experience, i) => <Grid item key={i+"x"} xs={12} md={9} sx={{
        alignItems:"center", 
        justifyContent:"center",
      }}> <ResumeTemplate  source={experience}></ResumeTemplate></Grid>)}
         </Grid>)
}

export default Experience;