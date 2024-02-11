export type LoginProps = {
  resetPassword?: boolean;
};

export type FormData = {
  email: string;
  password: string;
};

export type FormErrors = {
  email: boolean;
  password: boolean;
};
