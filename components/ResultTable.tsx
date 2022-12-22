import React from 'react'
import { BankModel } from '../bank_data/api/BankModel'

const ResultTable = ({ info }: { info: BankModel }) => {
    return (
        <div className='container mx-auto px-5 mt-14'>
            <div className="overflow-x-auto rounded-xl shadow shadow-primary/20 overflow-hidden p-2 md:p-5">
                <table className="table w-full">

                    {/* <thead>
                        <tr>

                            <th>Bank Name</th>
                            <th>IFSC Code</th>
                            <th>State</th>
                            <th>District</th>
                            <th>Branch</th>
                            <th>Phone</th>
                            <th>Address</th>
                        </tr>
                    </thead> */}
                    <tbody>

                        {/* <tr>
                            <td>{info.BANK}</td>
                            <td>{info.IFSC}</td>
                            <td>{info.STATE}</td>
                            <td>{info.DISTRICT || 'N/A'}</td>
                            <td>{info.BRANCH}</td>
                            <td>{info.CONTACT || 'N/A'}</td>
                            <td>{info.ADDRESS}</td>
                        </tr> */}

                        <tr>
                            <th>Bank Name</th>
                            <td>{info.BANK}</td>
                        </tr>

                        <tr>
                            <th>IFSC Code</th>
                            <td>{info.IFSC}</td>
                        </tr>

                        <tr>
                            <th>State</th>
                            <td>{info.STATE}</td>
                        </tr>
                        <tr>
                            <th>District</th>
                            <td>{info.DISTRICT || 'N/A'}</td>
                        </tr>
                        <tr>
                            <th>Branch</th>
                            <td>{info.BRANCH}</td>
                        </tr>
                        <tr>
                            <th>Phone</th>
                            <td>{info.CONTACT || 'N/A'}</td>
                        </tr>
                        <tr>
                            <th>Address</th>
                            <td>{info.ADDRESS}</td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ResultTable