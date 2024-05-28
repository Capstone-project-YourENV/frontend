import { Avatar, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

function CardUser(props) {
  const { name, image, headline } = props;
  return (
    <Card
      sx={{
        borderRadius: '12px',
      }}
      className="w-full lg:w-[256px]"
    >
      <Avatar
        loading="lazy"
        sx={{
          width: 50,
          height: 50,
          margin: 'auto',
          marginTop: '24px',
        }}
        src={image}
        alt={`Profile picture of ${name}`}
      />
      <CardContent>
        <Grid gap="6px" display="flex" flexDirection="column">
          <Typography fontWeight="bold" align="center">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {headline}
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
}

CardUser.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  headline: PropTypes.string,
};

CardUser.defaultProps = {
  headline: null,
};

export default CardUser;
