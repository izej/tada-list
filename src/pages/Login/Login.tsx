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
import {useNavigate} from "react-router-dom";
import {useLogin} from "../../hooks/useAuth.tsx";

const LoginForm = () => {
  const {t} = useTranslation();
  const login = useLogin();
  const navigate = useNavigate();

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

  const onSubmit = async (data: { email: string; password: string }) => {
    setLoginError(null);

    try {
      login.mutate(data, {
        onSuccess: (data) => {
          console.log('Zalogowano:', data);
          navigate("/");

        },
        onError: (error) => {
          console.error('Błąd:', error);
        },
      });
    } catch (error: any) {
      setLoginError(error.message);
    }
  };

  return (
    <>
      <BottomImageWrapper>
        <BottomImage src="Tada.png" alt="Tada!"/>
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

          <Button type="submit" variant="contained" disabled={isSubmitting} fullWidth>
            {t("login.form.cta")}
          </Button>

          <Typography>
            {t("login.redirectInfo")}
            <Button variant={"text"} onClick={() => navigate("/register")}>
              {t("login.redirectCta")}
            </Button>
          </Typography>

        </StyledAuthForm>
      </AuthFormContainer>
    </>
  );
};

export default LoginForm;
