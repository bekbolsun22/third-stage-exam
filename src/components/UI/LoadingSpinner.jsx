import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const LoadingSpinner = () => {
   return (
      <Box sx={{ display: 'grid', placeItems: 'center' }}>
         <CircularProgress size={100} />
      </Box>
   )
}

export default LoadingSpinner
