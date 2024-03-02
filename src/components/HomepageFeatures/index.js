import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const { _, i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;
  const FeatureList = require(`@site/i18n/${locale}/docusaurus-plugin-content-pages/homepageFeatures.json`);

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {Object.entries(FeatureList).map(([key, { title, description }], idx) => (
            <Feature key={idx} title={title} description={<p dangerouslySetInnerHTML={{__html: description}} />} />
          ))}
        </div>
      </div>
    </section>
  );
}