import { TFunction } from 'i18next';
import { MenuProps } from 'antd';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants';
import { RiDashboardHorizontalFill } from 'react-icons/ri';
import { IoChatboxEllipses, IoMail } from 'react-icons/io5';
import { FaLock, FaNoteSticky, FaUser } from 'react-icons/fa6';

type MenuItem = Required<MenuProps>['items'][number];

export const menuItems = (t: TFunction): MenuItem[] => [
  {
    label: t('dashboard.title'),
    key: 'dashboard',
    icon: <RiDashboardHorizontalFill />,
    children: [
      {
        label: <Link to={ROUTES.root}>{t('dashboard.home')}</Link>,
        key: 'home',
      },
      {
        label: <Link to={ROUTES.root}>{t('dashboard.sales')}</Link>,
        key: 'sales',
      },
      {
        label: <Link to={ROUTES.root}>{t('dashboard.analytics')}</Link>,
        key: 'analytics',
      },
      {
        label: <Link to={ROUTES.root}>{t('dashboard.finance')}</Link>,
        key: 'finance',
      },
    ],
  },
  {
    key: 'apps',
    label: t('apps.title'),
    type: 'group',
    children: [
      {
        label: <Link to={ROUTES.root}>{t('apps.chat')}</Link>,
        key: 'chat',
        icon: <IoChatboxEllipses />,
      },
      {
        label: <Link to={ROUTES.root}>{t('apps.mailbox')}</Link>,
        key: 'mailbox',
        icon: <IoMail />,
      },
      {
        label: <Link to={ROUTES.root}>{t('apps.notes')}</Link>,
        key: 'notes',
        icon: <FaNoteSticky />,
      },
    ],
  },
  {
    key: 'userAndPages',
    label: t('userAndPages.title'),
    type: 'group',
    children: [
      {
        label: t('userAndPages.users.title'),
        key: 'users',
        icon: <FaUser />,
        children: [
          {
            label: <Link to={ROUTES.root}>{t('userAndPages.users.profile')}</Link>,
            key: 'profile',
          },
          {
            label: <Link to={ROUTES.root}>{t('userAndPages.users.accountSettings')}</Link>,
            key: 'accountSettings',
          },
        ],
      },
      {
        label: <Link to={ROUTES.auth}>{t('userAndPages.authentication')}</Link>,
        key: 'authentication',
        icon: <FaLock />,
      },
    ],
  },
];
