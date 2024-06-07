import React from 'react';
import { Card, CardContent, Typography, Box, Avatar, Grid, Hidden } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';

const Header = ({ company }) => {
  return (
    <Card sx={{ mb: 4, display: 'flex', alignItems: 'center', padding: 2 }}>
      <Grid container alignItems="center">
        <Grid item xs={12} md={2}>
          <Avatar
            src={company.logo}
            alt={company.name}
            sx={{ width: 150, height: 150 }} 
          />
        </Grid>
        <Grid item xs={12} md={10}>
          <CardContent>
            <Typography variant="h5" style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 'bold' }}>{company.name}</Typography>
            <Typography variant="subtitle1" style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 'bold' }}>{company.title}</Typography>
            <Box mt={2}>
              <Grid container spacing={1} alignItems="center">
                <Hidden smDown>
                  <Grid item xs={6}>
                    <Grid container spacing={1} alignItems="center">
                      <Grid item>
                        <EmailIcon />
                      </Grid>
                      <Grid item>
                        <Typography style={{ fontFamily: 'Plus Jakarta Sans' }}>{company.email}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Hidden>
                <Hidden mdUp>
                  <Grid item xs={12}>
                    <Grid container spacing={1} alignItems="center">
                      <Grid item>
                        <EmailIcon />
                      </Grid>
                      <Grid item>
                        <Typography style={{ fontFamily: 'Plus Jakarta Sans' }}>{company.email}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Hidden>
                <Hidden smDown>
                  <Grid item xs={6}>
                    <Grid container spacing={1} alignItems="center" >
                      <Grid item>
                        <PhoneIcon />
                      </Grid>
                      <Grid item>
                        <Typography style={{ fontFamily: 'Plus Jakarta Sans' }}>{company.phone}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Hidden>
                <Hidden mdUp>
                  <Grid item xs={12}>
                    <Grid container spacing={1} alignItems="center" >
                      <Grid item>
                        <PhoneIcon />
                      </Grid>
                      <Grid item>
                        <Typography style={{ fontFamily: 'Plus Jakarta Sans' }}>{company.phone}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Hidden>
              </Grid>
              <Grid container spacing={1} alignItems="center" mt={1}>
                <Hidden smDown>
                  <Grid item xs={6}>
                    <Grid container spacing={1} alignItems="center">
                      <Grid item>
                        <LocationOnIcon />
                      </Grid>
                      <Grid item>
                        <Typography style={{ fontFamily: 'Plus Jakarta Sans' }}>{company.location}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Hidden>
                <Hidden mdUp>
                  <Grid item xs={12}>
                    <Grid container spacing={1} alignItems="center">
                      <Grid item>
                        <LocationOnIcon />
                      </Grid>
                      <Grid item>
                        <Typography style={{ fontFamily: 'Plus Jakarta Sans' }}>{company.location}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Hidden>
                <Hidden smDown>
                  <Grid item xs={6}>
                    <Grid container spacing={1} alignItems="center" >
                      <Grid item>
                        <EventIcon />
                      </Grid>
                      <Grid item>
                        <Typography style={{ fontFamily: 'Plus Jakarta Sans' }}>{company.events} Event</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Hidden>
                <Hidden mdUp>
                  <Grid item xs={12}>
                    <Grid container spacing={1} alignItems="center" >
                      <Grid item>
                        <EventIcon />
                      </Grid>
                      <Grid item>
                        <Typography style={{ fontFamily: 'Plus Jakarta Sans' }}>{company.events} Event</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Hidden>
              </Grid>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Header;
