import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig, i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;
  const indexContents = require(`@site/i18n/${locale}/docusaurus-plugin-content-pages/indexContents.json`);

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{indexContents.tagline.title}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
              {indexContents.rowingWithTypes}
            </Link>
          </div>
        </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Homepage for RowScript programming language"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
