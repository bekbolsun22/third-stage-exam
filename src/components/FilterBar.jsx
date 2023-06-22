import {
   FormControl,
   FormControlLabel,
   FormLabel,
   Radio,
   RadioGroup,
   Typography,
   styled,
} from '@mui/material'
import React from 'react'

import { GENDER_VALUES, STATUS_VALUES } from '../utils/constants/general'

const FilterBar = () => {
   return (
      <>
         <Typography variant="h5" sx={{ margin: '10px 0 5px' }}>
            Filter by:
         </Typography>
         <Container>
            <FormControl className="form">
               <FormLabel>Gender</FormLabel>
               <StyledRadioGroup
               // value=""
               // onChange={() => {}}
               >
                  {GENDER_VALUES.map((gender) => (
                     <FormControlLabel
                        key={gender.value}
                        value={gender.value}
                        control={<Radio />}
                        label={gender.label}
                     />
                  ))}
               </StyledRadioGroup>
            </FormControl>
            <FormControl className="form">
               <FormLabel>Status</FormLabel>
               <StyledRadioGroup
               // value=""
               // onChange={() => {}}
               >
                  {STATUS_VALUES.map((gender) => (
                     <FormControlLabel
                        key={gender.value}
                        value={gender.value}
                        control={<Radio />}
                        label={gender.label}
                     />
                  ))}
               </StyledRadioGroup>
            </FormControl>
         </Container>
      </>
   )
}

const StyledRadioGroup = styled(RadioGroup)(() => ({
   flexDirection: 'row',
}))

const Container = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   gap: '1rem',
   '& > .form': {
      border: '1px solid #d4e1dd',
      padding: '0.5rem 1rem',
      borderRadius: '1rem',
      flex: '1',
   },
}))

export default FilterBar
