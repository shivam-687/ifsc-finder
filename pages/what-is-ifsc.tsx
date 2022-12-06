import { GetStaticPropsContext } from 'next'
import React from 'react'
import ContentComp from '../components/ContentComp'
import PageMeta from '../components/PageMeta'


export const config = { amp: true }

const about_ifsc = () => {
  return (
    <>
    <PageMeta 
    title='IFSC: What is ifsc code?'
    desc="If you're looking for an easy way to figure out what your ifsc code is, then this guide is for you! We'll explain all the different components of an ifsc code and how they're used."
    />
    <div>
        <ContentComp/>
    </div>
    </>
  )
}

export async function getStaticProps(props: GetStaticPropsContext) {
  return {
      props: {
          data: null
      }
  }
}

export default about_ifsc