import React from 'react'

const ContentComp = () => {
    return (
        <section className="container mx-auto flex justify-center px-5 mt-28">
            <div className='border border-gray-300 rounded-xl p-5 shadow-lg shadow-primary/20'>
                <article className='prose prose-gray lg:prose-xl prose-thead:bg-slate-400' aria-details='IFSC Code' >
                    <h2>What is IFSC (Indian Finance Security Code)</h2>
                    <p>
                        For online fund transfers made through NEFT, RTGS, and IMPS, a special 11-digit alphanumeric code called the Indian Financial System Code (IFSC) is utilised.
                        The bank's issued check leaf will have the IFSC code on it. The bank receives the IFSC codes from the Reserve Bank of India (RBI). In addition to the cheque leaf, the bank's and the RBI's official websites both list the IFSC code.
                        The IFSC must be typed in order to start the transfer if you are using online banking to send money. Banks do not alter or update the IFSC code unless there is a merger.
                    </p>

                    <h2>Features of IFSC Code</h2>
                    <ul>
                        <li>This code helps uniquely identify a specific bank branch</li>
                        <li>This code helps eliminate errors in the fund transfer process</li>
                        <li>This code used for all electronic payment options such as NEFT, RTGS and IMPS</li>
                    </ul>

                    <h2>Difference Between Bank IFSC Code and Credit Card IFSC Code</h2>
                    <p>In the case of the bank IFSC code, it varies from branch to branch. However, the credit card IFSC code for a particular bank will remain the same across the country.<br />
                        The credit card IFSC code for some of the banks are mentioned in the table below:
                    </p>

                    <table>
                        <thead>
                            <tr>
                                <th>Bank</th>
                                <th>IFSC</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>HDFC</td>
                                <td>HDFC0000128</td>
                            </tr>
                            <tr>
                                <td>Citibank</td>
                                <td>CITI0000003</td>
                            </tr>
                            <tr>
                                <td>Axis Bank</td>
                                <td>UTIB0000400</td>
                            </tr>
                            <tr>
                                <td>HSBC Bank</td>
                                <td>HSBC0400002</td>
                            </tr>
                            <tr>
                                <td>HSBC Bank</td>
                                <td>HSBC0400002</td>
                            </tr>
                            <tr>
                                <td>Punjab National Bank</td>
                                <td>PUNB0112000</td>
                            </tr>
                            <tr>
                                <td>IDBI Bank</td>
                                <td>IBKL0NEFT01</td>
                            </tr>
                            <tr>
                                <td>Yes Bank</td>
                                <td>YESB0CMSNOC</td>
                            </tr>
                            <tr>
                                <td>IndusInd Bank</td>
                                <td>INDB0000018</td>
                            </tr>
                            <tr>
                                <td>State Bank of India</td>
                                <td>SBIN00CARDS</td>
                            </tr>
                        </tbody>
                    </table>

                    <div aria-details='MICR Code Details'>
                        <h2>What is MICR Code?</h2>
                        <p>
                            <strong>Magnetic Ink Character Recognition (MICR)</strong> is a 9-digit code that helps identify a particular bank branch that is part of the <strong>Electronic Clearing System (ECS)</strong>
                            which is used to clear cheques on a routine basis. This code can be found on the cheque leaf that is issued by the bank and is generally also printed on the passbook that is issued to the account holder.
                        </p>

                        <p>
                            The first three digits of the nine-digit number are used to specify the city, the following three digits are used to specify the bank, and the last three digits are used to specify the bank branch. For instance, "700002021" is the MICR code for the SBI branch in Kolkata. Here, the first three digits (700) are used to describe the city, the next three digits (002) are used to specify the bank, and the final three digits (021) are used to specify the bank branch. Cheques are generally processed and cleared by machines using the MICR code. The 9-digit number helps to reduce errors in the clearing process, speeds up the procedure, and improves the security and safety of processing checks.
                        </p>

                        <h2>MICR Code Format</h2>
                        <p>
                        The first three digits of the code represents the city, the next three digits represent the bank code, and the last three digits represent the bank branch code. For example, the MICR code for the SBI branch in Kolkata is '700002021'. Here, '700' represents the city, '002' represents the bank, and '021' represents the bank branch.
                        </p>
                    </div>


                </article>
            </div>
        </section>
    )
}

export default ContentComp