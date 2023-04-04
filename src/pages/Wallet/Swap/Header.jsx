import React from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as ChevLeft } from '../../../assets/img/icon-chevron-left.svg';

const Header = () => {
    return (
        <>
            <div className="flex justify-between items-center pb-10 px-8 pt-[70px]">
                <Link to="/wallet"><ChevLeft /></Link>
                <div className="font-bold text-[26px]">Swap</div>
                <div></div>
            </div>
            <div className="px-6 mb-10">
                <div className="text-2xl font-black mb-2">Swap</div>
                <p className="text-[10px]">Trade any token, LP share or Vault in a single transation</p>
            </div>
        </>
    )
}

export default Header