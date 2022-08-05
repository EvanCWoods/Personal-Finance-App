import * as React from 'react';
import { Grid,
    Button,
    Box } from '@mui/material';

export default function Header () {
  return (
    <Box sx={{ flexGrow: 1, pt: "10px"}}>
      <Grid container spacing={1}>
        <Grid item xs={2}>
            Logo
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={2} sx={{display: "flex",alignItems: "center"}}>
            <Button sx={{borderRadius: "10px", backgroundColor: "white", py: 0}}>Sign Up</Button>
        </Grid>
        <Grid item xs={2}>
            <Button sx={{borderRadius: "10px", backgroundColor: "white", py: 0}}>Log In</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
