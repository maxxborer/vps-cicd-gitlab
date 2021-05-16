import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>maxxborer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          maxxborer
          <br />
          <br />
          vps + domain + docker + ci/cd
          <br />
          <br />
        </h1>

        <p className={styles.title}>
          <a className={styles.code} href="https://gitlab.com/maxxborer/vps-cicd-starter">
            gitlab.com/maxxborer/vps-cicd-starter
          </a>
        </p>
        </main>
    </div>
  )
}
