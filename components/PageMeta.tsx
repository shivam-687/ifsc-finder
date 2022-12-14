import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import React from 'react'

export type PageMetaProps = {
  title: string,
  desc: string
}

const PageMeta = (props: PageMetaProps) => {
  const {query} = useRouter()

  return (
    <>
    <Head>
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.desc} />
      <meta property="twitter:title" content={props.title} />
      <meta property="twitter:description" content={props.desc} />
      <meta name="description" content={props.desc} />
      <title>{props.title}</title>


    </Head>
    {/* <Script type='application/ld+json' id='breadcrumb-ld-json' dangerouslySetInnerHTML={{
      __html: JSON.stringify(breadCrumbSnippet('https://findifscode.in', query), null, '\t')
    }}> */}

    {/* </Script> */}
    </>
  )
}

export default PageMeta