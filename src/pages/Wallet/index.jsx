import React from 'react'
import Layout from '../../components/Layout'
import Header from './Header'

import { ReactComponent as IconSwap } from '../../assets/img/icon-arrow-swap.svg';
import { ReactComponent as IconSend } from '../../assets/img/icon-arrow-send.svg';
import { Link } from 'react-router-dom';
import Tab from './Tab';
import Navigation from '../../components/Navigation';

const Wallet = () => {
    return (
        <Layout>
            <Header />
            <div className="flex flex-col gap-7 px-6 -mt-2.5 z-10">
                <div className="h-[86px] rounded-lg bg-[#1F2124] flex items-stretch justify-evenly">
                    <Link to="/wallet/send" className="flex items-center justify-center font-medium gap-2.5 w-full hover:text-[#AA71FF]">
                        <IconSend /> <span>Send</span>
                    </Link>
                    <Link to="/wallet/swap" className="flex items-center justify-center font-medium gap-2.5 w-full hover:text-[#AA71FF]">
                        <IconSwap /> <span>Swap</span>
                    </Link>
                </div>
                <Tab />
            </div>
            <Navigation />
        </Layout>
    )
}

export default Wallet;