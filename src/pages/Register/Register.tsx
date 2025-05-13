import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button, TextField, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import {BottomImage, BottomImageWrapper, AuthFormContainer, StyledAuthForm} from "../../styles/StyledAuth.tsx";
import {useRegister} from "../../hooks/useAuth.tsx";
import {useNavigate} from "react-router-dom";

const RegisterForm = () => {
  const {t} = useTranslation();
  const registration = useRegister();
  const navigate = useNavigate();

  const minLength = 6;

  const registerSchema = z
    .object({
      email: z.string().email(t("validation.register.email")),
      password: z.string().min(minLength, t("validation.register.password_min_length", {count: minLength})),
      confirmPassword: z.string()
    })
    .refine(data => data.password === data.confirmPassword, {
      message: t("validation.register.passwords_must_match"),
      path: ["confirmPassword"]
    });

  type RegisterFormData = z.infer<typeof registerSchema>;

  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting}
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = (data: RegisterFormData) => {
    registration.mutate(data, {
      onSuccess: (data) => {
        console.log('Zarejestrowano:', data);
        navigate("/login");

      },
      onError: (error) => {
        console.error('Błąd:', error);
      },
    });
  };

  return (<>
      <BottomImageWrapper>
        <BottomImage src="Tada.png" alt="Tada!"/>
      </BottomImageWrapper>

      <AuthFormContainer>
        <StyledAuthForm component="form" onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h5">{t("register.title")}</Typography>

          <TextField
            label={t("register.form.email")}
            type="email"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            fullWidth
          />

          <TextField
            label={t("register.form.password")}
            type="password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            fullWidth
          />

          <TextField
            label={t("register.form.confirm_password")}
            type="password"
            {...register("confirmPassword")}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
            fullWidth
          />

          <Button type="submit" variant="contained" disabled={isSubmitting} fullWidth>
            {t("register.form.cta")}
          </Button>

          <Typography>
            {t("register.redirectInfo")}
            <Button variant={"text"} onClick={() => navigate("/login")}>
              {t("register.redirectCta")}
            </Button>
          </Typography>
        </StyledAuthForm>
      </AuthFormContainer>
    </>
  );
};

export default RegisterForm;
