import {useForm} from "react-hook-form";
import {Button, TextField, Typography, Alert} from "@mui/material";
import {useTranslation} from "react-i18next";
import {
  BottomImage,
  BottomImageWrapper,
  AuthFormContainer,
  StyledAuthForm
} from "../../styles/StyledAuth.tsx";
import {useState} from "react";

const LoginForm = () => {
  const {t} = useTranslation();
  const [loginError, setLoginError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: {isSubmitting}
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (data: {email: string; password: string}) => {
    setLoginError(null);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message || t("validation.login.incorrect_data"));
      }

      const result = await response.json();
      console.log("Zalogowano:", result);
      // navigate("/dashboard");
    } catch (error: any) {
      setLoginError(error.message);
    }
  };

  return (
    <>
      <BottomImageWrapper>
        <BottomImage src="Tada.png" alt="Tada!" />
      </BottomImageWrapper>

      <AuthFormContainer>
        <StyledAuthForm component="form" onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h5">{t("login.title")}</Typography>

          {loginError && <Alert severity="error">{loginError}</Alert>}

          <TextField
            label={t("login.form.email")}
            type="email"
            {...register("email", {required: true})}
            fullWidth
            margin="normal"
          />

          <TextField
            label={t("login.form.password")}
            type="password"
            {...register("password", {required: true})}
            fullWidth
            margin="normal"
          />

          <Button type="submit" variant="contained" disabled={isSubmitting}>
            {t("login.form.cta")}
          </Button>
        </StyledAuthForm>
      </AuthFormContainer>
    </>
  );
};

export default LoginForm;
