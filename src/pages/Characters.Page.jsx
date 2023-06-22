import React from 'react'
import { Container, styled } from '@mui/material'
import CharactersList from '../components/CharactersList'
import SearchBar from '../components/SearchBar'
import FilterBar from '../components/FilterBar'
import Pagination from '../components/Pagination'
import LoadingSpinner from '../components/UI/LoadingSpinner'
import EmptyIcon from '../components/UI/EmptyIcon'
// import { useDebounce } from 'use-debounce'
// import { SEARCH_PARAMS } from '../utils/constants/general'

// How to use hook "useDebounce"?
// const [debouncedValue] = useDebounce(value, 1000)

// How to use hook "useSearchParams"?
// const [searchParams, setSearchParams] = useSearchParams()
// searchParams.set("key", value) || searchParams.delete("key") || searchParams.get("key")
// setSearchParams(searchParams)

const CharactersPage = () => {
   return (
      <StyledContainer>
         <header>
            {/* FOR SEARCH */}
            <SearchBar />
            {/* FOR FILTER */}
            <FilterBar />
         </header>
         <main style={{ minHeight: '100%' }}>
            {/* Show loading spinner when fetching data */}
            <LoadingSpinner />
            {/* Show "EmptyIcon" if data is empty */}
            <EmptyIcon />
            {/* Render "CharactersList" if data is not empty */}
            <CharactersList />
            <Pagination />
         </main>
      </StyledContainer>
   )
}

const StyledContainer = styled(Container)(() => ({
   padding: '10px 0',
}))

export default CharactersPage
