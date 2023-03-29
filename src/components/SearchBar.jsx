import { TextField, Typography } from '@mui/material'
import React from 'react'

const SearchBar = () => {
   return (
      <>
         <Typography variant="h5" sx={{ marginBottom: '5px' }}>
            Search character:
         </Typography>
         <TextField
            fullWidth
            placeholder="Find character by name"
            // value={}
            // onChange={() => {}}
         />
      </>
   )
}

export default SearchBar
