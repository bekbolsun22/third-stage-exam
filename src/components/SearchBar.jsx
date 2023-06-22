import { TextField, Typography } from '@mui/material'
import React from 'react'

const SearchBar = ({ searchTerm, onSearchTermChange = () => {} }) => {
   return (
      <>
         <Typography variant="h5" sx={{ marginBottom: '5px' }}>
            Search character:
         </Typography>
         <TextField
            fullWidth
            placeholder="Find character by name"
            value={searchTerm}
            onChange={onSearchTermChange}
         />
      </>
   )
}

export default SearchBar
