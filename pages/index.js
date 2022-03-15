import Head from 'next/head'
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  let users;
  users = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
  
  return {
    props: {
      allPostsData,
      users
    }
  }
}



export default function Home({ allPostsData, users }) {
  
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Software Engineer : you can see more details about me here{' '}
          <Link href='https://oyeyipo45.netlify.app'>
            <a target='_blank' rel='noopener noreferrer'>
              PORTFOLIO
            </a>
          </Link>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {users.map(({ name, id }) => (
            <li className={utilStyles.listItem} key={id}>
              {name}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}