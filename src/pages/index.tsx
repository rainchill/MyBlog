import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import avatarImg from '@site/static/img/avatar.png';

import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro">
                        Docusaurus Tutorial - 5min ⏱️
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            {/* <HomepageHeader /> */}
            <header className={styles.header}>
                <div className={styles.container}>
                    <img src={avatarImg} height='300px' width='300px' className={styles.avatar} alt='avatar' />
                    <h1 className={styles.title}>RainChill</h1>
                    <p className={styles.desc}>Life is short, code is long</p>
                    <div className={styles.buttons}>
                        <Link
                            className="button button--secondary button--lg"
                            to="/blog">
                            前往博客 😄
                        </Link>
                    </div>
                </div>
            </header>
            <main>

                <HomepageFeatures />
            </main>
        </Layout>
    );
}
