import * as React from 'react';

import { Grid } from '@mui/material';
import ResumeTemplate from './ResumeTemplate';
import { educations } from '../data/educations';

function Education() {
    return (
    <Grid container spacing={2} sx={{
        width: "100%",
        backgroundColor: 'inherit',
        alignItems:"center", 
        justifyContent:"center",
        padding: 4
      }}>
               

    {educations.map((education, i) => <Grid item key={i+"e"} xs={12} md={9} sx={{
        alignItems:"center", 
        justifyContent:"center",
      }}> <ResumeTemplate source={education}></ResumeTemplate></Grid>)}
         </Grid>)
}

export default Education;