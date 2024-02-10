import { styled } from "@mui/material"


export const MainContainer = styled('main')(({theme: {palette}}) => ({
    height: '100vh', // Set height to 100vh for full viewport height
    '& .triangle': {
        width: '44%',
        backgroundColor: palette.primary.main,
        height: '100%', // Adjust height to 100% to fill the container
        position: 'absolute',
        zIndex: '-1'
     }
}))



export const SectionContainer = styled('section')(({theme: {palette}}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    img: {
      width: '200px'
    },
    '& .login__root': {
    width: '1108px',
    height: '833px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    display: 'flex',
    },

    '& .login__logoSide': {
        width: '390px',
        flex: 1,
        backgroundColor: palette.primary.main,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
}))


export const FormContainer = styled('form')(({theme: {palette}}) => ({
    width: '718px',
    paddingBlockStart: '1rem',
    fontWeight: 'bold',

    '& .login__helpLink': {
       display: 'flex',
       justifyContent: 'end',
       paddingInlineEnd: '1rem',
       textDecoration: 'none',
       color: 'black',
  
       '&:hover': {
         color: palette.primary.main
       }

    },

    '& .login__header': {
        fontWeight: 900,
        fontSize: '18px',
        paddingBlockStart: '10rem',
        paddingBlockEnd: '5rem',
        textAlign: 'center',
     
    },

    '& .login__inputContainer': {
        paddingInline: '6rem'
    },

    '& .login__label': {
        display: 'block',
        marginBlock: '1rem'
    },

    '& .login__forgetPassword': {
    display: 'block',
     textAlign: 'end',
     paddingBlock: '0.5rem',
     textDecoration: 'none',
     color: 'black',

     '&:hover': {
       color: palette.primary.main
     }
    },
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
    }
}))
