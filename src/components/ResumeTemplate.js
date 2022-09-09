import * as React from 'react';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

function ResumeTemplate(props) {
    const source = props.source 
    return(
        <Card variant="" sx={{
            borderColor: "#DCDCDC",
            width: "100%",
            minHeight: 300
        }}>
    <Grid container spacing={2} sx={{
        backgroundColor: 'inherit',
        alignItems:"start", 
        padding: 3
      }}>


        <Grid item xs={12} md={5}>
        <Typography sx={{fontSize:"1.25rem", fontWeight:"bold", textAlign:"left"}}>
            {source.title}
        </Typography>
        <Typography sx={{fontSize:"1.25rem", textAlign:"left", pb:4}}>
            {source.companyName}
        </Typography>
        <CardMedia
            component="img"
            sx={{ width: "90%", display: { sm: 'block' }}}
            // { sm: 'none', md: 'block' }
            image={source.photo}
            alt={source.companyName}
          />
          </Grid>
          <Grid item xs={12} md={7}>
        <Typography sx={{fontSize:"1.25rem", fontWeight:"bold", pb:2, textAlign:"right", whiteSpace:"pre-line"}}>
            {"\n"+source.dateRange}
        </Typography>
        <Typography sx={{fontSize:"1.1rem", whiteSpace:"pre-line", textAlign:"justify"}}>
            {source.summary}
        </Typography>
          </Grid>

          </Grid>
          </Card>
          )

}

export default ResumeTemplate;