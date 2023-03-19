import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>포켓몬 도감</title>
        <meta
          name="description"
          content="포켓몬스터 도감"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="포켓몬스터 도감" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content='' />
        <meta property="og:image" content='' />
        <meta property="og:article:author" content="포켓몬스터 도감" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
