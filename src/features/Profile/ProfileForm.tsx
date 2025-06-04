import {StyledForm, ThemeContainer} from "features/Profile/StyledProfile.tsx";
import {useAppDispatch, useAppSelector} from "hooks/reduxHooks.ts";
import {FormEvent, useEffect, useState} from "react";
import {editData, fetchProfileData, selectProfileData} from "features/Profile/profileSlice.tsx";
import {Box, Button, CircularProgress, TextField, Typography} from "@mui/material";
import ProfileAvatar from "features/Profile/ProfileAvatar.tsx";
import ThemeToggle, {ThemeToggleMode} from "components/ThemeToggle/ThemeToggle.tsx";
import {useTranslation} from "react-i18next";
import {ThemeMode} from "models/Theme.ts";

const ProfileForm = () => {
  const dispatch = useAppDispatch();
  const {t} = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    theme: ThemeMode.LIGHT,
    avatar: ""
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");


  const profileData = useAppSelector(state =>
    selectProfileData()(state)
  );

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const name = profileData?.name ?? profileData?.userData?.email;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");

    dispatch(editData(formData))
  };

  return <StyledForm>
      <Box component="form" onSubmit={handleSubmit}>
        <ProfileAvatar/>

        <TextField
          label="Imię"
          name="name"
          fullWidth
          value={formData.name}
          onChange={handleChange}
        />

        <ThemeContainer>
          <Typography> {t("theme_toggle.title")} </Typography>
          <ThemeToggle toggleMode={ThemeToggleMode.TEXT}/>
        </ThemeContainer>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading || formData.name.trim() === ""}
          fullWidth
          sx={{ mt: 2 }}
        >
          {loading ? <CircularProgress size={24} /> : "Zapisz zmiany"}
        </Button>

        {successMessage && (
          <Typography
            variant="body1"
            color="success.main"
            sx={{ mt: 2, textAlign: "center" }}
          >
            {successMessage}
          </Typography>
        )}
      </Box>
    </StyledForm>
}

export default ProfileForm;