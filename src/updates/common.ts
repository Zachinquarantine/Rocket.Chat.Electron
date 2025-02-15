export type UpdateConfiguration = {
  doCheckForUpdatesOnStartup: boolean;
  isEachUpdatesSettingConfigurable: boolean;
  isUpdatingAllowed: boolean;
  isUpdatingEnabled: boolean;
  skippedUpdateVersion: string | null;
  isReportEnabled: boolean;
  isFlashFrameEnabled: boolean;
};

export type AppLevelUpdateConfiguration = {
  forced?: boolean;
  canUpdate?: boolean;
  autoUpdate?: boolean;
  skip?: string | null;
};

export type UserLevelUpdateConfiguration = {
  autoUpdate?: boolean;
  skip?: string | null;
};
