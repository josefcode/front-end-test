import { styled } from "@mui/material";


export const Root = styled('main')(({theme: {palette}}) => ({
        height: '100vh',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '& .form__button': {
            backgroundColor: palette.primary.main,
            width: '100%',
            height: '55px',
            border: 'unset',
            borderRadius: '3px',
            marginBlockStart: '6rem',
            cursor: 'pointer',
            fontWeight: 700,
            fontSize: '16px',
    
            '&:hover': {
                backgroundColor: palette.primary.dark,
                color: 'white'
            }
        },

        '& .login__label': {
            display: 'block',
            marginBlock: '1rem'
        },
    
     
})) 