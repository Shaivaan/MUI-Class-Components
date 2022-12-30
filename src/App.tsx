import { Box,TextField,Button } from '@material-ui/core'
import { Form } from './Class Components/Formik'
import { Menuu } from './Class Components/Menu'
import { GenerateModal } from './Class Components/Modal'
import { Popperr } from './Class Components/Popper'
import  MultipleSelectCheckmarks  from './Class Components/Select'


function App() {
  
  return (
   <Box>
    {/* <GenerateModal/> */}
    {/* <Popperr/> */}
    {/* <Menuu/> */}
    
    {/* <Box  display={"flex"}>
      <Button style={{height:"40px"}} variant={'outlined'}>Hello</Button>
      <TextField size={'small'}  variant={'outlined'} placeholder={'Hello'}/>
    </Box> */}
   {/* <MultipleSelectCheckmarks/> */}
   {/* <input type="file" onChange={(e)=>{
      
   }}/> */}

   <Form/>
   </Box>
  )
}

export default App
