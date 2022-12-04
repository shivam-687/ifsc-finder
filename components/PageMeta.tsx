import Head from 'next/head'
import React from 'react'

export type PageMetaProps = {
  title: string,
  desc: string
}

const PageMeta = (props: PageMetaProps) => {
  return (
    <Head>
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.desc} />
      <meta property="twitter:title" content={props.title} />
      <meta property="twitter:description" content={props.desc} />
      <title>{props.title}</title>
    </Head>
  )
}

export default PageMeta