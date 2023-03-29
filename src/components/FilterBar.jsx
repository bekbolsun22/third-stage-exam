import {
   FormControl,
   FormControlLabel,
   FormLabel,
   Radio,
   RadioGroup,
   Typography,
} from '@mui/material'
import React from 'react'
import { GENDER_VALUES } from '../utils/constants/general'

const FilterBar = () => {
   return (
      <>
         <Typography variant="h5" sx={{ margin: '10px 0 5px' }}>
            Filter by:
         </Typography>
         <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
               //   value={}
               //   onChange={() => {}}
               sx={{ flexDirection: 'row' }}
            >
               {GENDER_VALUES.map((gender) => (
                  <FormControlLabel
                     key={gender.value}
                     value={gender.value}
                     control={<Radio />}
                     label={gender.label}
                  />
               ))}
            </RadioGroup>
         </FormControl>
      </>
   )
}

export default FilterBar
