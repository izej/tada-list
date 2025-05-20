import {useForm} from "react-hook-form";
import {Button, TextField, Typography, Alert} from "@mui/material";
import {useTranslation} from "react-i18next";
import {
  BottomImage,
  BottomImageWrapper,
  AuthFormContainer,
  StyledAuthForm
} from "styles/StyledAuth";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useLogin} from "hooks/useAuth";
import {useAuth} from "providers/AuthContext";
import axios from "axios";
import api from "api/apiConfig";

const LoginForm = () => {
  const {t} = useTranslation();
  const { mutate: login, isPending } = useLogin();
  const { setUser } = useAuth();
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
    const API_BASE = 'http://localhost:8080';

    login(data, {
      onSuccess: async (data) => {
        localStorage.setItem('token', data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
        api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

        const response = await axios.get(`${API_BASE}/api/v1/users/me`);
        const user = response.data;

        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/');
      },
      onError: (err) => {
        console.error('Błąd logowania', err);
      },
    });
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

          <Button type="submit" variant="contained" disabled={isSubmitting || isPending} fullWidth>
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
