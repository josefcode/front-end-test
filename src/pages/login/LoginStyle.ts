import { styled } from "@mui/material";

export const MainContainer = styled("main")(
  ({ theme: { palette, breakpoints } }) => ({
    height: "100vh",
    "& .triangle": {
      width: "36%",
      backgroundColor: palette.primary.main,
      height: "100%",
      position: "absolute",
      zIndex: "-1",
    },
    //mobile -size
    [breakpoints.down("sm")]: {
      "& .triangle": {
        display: "none",
      },
    },
  }),
);

export const SectionContainer = styled("section")(
  ({ theme: { palette, breakpoints } }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    img: {
      width: "200px",
    },
    "& .login__root": {
      width: "1108px",
      height: "fit-content",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      display: "flex",
    },

    "& .login__logoSide": {
      width: "320px",
      backgroundColor: palette.primary.main,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    //mobile -size
    [breakpoints.down("sm")]: {
      "& .login__root": {
        width: "100%",
      },
      "& .login__logoSide": {
        display: "none",
      },
    },
  }),
);

export const FormContainer = styled("form")(
  ({ theme: { palette, breakpoints } }) => ({
    width: "718px",
    paddingBlockStart: "1rem",
    fontWeight: "bold",

    "& .login__helpLink": {
      display: "flex",
      justifyContent: "end",
      paddingInlineEnd: "1rem",
      textDecoration: "none",
      color: "black",

      "&:hover": {
        color: palette.primary.main,
      },
    },

    "& .login__header": {
      fontWeight: 900,
      fontSize: "18px",
      paddingBlockStart: "6rem",
      paddingBlockEnd: "2rem",
      textAlign: "center",
    },

    "& .login__inputContainer": {
      paddingInline: "6rem",
    },

    "& .login__label": {
      display: "block",
      marginBlock: "1rem",
    },

    "& .login__forgetPassword": {
      display: "block",
      textAlign: "end",
      paddingBlock: "0.5rem",
      textDecoration: "none",
      color: "black",

      "&:hover": {
        color: palette.primary.main,
      },
    },
    "& .form__button": {
      backgroundColor: palette.primary.main,
      width: "100%",
      height: "55px",
      border: "unset",
      borderRadius: "3px",
      marginBlockStart: "4rem",
      marginBlockEnd: "6rem",
      cursor: "pointer",
      fontWeight: 700,
      fontSize: "16px",

      "&:hover": {
        backgroundColor: palette.primary.dark,
        color: "white",
      },
    },
    //mobile -size
    [breakpoints.down("sm")]: {
      width: "100%",
      paddingInline: "1rem",
      "& .MuiFormControl-root": {
        margin: "unset",
      },
      "& .login__inputContainer": {
        padding: "unset",
      },
    },
  }),
);
