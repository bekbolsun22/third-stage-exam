/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Box, Button, styled, Typography } from '@mui/material'

const Pagination = () => {
   const [pageIndex, setPageIndex] = useState(1)

   return (
      <PaginationBox>
         <Button variant="outlined">Prev</Button>
         <Typography variant="h6" color="blue">
            {pageIndex}
         </Typography>
         <Button variant="outlined">Next</Button>
      </PaginationBox>
   )
}

const PaginationBox = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   padding: '20px 0',
   gap: '15px',
}))

export default Pagination
