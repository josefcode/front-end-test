
import { FormControl, TextField } from "@mui/material"
import { FormContainer, MainContainer, SectionContainer, } from "./LoginStyle"
import { useState } from "react"
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'


const Login = () => {
    const [error] = useState(false)
  return (
    <MainContainer>
    <div className="triangle"></div>
    <SectionContainer>
   
        <div className="login__root">
        <div className="login__logoSide">
            <figure>
                <img src= {logo} alt="" />
            </figure>

            <p>car cleaning company</p>
            <p>India’s first waterless</p>
        </div>
        
        <FormContainer>
        <Link className = "login__helpLink" to = 'help'>need help</Link>
            <div className = "login__inputContainer">
            
                <p className = "login__header">login</p>
                <FormControl fullWidth sx={{ m: 1 }}>
                <label className = "login__label">Email</label>

                <TextField 
                error = {error}
                id="outlined-basic" 
                placeholder="joe@email.com"
                variant="outlined" 
                helperText={ error ? "Incorrect email." : null}
                required
                />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }}>
                <label className = "login__label">Password</label>
                <TextField 
                error = {error}
                id="outlined-basic" 
                placeholder="password"
                variant="outlined"
                helperText={ error ? "Incorrect password." : null}
                required
                 />
                 </FormControl>
                <Link className = "login__forgetPassword"  to = "forget-password">forget password?</Link>
                <input className="form__button" type="submit" value = "login"/>
            </div>
        </FormContainer>
        </div>
    </SectionContainer>
    </MainContainer>
  )
}


export default Login