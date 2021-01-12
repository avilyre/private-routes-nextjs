import Head from 'next/head'
import styles from '../styles/Home.module.css'

import wrraperRouterAcces from '../components/wrapperRouterAcces';

function Dashboard() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Dashboard
      </main>
    </div>
  )
}

Dashboard.getInitialProps = async props => {

  console.info('You are authenticated!', props);

  return {};
}

export default wrraperRouterAcces(Dashboard);