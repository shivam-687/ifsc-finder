import React from 'react'
import PageMeta from '../components/PageMeta'


const desclaimer = () => {
    return (
        <>
        <PageMeta
            title='Disclaimer - Learn About Our Terms and Conditions'
            desc='Before using our IFSC code finder tool, please read our disclaimer page to learn about our terms and conditions. We strive to provide accurate information on bank branch codes in India, but we cannot guarantee the accuracy, completeness, or timeliness of the information provided. By using our website, you agree to our disclaimer and our terms of service.'
        />
        <section className="container mx-auto flex justify-center px-5 mt-28 mb-28">
            <div className='border border-gray-300 rounded-xl p-5 shadow-lg shadow-primary/20'>
                <div className='prose prose-neutral lg:prose-xl prose-thead:bg-slate-400'>
                    <h1>Disclaimer</h1>
                    <p>All information and data available on this site are made available with great care. However, all data is gathered from financial institutions, public domains and government portals. It could contain human errors and/or technical errors.</p>

                    <p>Users are asked to confirm the information found on this site prior to making use of the information. We do not take responsibility for any losses or issues caused byor due to the information available on this site findifscode.in.</p>

                    <p>We've done at all times to maintain most current information it is available from reliable sources. Users are asked to verify details with the bank before utilizing the information given. The author is not able to be accountable for the accuracy, relevance the accuracy, completeness or quality of the information supplied. Any claims for liability arising from damage caused due to the use of the information, which includes any type of information that is inaccurate or incomplete and therefore rejected.</p>
                </div>
            </div>
        </section>
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {
            data: null
        }
    }
}

export default desclaimer