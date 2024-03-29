import React from 'react';

import classNames from 'classnames';
import iconsObj from 'assets/icons/iconsObj';
import styles from './NetworkNProtocolsPage.module.scss';

import { useLocation } from 'react-router-dom';
import Header from 'common/components/Header/Header';
import Footer from 'common/components/Footer/Footer';
import useTheme from 'common/hooks/useTheme/useTheme';
import Sidebar from 'common/components/Sidebar/Sidebar';
import HeaderPage from 'common/components/HeaderPage/HeaderPage';
import VaultsTable from 'common/components/VaultsTable/VaultsTable';
import AssetsTable from 'common/components/AssetsTable/AssetsTable';
import useTranslation from 'common/hooks/useTranslation/useTranslation';
import ProtocolsTable from 'common/components/ProtocolsTable/ProtocolsTable';
import HeaderPageInfo from 'common/components/HeaderPageInfo/HeaderPageInfo';
import AssetTransaction from 'common/components/AssetTransaction/AssetTransaction';

function NetworkNProtocolsPage() {
  const theme = useTheme();
  const { pathname } = useLocation();
  const translation = useTranslation();

  const path = pathname.split('/')[1];

  const enum Path {
    network = 'network'
  }

  return (
    <div className={classNames(styles.landing_page, styles[theme])}>
      <Header inputClassName={styles.input} />
      <div className={styles.container}>
        <aside className={styles.aside}>
          <Sidebar />
        </aside>
        <main className={styles.main}>
          <div className={styles.wrapper}>
            <HeaderPage
              icon={path === Path.network
                ? iconsObj.ethereum
                : iconsObj.assetsToken
              }
              title={path === Path.network
                ? `${translation.Networks.eth} ${translation.Networks.network}` 
                : `Aave ${translation.Protocols.protocol}`
              }
            />
            <HeaderPageInfo />
            {
              path === Path.network ? (
                <>
                  <AssetsTable />
                  <ProtocolsTable />
                </>
              ) : (
                <>
                  <VaultsTable />
                  <AssetTransaction />
                </>
              )
            }
          </div>
          <Footer wrapperClassName={styles.footer} />
        </main>
      </div>
    </div>
  );
}

export default NetworkNProtocolsPage;
