import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Friendly Syntax',
    description: (
      <>
        RowScript reuses most of the JavaScript syntax for friendliness, also influenced by other languages like
        TypeScript, Python and Rust.
      </>
    ),
  },
  {
    title: 'Super Powerful Type System',
    description: (
      <>
        Language features like <a href="https://en.wikipedia.org/wiki/Dependent_type">dependent types</a>, tagged union,
        OOP, interfaces (or "traits" in Rust, "typeclasses" in Haskell) and more are all supported.
      </>
    ),
  },
  {
    title: 'Fast to Compile',
    description: (
      <>
        RowScript compiler is written in <a href='https://rust-lang.org'>Rust</a> programming language and shipped via
        native binaries, it's stunningly fast.
      </>
    ),
  },
];

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
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
