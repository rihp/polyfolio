import React from 'react';

import styles from './DashboardPage.module.scss';

import classNames from 'classnames';

import Header from 'common/components/Header/Header';
import Footer from 'common/components/Footer/Footer';
import useTheme from 'common/hooks/useTheme/useTheme';
import Profile from 'common/components/Profile/Profile';

function DashboardPage() {
  const theme = useTheme();

  return (
    <div className={classNames(styles.landing_page, styles[theme])}>
      <Header inputClassName={styles.input} />
      <div className={styles.container}>
        <aside className={styles.aside}>
          <Profile />
        </aside>
        <main className={styles.main}>
          <Footer wrapperClassName={styles.footer} />
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;
