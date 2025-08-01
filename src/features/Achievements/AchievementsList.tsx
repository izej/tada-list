import {EmptyContainer} from "features/Tasks/StyledTasks.tsx";
import {useTranslation} from "react-i18next";
import {AchievementsContainer, ItemsContainer, ListImage, Message} from "features/Achievements/StyledAchievements.tsx";
import {useAppDispatch, useAppSelector} from "hooks/reduxHooks.ts";
import {useEffect} from "react";
import {fetchAchievements, selectAchievements} from "features/Achievements/achievementsSlice.tsx";
import AchievementItem from "features/Achievements/AchievementItem.tsx";

const AchievementsList = () => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAchievements());
  }, [dispatch]);

  const achievements = useAppSelector(state =>
    selectAchievements()(state)
  );

  return <ItemsContainer>
    {
      achievements.length > 0
        ? <> <Message> {t("achievement.list_title")} </Message>
          <AchievementsContainer>
            {achievements.map(achievement => <>
              <AchievementItem name_key={achievement.nameKey} emoji={achievement.rewardIcon}
                               description_key={achievement.descriptionKey}/>
            </>)} </AchievementsContainer> </>
        : <>
          <EmptyContainer>
            <Message>{t("achievement.empty")}</Message>
          </EmptyContainer>
          <ListImage src="border_collie.png" alt="empty_list"/>
        </>
    }
  </ItemsContainer>
}

export default AchievementsList
