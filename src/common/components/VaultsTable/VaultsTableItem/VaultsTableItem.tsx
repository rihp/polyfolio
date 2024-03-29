import React from 'react';
import styles from './VaultsTableItem.module.scss';
import useTranslation from 'common/hooks/useTranslation/useTranslation';

import MenuArrow from 'common/components/MenuArrow/MenuArrow';
import {useNavigate} from 'react-router-dom';

import Icon from 'common/components/Icon/Icon';
import numberFormatter from 'utils/numberFormatter';
import PricesValue from 'common/components/PricesValue/PricesValue';

function VaultsItem(menuItem) {
  const translation = useTranslation();
  const navigate = useNavigate();
  const {
    secondaryPricePercentTitle,
    pricePercentDollar,
    secondaryTitle,
    valueIsMinus,
    priceTitle,
    valueTitle,
    isDivider,
    percent,
    title,
    link,
    icon,
  } = menuItem;

  return (
    <>
      {!isDivider ? (
        <div className={styles.menu_item}>
          <div className={styles.title_container}>
            <Icon src={icon} className={styles.icon} />
            <div>
              <div className={styles.title}>{translation.Assets[title]}</div>
              <div className={styles.titleSecondary}>{translation.Assets[secondaryTitle]}</div>
            </div>
          </div>
          <div className={styles.container_allocation}>
            <div className={styles.background}></div>
            <div className={styles.aggregate} style={{width: `${percent}%`}}></div>
            <span className={styles.badgeText}>{numberFormatter({value: percent, size: 0})}%</span>
            <span className={styles.badge}></span>
          </div>
          <PricesValue
            secondaryPricePercentTitle={secondaryPricePercentTitle}
            pricePercentDollar={pricePercentDollar}
            className={styles.price_container}
            valueIsMinus={valueIsMinus}
            priceTitle={priceTitle}
          />
          <div className={styles.value_container}>
            <div>
              <div className={styles.valueTitle}>
                ${numberFormatter({value: valueTitle, size: 2})}
              </div>
            </div>
            <button onClick={() => navigate(link)}>
              <MenuArrow className={styles.arrowIcon} startPosition="right" size="10px" />
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.divider} />
      )}
    </>
  );
}

export default VaultsItem;
