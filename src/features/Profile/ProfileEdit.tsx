import {ProfileContainer} from "features/Profile/StyledProfile.tsx";
import {useAppDispatch, useAppSelector} from "hooks/reduxHooks.ts";
import {useEffect} from "react";
import {fetchProfileData, selectProfileData} from "features/Profile/profileSlice.tsx";
import Info from "components/Info/Info.tsx";
import {useTranslation} from "react-i18next";
import ProfileForm from "features/Profile/ProfileForm.tsx";

const ProfileEdit = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const profileData = useAppSelector(state =>
    selectProfileData()(state)
  );

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const name = profileData?.name ?? profileData?.userData?.email;

  return <ProfileContainer>
    <Info
      title={t("profile.greeting", { name })}
      content={t("profile.info")}
    />
    <ProfileForm />
  </ProfileContainer>
}

export default ProfileEdit;