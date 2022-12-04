import React, { useContext } from 'react'
import { AppContext } from '../providers/AppProvider';

const HeroTitle = () => {
    const { ifscData } = useContext(AppContext);
    return (
        <div className="w-full flex items-center justify-center mt-40 mb-10">
            <h1 className='text-6xl md:text-6xl drop-shadow  font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
                {
                    ifscData && ifscData.bank ? ifscData.bank : 'FIND IFSC CODE'
                }
            </h1>
        </div>
    )
}

export default HeroTitle