export interface Achievement {
  id: string;
  nameKey: string;
  descriptionKey: string;
  type: AchievementType;
  criteria: {
    type: CriteriaType;
    daysRequired?: number;
    tasksPerDay?: number;
    timeOfDay?: string;
    customFn?: () => boolean;
  };
  rewardIcon: string,
  unlocked: boolean;
  dateUnlocked?: string;
  cooldownDays?: number;
  hidden?: boolean;
  progress?: number;
}

export enum AchievementType {
  ONE_TIME = 'one_time',
  REPEATABLE = 'repeatable'
}

export enum CriteriaType {
  TASK_STREAK = 'task_streak',
  DAILY_GOAL = 'daily_goal',
  TIME_BASED = 'time_based',
  CUSTOM = 'custom',
}

export enum RewardType {
  BADGE = 'badge',
  POINTS = 'points',
  VISUAL = 'visual',
  CUSTOM = 'custom',
}
