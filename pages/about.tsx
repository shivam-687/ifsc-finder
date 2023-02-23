import { GetStaticPropsContext } from 'next'
import Head from 'next/head'
import React from 'react'
import PageMeta from '../components/PageMeta'

// It gives us great pleasure to present to you findifscode.in! A place where you can very easily find IFSC (India Financial System Code) code. The websites currently lists around 1 lac bank branches of around 150 banks in India. We have utmost care in making sure the data we have collected is correct. However, we expect you to use this website only for reference, and please confirm from the bank directly before performing any transaction. Contact details for each bank/branch are provided in the same page where we list the IFSC Code.

// Please contact us at <a href="mailto: shivamsi687@gmail.com" className="link link-primary font-semibold">shivamsi687@gmail.com</a>.

// Thank you,
// Team Find Ifsc Code.

// findifscode.com is a <a href="https://interlef.com" className="link link-primary font-semibold">Interlef Web Solutions</a>. venture.
const about = () => {
  return (
    <>
    <PageMeta
      title={`About findifscode.in - Discover Our Mission and Values`}
      desc={`Learn more about findifscode.in and our commitment to providing accurate and up-to-date information on IFSC codes for banks in India. Discover our team, our mission, and our core values that drive us to help you find the bank branch codes you need.`}
     />
      <section className="container mx-auto flex justify-center px-5 mt-28 mb-28">
              <div className='border border-gray-300 rounded-xl p-5 shadow-lg shadow-primary/20'>
                  <div className='prose prose-neutral lg:prose-xl prose-thead:bg-slate-400'>
                      <h1>About Us</h1>
                      <p>Welcome to findifscode.in! Our website is dedicated to helping you find the IFSC (India Financial System Code) code for bank branches in India. We understand that finding accurate and up-to-date information on IFSC codes can be a challenge, which is why we've created a comprehensive database of over 1 lakh bank branches from more than 150 banks across India.</p>
                      <p>Our team has worked tirelessly to ensure that the data we provide is accurate and reliable. We have implemented various quality checks and verification processes to ensure that the IFSC codes listed on our website are correct. However, we do request that you use our website only as a reference and confirm the IFSC code with the bank directly before performing any transactions.</p>
                      <p>At findifscode.in, we are committed to providing an easy-to-use and user-friendly experience. Our website is designed with simplicity in mind, allowing you to search for the IFSC code of a bank branch with just a few clicks. We have also included contact details for each bank/branch, making it easy for you to get in touch with your bank if you need any further assistance.</p>
                      <p>We are constantly working to improve our website and add more features to make your experience even better. If you have any feedback or suggestions for us, we would love to hear from you! Please feel free to get in touch with us via our contact page, and our team will get back to you as soon as possible.</p>
                      <p>Thank you for choosing findifscode.in as your go-to resource for IFSC codes in India. We look forward to helping you with all your banking needs!</p>
                      <p>Please contact us at <a href="mailto: shivamsi687@gmail.com" className="link link-primary font-semibold">shivamsi687@gmail.com</a>.</p>
                      <p>
                      Thank you, <br/>
                      Team Find Ifsc Code
                      </p>
  
                      <p>findifscode.com is a <a href="https://interlef.com" className="link link-primary font-semibold">Interlef Web Solutions</a>. venture.</p>
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

export default about