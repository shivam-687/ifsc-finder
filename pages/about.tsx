import { GetStaticPropsContext } from 'next'
import React from 'react'

// It gives us great pleasure to present to you findifscode.in! A place where you can very easily find IFSC (India Financial System Code) code. The websites currently lists around 1 lac bank branches of around 150 banks in India. We have utmost care in making sure the data we have collected is correct. However, we expect you to use this website only for reference, and please confirm from the bank directly before performing any transaction. Contact details for each bank/branch are provided in the same page where we list the IFSC Code.

// Please contact us at <a href="mailto: shivamsi687@gmail.com" className="link link-primary font-semibold">shivamsi687@gmail.com</a>.

// Thank you,
// Team Find Ifsc Code.

// findifscode.com is a <a href="https://interlef.com" className="link link-primary font-semibold">Interlef Web Solutions</a>. venture.
const about = () => {
  return (
    <section className="container mx-auto flex justify-center px-5 mt-28 mb-28">
            <div className='border border-gray-300 rounded-xl p-5 shadow-lg shadow-primary/20'>
                <div className='prose prose-neutral lg:prose-xl prose-thead:bg-slate-400'>
                    <h1>About Us</h1>
                    <p>It gives us great pleasure to present to you findifscode.in! A place where you can very easily find IFSC (India Financial System Code) code. The websites currently lists around 1 lac bank branches of around 150 banks in India. We have utmost care in making sure the data we have collected is correct. However, we expect you to use this website only for reference, and please confirm from the bank directly before performing any transaction. Contact details for each bank/branch are provided in the same page where we list the IFSC Code.</p>

                    <p>Please contact us at <a href="mailto: shivamsi687@gmail.com" className="link link-primary font-semibold">shivamsi687@gmail.com</a>.</p>
                    <p>
                    Thank you, <br/>
                    Team Find Ifsc Code
                    </p>

                    <p>findifscode.com is a <a href="https://interlef.com" className="link link-primary font-semibold">Interlef Web Solutions</a>. venture.</p>
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

export default about