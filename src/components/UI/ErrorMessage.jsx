import { Typography } from '@mui/material'
import React from 'react'

const ErrorMessage = ({ message }) => {
   return (
      <Typography variant="h4" color="red">
         {message}
      </Typography>
   )
}

export default ErrorMessage
