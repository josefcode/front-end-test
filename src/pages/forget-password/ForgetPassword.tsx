import { Box, Container, FormControl, TextField } from "@mui/material"
import { Root } from "./forgetPasswordStyle"


export const ForgetPassword = () => {
  return (
    <Root>
         <Container maxWidth="md">
        <Box>
        <FormControl fullWidth sx={{ m: 1 }}>
                <label className = "login__label">Reset Password</label>
                <TextField
                id="resetPassword" 
                placeholder="resetPassword"
                variant="outlined"
                required
                 />
                 </FormControl>

                 <input className="form__button" type="submit" value = "submit"/>
        </Box>
        </Container>
    </Root>
  )
}


export default ForgetPassword