import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
// import { Navigation } from '../components/Navigation'

class MyDocument extends Document {

    // structuredData = {
    //     "@context": "https://schema.org",
    //     "@type": "Organization",
    //     "name": "Interlef Web Solutions",
    //     "alternateName": "Interlef",
    //     "url": "https://interlef.com",
    //     "logo": "https://interlef.com/_next/image?url=%2Flogo%2Ffull-logo.png&w=128&q=75",
    //     "sameAs": [
    //         "https://www.facebook.com/myinterlef",
    //         "",
    //         "https://www.instagram.com/myinterlef/",
    //         "",
    //         "https://interlef.com"
    //     ]
    // }

    // localBusiness = {
    //     "@context": "https://schema.org",
    //     "@type": "ProfessionalService",
    //     "name": "Interlef Web Solutions",
    //     "image": "https://res.cloudinary.com/interlef/image/upload/v1660921048/interlef/logo-md-500x500_wghcd8.jpg",
    //     "@id": "",
    //     "url": "https://interlef.com",
    //     "telephone": "+91 7984226239",
    //     "priceRange": "30000",
    //     "address": {
    //         "@type": "PostalAddress",
    //         "streetAddress": "Chiraiyakot",
    //         "addressLocality": "Mau",
    //         "postalCode": "276129",
    //         "addressCountry": "IN"
    //     },
    //     "openingHoursSpecification": {
    //         "@type": "OpeningHoursSpecification",
    //         "dayOfWeek": [
    //             "Monday",
    //             "Tuesday",
    //             "Wednesday",
    //             "Thursday",
    //             "Friday",
    //             "Saturday",
    //             "Sunday"
    //         ],
    //         "opens": "00:00",
    //         "closes": "23:59"
    //     },
    //     "sameAs": [
    //         "https://www.facebook.com/myinterlef",
    //         "https://www.instagram.com/myinterlef/",
    //         "https://interlef.com"
    //     ]
    // }

    render() {
        return (
            <Html data-theme="interlef_light" lang='en'>
                <Head >
                    <meta charSet="UTF-16BE"/>
                    <Script id="gt-manager" strategy='lazyOnload'>
                        {
                            `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-M8HZD9D');`
                        }
                    </Script>

                    <meta name="robots" content="index, follow" />
                    <meta name="googlebot" content="index, follow" />
                    <meta name='bingbot' content='index, follow' />

                    {/* Favicons */}
                    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#da532c" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff"></meta>



                    <meta name="title" content="Interlef: Top web development agency in Uttar Pradesh" />
                    <meta name="description" content="We’re different… and by different we mean better. We are creative team of designers, developers, and strategists, building elevated websites. Using a proven method of innovative design and personalized strategies, we can elevate your brand above the competition." />


                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://www.findifscode.in/" />
                    <meta property="og:title" content="IFSC Code: Search for IFSC & MICR Codes of All Banks in India" />
                    <meta property="og:description" content="IFSC Code - Find the complete list of IFSC Code & Contact details of all banks in India. Most simple and clean website to search the IFSC code by simple way." />
                    <meta property="og:image" content="/assets/images/site-image.png" />


                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://www.findifscode.in/" />
                    <meta property="twitter:title" content="IFSC Code: Search for IFSC & MICR Codes of All Banks in India" />
                    <meta property="twitter:description" content="IFSC Code - Find the complete list of IFSC Code & Contact details of all banks in India. Most simple and clean website to search the IFSC code by simple way." />
                    <meta property="twitter:image" content="/assets/images/site-image.png"></meta>

                    {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" /> */}
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800:900&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400&family=Nunito:ital,wght@0,300;0,400;1,400&display=swap" rel="stylesheet" />
                    {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(this.structuredData) }} />
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(this.localBusiness) }} /> */}
                </Head>
                <body>
                    <noscript dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M8HZD9D"
                        height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument