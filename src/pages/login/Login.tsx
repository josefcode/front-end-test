import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import { FormControl, TextField } from "@mui/material";
import { FormContainer, MainContainer, SectionContainer } from "./LoginStyle";
import logo from "../../assets/logo.png";
import { LoginProps, FormErrors, FormData } from "./type";

const Login = ({ resetPassword }: LoginProps) => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({
    email: false,
    password: false,
  });
  const { email, password } = formData;
  const emailValidationRegex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  const emailValid = email.match(emailValidationRegex);
  const passwordValid = password.length >= 6;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({ email: !emailValid, password: !passwordValid });

    if (emailValid && passwordValid) {
      if (email === "test@gmail.com" && password === "test123") {
        alert("Login successful");
        setFormData({ email: "", password: "" });
        setErrors({ email: false, password: false });
      } else {
        alert("Login failed. Please use valid credentials.");
      }
    }
  };

  const handleResetPassword = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (emailValid) {
      alert("A reset link has been sent to your email.");
      setFormData({ email: "", password: "" });
      setErrors((prev) => ({ ...prev, email: false }));
    }

    return setErrors((prev) => ({ ...prev, email: !emailValid }));
  };

  return (
    <MainContainer>
      <div className="triangle"></div>
      <SectionContainer>
        <div className="login__root">
          <div className="login__logoSide">
            <figure>
              <img src={logo} alt="Company Logo" />
            </figure>
            <p>Car Cleaning Company</p>
            <p>India’s First Waterless</p>
          </div>

          <FormContainer
            onSubmit={resetPassword ? handleResetPassword : handleSubmit}
          >
            {resetPassword ? null : (
              <Link className="login__helpLink" to="help">
                Need Help
              </Link>
            )}

            <div className="login__inputContainer">
              <p className="login__header">
                {resetPassword ? "Reset Password" : "Login"}
              </p>
              <FormControl fullWidth sx={{ m: 1 }}>
                <label className="login__label">
                  {resetPassword ? "Email for password reset" : "Email"}
                </label>
                <TextField
                  error={errors.email}
                  id="email"
                  name="email"
                  placeholder="joe@email.com"
                  value={email}
                  variant="outlined"
                  helperText={errors.email ? "Add valid email." : null}
                  required
                  onChange={handleOnChange}
                />
              </FormControl>
              {!resetPassword && (
                <FormControl fullWidth sx={{ m: 1 }}>
                  <label className="login__label">Password</label>
                  <TextField
                    error={errors.password}
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    variant="outlined"
                    value={password}
                    helperText={
                      errors.password
                        ? "Password should be at least 6 characters."
                        : null
                    }
                    onChange={handleOnChange}
                    required
                  />
                </FormControl>
              )}
              {!resetPassword && (
                <Link className="login__forgetPassword" to="forget-password">
                  Forgot Password?
                </Link>
              )}
              <input
                className="form__button"
                type="submit"
                value={resetPassword ? "Reset Password" : "Login"}
              />
            </div>
          </FormContainer>
        </div>
      </SectionContainer>
    </MainContainer>
  );
};

export default Login;
