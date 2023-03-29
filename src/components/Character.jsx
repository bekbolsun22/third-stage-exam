import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'

const Character = ({ image, name, gender, status, episodesCount = 0 }) => {
   return (
      <Card sx={{ width: 250 }}>
         <CardMedia sx={{ height: 200 }} image={image} />
         <CardContent>
            <Typography
               gutterBottom
               variant="h5"
               sx={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
               }}
            >
               {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
               Gender: {gender}
            </Typography>
            <Typography variant="body2" color="text.secondary">
               Status: {status}
            </Typography>
            <Typography variant="body2" color="text.secondary">
               Episodes: {episodesCount}
            </Typography>
         </CardContent>
      </Card>
   )
}

export default Character
