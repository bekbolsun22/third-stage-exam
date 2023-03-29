import { Box } from '@mui/material'
import { ReactComponent as Empty } from '../../assets/empty.svg'

const EmptyIcon = () => {
   return (
      <Box sx={{ display: 'flex' }}>
         <Empty />
      </Box>
   )
}

export default EmptyIcon
