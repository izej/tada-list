import {StyledForm, ThemeContainer} from "features/Profile/StyledProfile.tsx";
import {useAppDispatch, useAppSelector} from "hooks/reduxHooks.ts";
import {FormEvent, useEffect, useState} from "react";
import {editData, fetchProfileData, selectProfileData} from "features/Profile/profileSlice.tsx";
import {Box, Button, CircularProgress, TextField, Typography} from "@mui/material";
import ProfileAvatar from "features/Profile/ProfileAvatar.tsx";
import ThemeToggle, {ThemeToggleMode} from "components/ThemeToggle/ThemeToggle.tsx";
import {useTranslation} from "react-i18next";
import {ThemeMode} from "models/Theme.ts";
import {useThemeMode} from "providers/ThemeModeContext.tsx";

const ProfileForm = () => {
  const dispatch = useAppDispatch();
  const {t} = useTranslation();
  const {toggleColorMode, mode: currentTheme} = useThemeMode();

  const profileData = useAppSelector(state =>
    selectProfileData()(state)
  );

  const [formData, setFormData] = useState({
    name: "",
    theme: ThemeMode.LIGHT,
    avatar: ""
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const [initialFormData, setInitialFormData] = useState({
    name: "",
    theme: ThemeMode.LIGHT,
    avatar: ""
  });

  useEffect(() => {
    if (profileData) {
      const newFormData = {
        name: profileData.name || profileData?.userData?.email || "",
        theme: profileData.themeMode || ThemeMode.LIGHT,
        avatar: profileData.avatar || ""
      };
      setFormData(newFormData);
      setInitialFormData(newFormData);
    }
  }, [profileData]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleThemeChange = (theme: ThemeMode) => {
    setFormData((prev) => ({
      ...prev,
      theme,
    }));

    // Apply theme change immediately if it's different from current theme
    if (theme !== currentTheme) {
      toggleColorMode();
    }
  };

  const handleAvatarChange = (avatar: string) => {
    setFormData((prev) => ({
      ...prev,
      avatar,
    }));
  };

  const hasChanges = () => {
    return (
      formData.name !== initialFormData.name ||
      formData.theme !== initialFormData.theme ||
      formData.avatar !== initialFormData.avatar
    );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");

    dispatch(editData(formData))
      .unwrap()
      .then(() => {
        setInitialFormData(formData);
      })
      .catch((error) => {
        console.error("Failed to save changes:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return <StyledForm>
      <Box component="form" onSubmit={handleSubmit}>
        <ProfileAvatar
          value={formData.avatar}
          onChange={handleAvatarChange}
        />

        <TextField
          label={t("profile.edit.name")}
          name="name"
          fullWidth
          value={formData.name}
          onChange={handleChange}
        />

        <ThemeContainer>
          <Typography> {t("theme_toggle.title")} </Typography>
          <ThemeToggle 
            toggleMode={ThemeToggleMode.TEXT}
            value={formData.theme}
            onChange={handleThemeChange}
          />
        </ThemeContainer>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading || !hasChanges()}
          fullWidth
          sx={{ mt: 2 }}
        >
          {loading ? <CircularProgress size={24} /> : t("profile.edit.cta")}
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
