import React from 'react';
import { ReactComponent as IconWallet } from '../assets/img/icon-wallet-nav.svg';
import { ReactComponent as IconTrans } from '../assets/img/icon-trans-nav.svg';
import { ReactComponent as IconProfile } from '../assets/img/icon-profile-nav.svg';
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (

        <div className="max-w-[428px] fixed bottom-0 left-1/2 -translate-x-1/2 z-50 w-full bg-[#292B2E] dark:bg-gray-700 dark:border-gray-600 rounded-t-2xl">
            <div className="grid h-full max-w-lg grid-cols-3 mx-auto">
                <Link to="/wallet" className="text-[#fff]/60 hover:text-[#BE56F1] inline-flex flex-col items-center justify-center px-5 pt-4 pb-5 group">
                    <IconWallet />
                    <span className="text-sm mt-2.5">Wallet</span>
                </Link>
                <Link to="/transaction" className="text-[#fff]/60 hover:text-[#BE56F1] inline-flex flex-col items-center justify-center px-5 pt-4 pb-5 group">
                    <IconTrans />
                    <span className="text-sm mt-2.5">Transactions</span>
                </Link>
                <Link to="/profile" className="text-[#fff]/60 hover:text-[#BE56F1] inline-flex flex-col items-center justify-center px-5 pt-4 pb-5 group">
                    <IconProfile />
                    <span className="text-sm mt-2.5">Profile</span>
                </Link>
            </div>
        </div>

    )
}

export default Navigation