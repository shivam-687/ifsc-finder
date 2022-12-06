import React from 'react'

const ContentComp = () => {
    return (
        <section className="container mx-auto flex justify-center px-5 mt-28 mb-28">
            <div className='border border-gray-300 rounded-xl p-5 shadow-lg shadow-primary/20'>
                <article className='prose prose-neutral lg:prose-xl prose-thead:bg-slate-400' aria-details='IFSC Code' >
                    <h1 className='text-center'>Learn About IFSC</h1>
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

                    <div  aria-details='What is RTGS Code?'>
                        <h2>What is RTGS?</h2>
                        <p>The Real Time Gross Settlement (RTGS) is an electronic system for fund transfers that allows you to transfer funds in one account of a bank to another. With the help of the internet banking service, you are able to quickly transfer funds via RTGS by yourself. The transactions made through RTGS are settled in real-time. The funds will be credited to the account of the beneficiary within 30 minutes.</p>
                        <p>A minimum transfer amount via RTGS amounts to Rs. 2 lakhs, and there is no maximum amount. In order to initiate a fund transfer using RTGS the recipient must include the name of the beneficiary as well as the bank's account number, IFSC code and account number. To be able to conduct transactions with RTGS both banks where the remitter as well as the beneficiary's account is must have an RTGS facility.</p>
                        <p>Because the transfer of funds through RTGS is regulated by Reserve Bank of India (RBI) The transactions cannot be changed and, therefore they are final. Based on the amount of transaction the remitter may be subject to charges. RTGS is specifically designed for transactions with a large volume. RTGS service will be accessible only on days that are working.</p>
                    </div>
                    <div  aria-details='What is NEFT Code?'>
                        <h2>What is NEFT code?</h2>

                        <p>National Electronic Funds Transfer (NEFT) is an online fund transfer system supported by Reserve Bank of India (RBI). By using NEFT, you can easily transfer funds from one bank account to another bank account. NEFT functions on Deferred Net Settlement (DNS) in which transactions are settled in batches.</p>
                        <p>Funds can also be transferred via NEFT in online by using internet banking service. There is no maximum and minimum limit for transactions made in NEFT.</p>
                        <p>Nevertheless, the maximum transaction is limited to Rs. 50,000 per transaction. Depending on the amount of transaction, charges are applied. NEFT is ideal for small and medium amount transfer between bank accounts. In order to transfer funds through NEFT, the remitter should have beneficiary's details such as name, bank name, account number and IFSC code.</p>
                        <p>NEFT works on hourly batches. For fund transfer to take place, both the banks where the remitter and beneficiary have their account should have NEFT service. The transferred funds will be credited to the beneficiary's account within two days.</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default ContentComp