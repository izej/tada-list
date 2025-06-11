import {ProfileContainer} from "features/Profile/StyledProfile.tsx";
import {useAppDispatch, useAppSelector} from "hooks/reduxHooks.ts";
import {useEffect, useRef} from "react";
import {fetchProfileData, selectProfileData} from "features/Profile/profileSlice.tsx";
import Info from "components/Info/Info.tsx";
import {useTranslation} from "react-i18next";
import ProfileForm from "features/Profile/ProfileForm.tsx";

const ProfileEdit = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const dataFetchedRef = useRef(false);

  const profileData = useAppSelector(state =>
    selectProfileData()(state)
  );

  useEffect(() => {
    if (!dataFetchedRef.current) {
      dataFetchedRef.current = true;
      dispatch(fetchProfileData());
    }
  }, []);

  const name = profileData?.name ?? t("profile.defaultName");

  return <ProfileContainer>
    <Info
      title={t("profile.greeting", { name })}
      content={t("profile.info")}
    />
    <ProfileForm />
  </ProfileContainer>
}

export default ProfileEdit;
