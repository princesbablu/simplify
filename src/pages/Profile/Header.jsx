import React from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as ChevLeft } from '../../assets/img/icon-chevron-left.svg';
import { ReactComponent as Gear } from '../../assets/img/icon-gear.svg';

const Header = () => {
    return (
        <div className="flex justify-between items-center pb-10 px-8 pt-[70px]">
            <Link to="/"><ChevLeft /></Link>
            <div className="font-bold text-[26px]">Profile</div>
            <div className="cursor-pointer"><Gear /></div>
        </div>
    )
}

export default Header