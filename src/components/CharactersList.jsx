import React from 'react'
import { Box, styled } from '@mui/material'
import CharacterItem from './CharacterItem'

const CharactersList = ({ characters = [] }) => {
   return (
      <StyledBox>
         {characters.map((character) => {
            // here you need to pass necessary props to the <Character />
            return <CharacterItem {...character} key={character.id} />
         })}
      </StyledBox>
   )
}

const StyledBox = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   flexWrap: 'wrap',
   justifyContent: 'space-between',
   gap: '10px',
   marginTop: '10px',
}))

export default CharactersList
