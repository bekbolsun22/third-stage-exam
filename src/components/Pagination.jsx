/* eslint-disable no-unused-vars */
import React from 'react'
import { Box, Button, styled, Typography } from '@mui/material'

const Pagination = ({ info, isLoading }) => {
   return (
      <PaginationBox>
         <Button
            variant="outlined"
            // disabled={!'when?'}
            // onClick={}
         >
            Prev
         </Button>
         <Typography variant="h6" color="blue">
            Номер страницы?
         </Typography>
         <Button
            variant="outlined"
            // disabled={!'when'}
            // onClick={}
         >
            Next
         </Button>
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
