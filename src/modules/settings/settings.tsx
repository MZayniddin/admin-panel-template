import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useThemeStore } from '@/store';
import {
  CloseButton,
  SettingsBox,
  SettingsOverlay,
  SettingsPrimaryText,
  SettingsSecondaryText,
  SettingsToggleBtn,
  SettingsWrapper,
  ThemeSwitcherBtn,
  ThemeSwitchersWrapper,
} from './styles';
import { IoSettingsOutline, IoClose } from 'react-icons/io5';
import { Box } from '@/components';
import { themeModes } from './settings.constants';
import { TThemeMode } from '@/types';

export const Settings = () => {
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  const { themeMode, setThemeMode } = useThemeStore();
  const { t } = useTranslation();

  const toggleSettingsVisibility = () => setIsSettingsVisible(!isSettingsVisible);

  const handleChangeTheme = (value: TThemeMode) => {
    setThemeMode(value);
  };

  return (
    <>
      <SettingsWrapper $hidden={!isSettingsVisible}>
        <Box $gap="4px" $direction="column" $mb="20px">
          <SettingsPrimaryText $align="center">{t('settings.title')}</SettingsPrimaryText>

          <SettingsSecondaryText $fontSize="var(--sm)" $align="center">
            {t('settings.subTitle')}
          </SettingsSecondaryText>
        </Box>

        <SettingsBox>
          <SettingsPrimaryText>{t('settings.settingTheme.title')}</SettingsPrimaryText>

          <SettingsSecondaryText>{t('settings.settingTheme.subTitle')}</SettingsSecondaryText>

          <ThemeSwitchersWrapper>
            {themeModes(t).map(({ name, icon, value }) => (
              <ThemeSwitcherBtn
                key={crypto.randomUUID()}
                type={value === themeMode ? 'primary' : 'default'}
                onClick={() => handleChangeTheme(value)}
              >
                {icon} {name}
              </ThemeSwitcherBtn>
            ))}
          </ThemeSwitchersWrapper>
        </SettingsBox>

        <SettingsToggleBtn block={false} onClick={toggleSettingsVisibility}>
          <IoSettingsOutline />
        </SettingsToggleBtn>

        <CloseButton block={false} type="default" onClick={toggleSettingsVisibility}>
          <IoClose />
        </CloseButton>
      </SettingsWrapper>

      {isSettingsVisible && <SettingsOverlay onClick={toggleSettingsVisibility} />}
    </>
  );
};
