/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react'
import {
   Box,
   Button,
   Container,
   FormControl,
   FormControlLabel,
   FormLabel,
   Radio,
   RadioGroup,
   styled,
   TextField,
   Typography,
} from '@mui/material'
import axios from 'axios'
import { GENDER_VALUES } from '../utils/constants/general'
import CharactersList from '../components/CharactersList'
import SearchBar from '../components/SearchBar'
import FilterBar from '../components/FilterBar'
import Pagination from '../components/Pagination'
import LoadingSpinner from '../components/UI/LoadingSpinner'

const CharactersPage = () => {
   return (
      <StyledContainer>
         <header>
            {/* FOR SEARCHING */}
            <SearchBar />
            {/* FOR FILTERING */}
            <FilterBar />
         </header>
         <main style={{ minHeight: '100%' }}>
            <LoadingSpinner />
            <CharactersList characters={[]} />
            <Pagination />
         </main>
      </StyledContainer>
   )
}

const StyledContainer = styled(Container)(() => ({
   padding: '10px 0',
}))

export default CharactersPage
