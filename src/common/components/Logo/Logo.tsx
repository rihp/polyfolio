import React from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

import styles from './Logo.module.scss';

import iconsObj from 'assets/icons/iconsObj';
import Icon from 'common/components/Icon/Icon';
import {ThemeName} from 'common/themes/Themes.types';
import useTheme from 'common/hooks/useTheme/useTheme';
import RoutePath from 'common/modules/routing/routing.enums';

function Logo({className = ''}: {className?: string}) {
  const theme = useTheme();

  return (
    <Link
      to={RoutePath.BaseRoute}
      className={classNames(styles.common_logo, className, styles[theme])}
    >
      <Icon
        src={theme === ThemeName.Dark ? iconsObj.logoDark : iconsObj.logoLight}
        className={styles.icon}
      />
    </Link>
  );
}

export default Logo;
