import { GetStaticPropsContext } from 'next'
import React from 'react'
import PageMeta from '../components/PageMeta'


const contact = () => {
    return (
        <>
        <PageMeta
        title='Contact findifscode.in - Get in Touch With Us Today'
        desc='Whether you have a question, comment, or feedback on our IFSC code finder website, we want to hear from you! Contact findifscode.in today via phone, email, or our online contact form and our friendly team will get back to you as soon as possible.'
        />
        <section className="container mx-auto flex justify-center px-5 mt-28 mb-28">
            <div className='border border-gray-300 rounded-xl p-5 shadow-lg shadow-primary/20'>
                <div className='prose prose-neutral lg:prose-xl prose-thead:bg-slate-400'>
                    <h1 className=''>Contact Us</h1>
                    <p>We're always here to help you with any questions, comments, or feedback you may have about our IFSC code finder website. There are several ways you can get in touch with us:</p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-5 mb-5">
                        <div className="rounded-xl border border-gray-200 p-2 flex flex-col items-center">
                            <h3>Email To</h3>
                            <a className='link link-primary' href='mailto:shivamsi687@gmail.com'>Shivamsi687@gmail.com</a>
                        </div>
                        <div className="rounded-xl border border-gray-200 p-2 flex flex-col items-center">
                            <h3>Associated Company</h3>
                            <a href='https://interlef.com'>Interlef Web Solutions</a>
                        </div>
                    </div>

                    <p>We value your feedback and suggestions, and we're always looking for ways to improve our website and make it even more helpful for you. So please don't hesitate to get in touch with us if you have any questions or comments.</p>

                    <p>Thank you for choosing findifscode.in as your go-to resource for IFSC codes in India. We look forward to hearing from you!</p>



                </div>
            </div>
        </section>
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

export default contact