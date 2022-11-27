import { Box } from '@material-ui/core'
import { useState } from 'react'
import { GenerateModal } from './Class Components/Modal'
import { Popperr } from './Class Components/Popper'



function App() {
  const [count, setCount] = useState(0)

  return (
   <Box>
    <GenerateModal/>
    <Popperr/>
   </Box>
  )
}

export default App
