import React, {useEffect} from 'react';
import styles from './DataRangeSelector.module.scss';
import {menuItems} from './DataRangeSelector.config';
import classNames from 'classnames';
import MenuArrow from '../MenuArrow/MenuArrow';
import _map from 'lodash/map';
import useTheme from 'common/hooks/useTheme/useTheme';
import useTranslation from 'common/hooks/useTranslation/useTranslation';
import TooltipTrigger from 'common/components/TooltipTrigger/TooltipTrigger';
import Icon from 'common/components/Icon/Icon';
import iconsObj from 'assets/icons/iconsObj';

function DataRangeSelector({fontSize, className, isOpen, dataRange, setDataRange, setIsOpen}) {
  const translation = useTranslation();
  const theme = useTheme();
  useEffect(() => {
    setDataRange(menuItems[3]);
  }, []);

  const MenuItem = (menuItem) => {
    return (
      <>
        {!menuItem.isDivider ? (
          <div className={styles.menu_item} onClick={() => setDataRange(menuItem)}>
            <div className={styles.title}>{translation.DataRangeSelector[menuItem.title]}</div>
            {dataRange?.id === menuItem?.id && (
              <Icon src={iconsObj.selected} className={styles.iconSelected} />
            )}
          </div>
        ) : (
          <div className={styles.divider} />
        )}
      </>
    );
  };

  const Menu = () => {
    return (
      <div className={styles.DataRangeSelectorContainer}>
        <span className={styles.titlePicker}>{translation.DataRangeSelector.title}</span>
        {_map(menuItems, (menuItem) => (
          <MenuItem {...menuItem} key={menuItem.title} />
        ))}
      </div>
    );
  };

  return (
    <div className={styles[theme]}>
      <TooltipTrigger isOpen={isOpen} placement={'bottom-end'} popper={<Menu />}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{fontSize}}
          className={classNames(styles.btn, className)}
        >
          {translation.DataRangeSelector[dataRange?.title]}
          <MenuArrow className={styles.arrow} filled startPosition={'up'} />
        </button>
      </TooltipTrigger>
    </div>
  );
}

export default DataRangeSelector;
