import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { ChangeEvent, useEffect, useState } from 'react'

export type IfscSearchProps = {
    bank?: string|string[],
    state?: string|string[],
    district?: string|string[],
    branch?: string|string[]
}


const IfscSearch = (props: IfscSearchProps) => {
    const [selectionState, setSelectionState] = useState<{bank: string, state: string, district: string, branch: string}>({bank: '', state: '', district: '', branch: ''})
    const router = useRouter();

    useEffect(() => {
      
    
    }, [selectionState])
    

    const handleOnSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log("Event ", e.currentTarget.value);
        const value = e.currentTarget.value;

        if(value.trim() !== ''){
            router.push(e.currentTarget.value);
        }
    }
    return (
        <div className='w-full flex items-center justify-center gap-2 flex-wrap'>
            {/* <div className="border border-red-500 w flex gap-2"> */}
                
                <select className="select select-primary w-full max-w-xs capitalize" onChange={handleOnSelect} disabled={props.bank && typeof props.bank === 'string' ? true: false}>
                    {
                        props.bank ?
                        typeof props.bank === 'string' ?
                        <option defaultValue={''} value={selectionState.bank}>{props.bank}</option>
                        :<>
                        <option defaultValue={''}  value={''}>Select Bank</option>
                         {
                            props.bank.map((b, index) => {
                                return <option key={index} value={`/${b.toLowerCase()}`}>{b}</option>
                            })
                         }
                        </>
                        : <option defaultValue={''} value={selectionState.bank}>Select Bank</option>
                    }
                </select>
                <select className="select select-primary w-full max-w-xs capitalize" onChange={handleOnSelect} disabled={props.state && typeof props.state === 'string' ? true: false}>
                    {
                        props.state && props.bank && typeof props.bank === 'string' ?
                        typeof props.state === 'string' ?
                        <option defaultValue={''} value={''}>{props.state}</option>
                        :<>
                        <option defaultValue={''}  value={''}>Select State</option>
                         {
                            props.state.map((b, index) => {
                                return <option key={index} value={`/${props.bank}/${b.toLowerCase()}`}>{b}</option>
                            })
                         }
                        </>
                        : <option defaultValue={''} value={''}>Select State</option>
                    }
                </select>
                
                
                <select className="select select-primary w-full max-w-xs capitalize" onChange={handleOnSelect} disabled={props.district && typeof props.district === 'string' ? true: false}>
                    {
                        props.state && props.bank && props.district ?
                        typeof props.district === 'string' ?
                        <option defaultValue={''} value={''}>{props.district}</option>
                        :<>
                        <option defaultValue={''}  value={''}>Select District</option>
                         {
                            props.district.map((b, index) => {
                                return <option key={index} value={`/${props.bank}/${props.state}/${b.toLowerCase()}`}>{b}</option>
                            })
                         }
                        </>
                        : <option defaultValue={''} value={''}>Select District</option>
                    }
                </select>
                <select className="select select-primary w-full max-w-xs capitalize" onChange={handleOnSelect} disabled={props.branch && typeof props.branch === 'string' ? true: false}>
                    {
                        props.state && props.bank && props.district && props.branch ?
                        typeof props.branch === 'string' ?
                        <option defaultValue={''} value={''}>{props.branch}</option>
                        :<>
                        <option defaultValue={''}  value={''}>Select Branch</option>
                         {
                            props.branch.map((b, index) => {
                                return <option key={index} value={`/${props.bank}/${props.state}/${props.district}/${b.toLowerCase()}`}>{b}</option>
                            })
                         }
                        </>
                        : <option defaultValue={''} value={''}>Select Branch</option>
                    }
                </select>
               
            {/* </div> */}
        </div>
    )
}

export default IfscSearch