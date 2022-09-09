import * as React from 'react';

import { Grid } from '@mui/material';
import ProjectTemplate from './ProjectTemplate';
import { projects } from '../data/projects';

function Projects() {
    return (
    <Grid container spacing={0} sx={{
        width: "100%",
        backgroundColor: 'inherit',
        alignItems:"center", 
        justifyContent:"center",
        pl: 4,
        pr:4
      }}>
    {projects.map((project, i) => <Grid item key={i+"p"} xs={12} md={11} sx={{
        alignItems:"center", 
        justifyContent:"center",
        pl:0
      }}> <ProjectTemplate  source={project}></ProjectTemplate></Grid>)}
         </Grid>)
}

export default Projects;