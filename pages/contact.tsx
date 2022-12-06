import { GetStaticPropsContext } from 'next'
import React from 'react'

export const config = { amp: true }

const contact = () => {
    return (
        <section className="container mx-auto flex justify-center px-5 mt-28 mb-28">
            <div className='border border-gray-300 rounded-xl p-5 shadow-lg shadow-primary/20'>
                <div className='prose prose-neutral lg:prose-xl prose-thead:bg-slate-400'>
                    <h1 className=''>Contact Us</h1>
                    <p>For any enquiry, correction or suggestion please feel free to email us.</p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                        <div className="rounded-xl border border-gray-200 p-2 flex flex-col items-center">
                            <h3>Email To</h3>
                            <a className='link link-primary' href='mailto:shivamsi687@gmail.com'>Shivamsi687@gmail.com</a>
                        </div>
                        <div className="rounded-xl border border-gray-200 p-2 flex flex-col items-center">
                            <h3>Associated Company</h3>
                            <a href='https://interlef.com'>Interlef Web Solutions</a>
                        </div>
                    </div>



                </div>
            </div>
        </section>
    )
}

export async function getStaticProps(props: GetStaticPropsContext) {
    return {
        props: {
            data: null
        }
    }
  }

export default contact