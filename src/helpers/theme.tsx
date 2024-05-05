import { TThemeMode } from '@/types';
import { IoLaptopOutline, IoMoon, IoSunny } from 'react-icons/io5';

export const getThemeIcon = (theme: TThemeMode) =>
  ({
    [TThemeMode.DARK]: <IoMoon fontSize="var(--default-icon-size)" />,
    [TThemeMode.LIGHT]: <IoSunny fontSize="var(--default-icon-size)" />,
    [TThemeMode.SYSTEM]: <IoLaptopOutline fontSize="var(--default-icon-size)" />,
  }[theme]);
