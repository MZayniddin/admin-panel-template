import { TThemeMode } from '@/types';
import { IoLaptopOutline, IoMoon, IoSunny } from 'react-icons/io5';

export const getThemeIcon = (theme: TThemeMode) =>
  ({
    [TThemeMode.DARK]: <IoMoon size="var(--default-icon-size)" />,
    [TThemeMode.LIGHT]: <IoSunny size="var(--default-icon-size)" />,
    [TThemeMode.SYSTEM]: <IoLaptopOutline size="var(--default-icon-size)" />,
  }[theme]);
