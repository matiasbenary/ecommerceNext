import CardContainer from '@components/shared/CardContainer'
import Head from 'next/head'

export default function Home () {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CardContainer></CardContainer>
    </>
  )
}
