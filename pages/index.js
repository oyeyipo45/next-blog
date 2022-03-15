import Head from 'next/head'
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Software Engineer : you can see more details about me here {" "}
          <Link href="https://oyeyipo45.netlify.app">
            <a target="_blank" rel="noopener noreferrer">PORTFOLIO</a>
          </Link>
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}