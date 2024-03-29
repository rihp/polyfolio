import React, {useState} from 'react';
import classNames from 'classnames';
import Icon from 'common/components/Icon/Icon';
import iconsObj from 'assets/icons/iconsObj';
import useTheme from 'common/hooks/useTheme/useTheme';
import styles from './HeaderTable.module.scss';
import {menuItems} from './FilterFieldsItem.config';
import numberFormatter from 'utils/numberFormatter';
import useTranslation from 'common/hooks/useTranslation/useTranslation';
import DataRangeSelector from '../DateRangeSelector/DateRangeSelector';

import _map from 'lodash/map';

import TooltipTrigger from '../TooltipTrigger/TooltipTrigger';

function HeaderTable({
  setTableIsOpen,
  setIsOpen: setFilterIsOpen,
  isOpen: filterIsOpen,
  title,
  sum,
}: {
  setTableIsOpen;
  isOpen: boolean;
  setIsOpen;
  title: string;
  sum: number;
}) {
  const [isOpen, setIsOpen] = useState(true);
  const [dataRange, setDataRange] = useState({});
  const translation = useTranslation();
  const theme = useTheme();

  const changeDataRange = (e) => {
    setDataRange(e);
    setIsOpen(!isOpen);
  };

  const Menu = () => {
    return (
      <div className={styles.fieldsContainer}>
        <div className={styles.titleContainer}>{translation.FilterFields.title}</div>
        {_map(menuItems, (menuItem) => {
          return (
            <>
              {!menuItem.isDivider ? (
                <div className={styles.field}>
                  <input
                    disabled={menuItem.isRequired}
                    checked={menuItem.isRequired}
                    className={styles.checkbox}
                    name={menuItem.title}
                    type="checkbox"
                  />
                  <div className={styles.title}>
                    {!menuItem.isRequired && (
                      <Icon src={iconsObj.points} style={{marginRight: '8px'}} />
                    )}
                    {translation.FilterFields[menuItem.title]}
                  </div>
                </div>
              ) : (
                <div className={styles.divider} />
              )}
            </>
          );
        })}
        <div className={styles.btnContainer}>
          <button className={styles.cancel} onClick={() => setFilterIsOpen(!filterIsOpen)}>
            {translation.Buttons.cancel}
          </button>
          <button className={styles.save}>
            <Icon src={iconsObj.save} className={styles.saveIcon} />
            <div>{translation.Buttons.saveChanges}</div>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={classNames(styles[theme], styles.headerTableContainer)}>
      <div className={styles.title_container}>
        <h3>{title}</h3>
        <DataRangeSelector
          setDataRange={changeDataRange}
          className={styles.btn}
          setIsOpen={setIsOpen}
          dataRange={dataRange}
          isOpen={isOpen}
          fontSize="14px"
        />
      </div>
      <div className={styles.filter_container}>
        <h4>${numberFormatter({value: sum, size: 2})}</h4>
        <TooltipTrigger isOpen={filterIsOpen} placement={'bottom-end'} popper={<Menu />}>
          <button onClick={() => setFilterIsOpen()}>
            <Icon src={iconsObj.filterIcon} className={styles.icon} />
          </button>
        </TooltipTrigger>
        <button onClick={() => setTableIsOpen()}>
          <Icon
            src={iconsObj.filterIconSecondary}
            className={classNames(styles.icon, styles.iconFilter)}
          />
        </button>
      </div>
    </div>
  );
}

export default HeaderTable;
